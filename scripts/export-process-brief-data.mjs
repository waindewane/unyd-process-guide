import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  generalContacts,
  negotiationResources,
  processes,
  ungaResolutionWatchlist,
} from '../app/processes.ts';
import { operationalNotes } from '../app/operational-notes.ts';
import { siteMeta } from '../app/site-meta.ts';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, '..');
const outputPath = resolve(process.argv[2] ?? resolve(projectDirectory, 'tmp/process-brief-data.json'));

const data = {
  generatedAt: new Date().toISOString(),
  siteMeta,
  generalContacts,
  negotiationResources,
  ungaResolutionWatchlist,
  processes: processes.map((process) => ({
    ...process,
    operational: operationalNotes[process.id],
  })),
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
console.log(`Generated ${outputPath}`);
