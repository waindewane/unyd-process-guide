import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { operationalNotes } from '../app/operational-notes.ts';
import { processById } from '../app/processes.ts';
import { siteMeta } from '../app/site-meta.ts';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, '..');
const outputPath = resolve(projectDirectory, 'public/calendar/unyd-2027-planning-calendar.ics');

function icsDate(date) {
  return date.replaceAll('-', '');
}

function nextDay(date) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + 1);
  return value.toISOString().slice(0, 10);
}

function escape(value) {
  return value.replaceAll('\\', '\\\\').replaceAll('\n', '\\n').replaceAll(',', '\\,').replaceAll(';', '\\;');
}

const events = Object.entries(operationalNotes).flatMap(([id, note]) => {
  const process = processById[id];
  return note.milestones.map((milestone) => {
    const planningPrefix = milestone.kind === 'session' ? '' : '[Planning] ';
    const summary = `${planningPrefix}${process.acronym}: ${milestone.label}`;
    const description = `${milestone.detail}\nStatus: ${milestone.status}. ${note.calendarNote}\nOfficial process source: ${process.sources[0].href}`;
    return [
      'BEGIN:VEVENT',
      `UID:${id}-${milestone.start}-${milestone.label.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}@unyd-process-guide`,
      `DTSTAMP:${siteMeta.lastVerifiedIso.replaceAll('-', '')}T000000Z`,
      `DTSTART;VALUE=DATE:${icsDate(milestone.start)}`,
      `DTEND;VALUE=DATE:${icsDate(nextDay(milestone.end))}`,
      `SUMMARY:${escape(summary)}`,
      `LOCATION:${escape(process.location)}`,
      `DESCRIPTION:${escape(description)}`,
      `URL:${process.sources[0].href}`,
      'END:VEVENT',
    ].join('\r\n');
  });
});

const content = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//UNYD Process Guide//2027 Planning Calendar//EN',
  'CALSCALE:GREGORIAN',
  'METHOD:PUBLISH',
  'X-WR-CALNAME:UNYD 2027 policy and negotiation planning',
  'X-WR-CALDESC:Official session dates plus clearly labelled recent-cycle and indicative preparation milestones.',
  ...events,
  'END:VCALENDAR',
  '',
].join('\r\n');

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, content, 'utf8');
console.log(`Generated ${outputPath}`);
