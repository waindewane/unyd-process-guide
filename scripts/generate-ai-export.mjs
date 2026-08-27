import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generalContacts, negotiationResources, processes, ungaResolutionWatchlist } from '../app/processes.ts';
import { operationalNotes } from '../app/operational-notes.ts';
import { siteMeta } from '../app/site-meta.ts';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, '..');
const outputPath = resolve(projectDirectory, 'public/downloads/unyd-process-guide-for-ai.md');

function bulletList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function linkedLabel(label, href) {
  return href ? `[${label}](${href})` : label;
}

function renderProcess(process) {
  const operational = operationalNotes[process.id];
  const lines = [
    `# ${process.acronym}: ${process.name}`,
    '',
    `- **Location:** ${process.location}`,
    `- **2027 date or window:** ${process.date2027}`,
    `- **Date status:** ${process.dateStatus}`,
    '',
    process.summary,
    '',
    '## Process overview',
    '',
    `- **Mandate:** ${operational.overview.mandate}`,
    `- **Main outputs:** ${operational.overview.outputs}`,
    `- **Working structure:** ${operational.overview.workingStructure}`,
    `- **What access depends on:** ${operational.overview.access}`,
    `- **Recurring youth relevance:** ${operational.overview.youthRelevance}`,
    '',
    '## UN Youth Delegate participation',
    '',
    bulletList(process.participation),
  ];

  if (operational.overview.strategicEntryPoints?.length) {
    lines.push('', '### Recurring entry points', '');
    operational.overview.strategicEntryPoints.forEach((entry) => {
      const entryLinks = entry.links?.length
        ? ` Sources: ${entry.links.map((link) => linkedLabel(link.label, link.href)).join('; ')}.`
        : '';
      lines.push(`- **${linkedLabel(entry.title, entry.href)} — ${entry.timing}:** ${entry.detail}${entryLinks}${entry.status ? ` _Status: ${entry.status}._` : ''}`);
    });
  }

  lines.push('', '## Session structure', '');
  process.structure.forEach((item) => {
    lines.push(`- **${item.when} — ${item.label}:** ${item.detail ?? ''}`);
  });

  lines.push(
    '',
    '## Negotiations and policy work',
    '',
    '### Shared negotiation and language resources',
    '',
    ...negotiationResources.map((resource) => `- **${linkedLabel(resource.label, resource.href)}:** ${resource.description}`),
    ...(process.id === 'unga' ? [`- **${linkedLabel(ungaResolutionWatchlist.label, ungaResolutionWatchlist.href)}:** ${ungaResolutionWatchlist.description}`] : []),
    '',
    '### 2027 preparation and negotiation calendar',
    '',
    operational.calendarNote,
    '',
    ...operational.milestones.filter((item) => item.status !== 'recent cycle').map((item) => `- **${item.start} to ${item.end} — ${item.label} (${item.status}):** ${item.detail}`),
    '',
    '### 2027 file watch',
    '',
    `- **Published:** ${process.fileWatch.published}`,
    `- **Expected next:** ${process.fileWatch.expected}`,
    `- **Official page:** ${linkedLabel(process.fileWatch.source.label, process.fileWatch.source.href)}`,
    `- **Practical route:** ${process.fileWatch.route}`,
    '',
    `**What to follow:** ${process.negotiations.focus}`,
    '',
    '**Watch for:**',
    '',
    bulletList(process.negotiations.watch),
    '',
    `**Indicative lead time:** ${process.negotiations.leadTime}`,
    '',
    `**Likely formal route:** ${process.negotiations.route}`,
  );

  lines.push('', '## Practical timeline', '');
  process.timeline.forEach((item) => {
    lines.push(`- **${item.when} — ${linkedLabel(item.action, item.href)}:** ${item.detail}`);
  });

  const verifiedExamples = process.examples.filter((example) => example.state === 'verified');
  if (verifiedExamples.length) lines.push('', '## Examples', '');
  verifiedExamples.forEach((example) => {
    lines.push(
      `- **${example.kind} — ${linkedLabel(example.title, example.href)}**`,
      `  - ${example.detail}`,
    );
  });

  lines.push('', '## Process contacts', '');
  process.contacts.forEach((contact) => {
    lines.push(`- **${contact.label}:** ${contact.role} — [${contact.email}](mailto:${contact.email})`);
  });

  lines.push('', '## Official and primary sources', '');
  process.sources.forEach((source) => {
    lines.push(`- ${linkedLabel(source.label, source.href)}`);
  });

  return lines.join('\n');
}

const generatedAt = new Date().toISOString();
const calendarRows = processes
  .map((process) => `| ${process.acronym} | ${process.name} | ${process.location} | ${process.date2027} | ${process.dateStatus} |`)
  .join('\n');

const content = `---
title: "${siteMeta.name} — website text export"
format: "Markdown"
format_version: 1
content_last_verified: "${siteMeta.lastVerifiedIso}"
export_generated_at: "${generatedAt}"
language: "English"
audience: "Current and future national UN Youth Delegates and people supporting their preparation"
---

# About this file

This file contains the substantive text of the **${siteMeta.name}** website as generated on ${generatedAt}. It can be uploaded to an AI tool as reference material when asking questions about the processes covered by the website.

The website's purpose is: ${siteMeta.purpose}

${siteMeta.scope} Its substantive content was last verified on **${siteMeta.lastVerified}**. The export-generation date does not mean that every linked source was re-verified on that date.

## How an AI assistant should interpret this material

- Use the material to explain, compare, plan and locate sources, while preserving the evidence and date-status labels.
- Do not treat a planning window or recurring historical pattern as an officially scheduled date.
- Treat tentative planning windows as projections, not universal deadlines or guarantees of access. Recent-cycle windows are dated precedents, not confirmed future dates.
- When a question depends on developments after **${siteMeta.lastVerified}**, say that the relevant official source should be checked for an update.
- Prefer the linked official or primary source for a definitive claim. The descriptions here are an orientation layer.
- Do not infer causality or policy influence from an example unless the text explicitly supports it.

This context is intentionally general: the person uploading it may ask for orientation, comparison, preparation help, source discovery, interview planning or another legitimate use.

# How to interpret dates and roles

${bulletList(siteMeta.interpretation)}

# General UN youth contacts

${generalContacts.map((contact) => `- **${contact.label}:** ${contact.role} — [${contact.email}](mailto:${contact.email})`).join('\n')}

## Date-status meanings

- **official:** an exact date published by the responsible official body.
- **official provisional:** a date published in an official provisional calendar or equivalent source and still subject to confirmation.
- **planning window:** an orientation range based on process timing or official programme structure; it is not an exact published 2027 session date.

# ${siteMeta.calendarYear} UN process calendar

| Process | Full name | Location | ${siteMeta.calendarYear} date or window | Status |
|---|---|---|---|---|
${calendarRows}

The separate calendar download on the website includes only official exact and official provisional dates. Planning windows are visible for orientation but are not silently added to a user's calendar.

# UNYD process guides

${processes.map(renderProcess).join('\n\n---\n\n')}

<!-- End of website text export -->
`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, content, 'utf8');
console.log(`Generated ${outputPath}`);
