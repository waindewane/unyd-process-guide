'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { generalContacts, negotiationResources, processById, processes, ungaResolutionWatchlist, type ProcessGuide } from './processes';
import { operationalNotes, type PlanningMilestone } from './operational-notes';
import { siteMeta } from './site-meta';

type Tab = 'overview' | 'negotiations' | 'timeline' | 'examples' | 'contacts';
type EntryState = 'checking' | 'prompt' | 'accepted' | 'denied';

const entrySessionKey = 'unyd-process-guide-entry-v1';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const planningZoomLevels = [1, 1.5, 2, 3, 4, 5, 6, 7];

const calendarBars = [
  { process: 'csocd', label: 'CSocD', left: 8.45, width: 4.15, minWidth: 60, kind: 'official' },
  { process: 'csw', label: 'CSW', left: 18.3, width: 4.35, minWidth: 46, kind: 'provisional' },
  { process: 'ecosoc-yf', label: 'Youth Forum', left: 27.9, width: 5.4, minWidth: 78, kind: 'provisional' },
  { process: 'hlpf', label: 'HLPF', left: 50.9, width: 5.2, minWidth: 52, kind: 'provisional' },
  { process: 'unga', label: 'UNGA + Third Committee', left: 68.7, width: 23.9, minWidth: 0, kind: 'official' },
  { process: 'hrc', label: 'HRC 64', left: 14.8, width: 10.4, minWidth: 0, kind: 'official' },
  { process: 'hrc', label: 'HRC 65', left: 45.2, width: 7.0, minWidth: 0, kind: 'official' },
  { process: 'hrc', label: 'HRC 66', left: 68.0, width: 9.0, minWidth: 0, kind: 'official' },
  { process: 'cnd', label: 'CND', left: 20.3, width: 4.2, minWidth: 48, kind: 'provisional' },
] as const;

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'negotiations', label: 'Negotiations' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'examples', label: 'Examples' },
  { id: 'contacts', label: 'Contacts & links' },
];

function googleCalendarUrl(process: ProcessGuide) {
  if (!process.calendarStart || !process.calendarEnd) return undefined;
  const query = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${process.acronym}: ${process.name}`,
    dates: `${process.calendarStart}/${process.calendarEnd}`,
    details: `${process.dateStatus === 'official provisional' ? 'Official provisional date — re-check before booking. ' : ''}Official source: ${process.sources[0]?.href ?? ''}`,
    location: process.location,
  });
  return `https://calendar.google.com/calendar/render?${query.toString()}`;
}

function StatusBadge({ status }: { status: ProcessGuide['dateStatus'] }) {
  return <span className={`status-badge status-${status.replaceAll(' ', '-')}`}>{status}</span>;
}

function yearPosition(date: string) {
  const start = Date.UTC(2027, 0, 1);
  const end = Date.UTC(2028, 0, 1);
  return ((Date.parse(`${date}T00:00:00Z`) - start) / (end - start)) * 100;
}

function milestoneStyle(milestone: PlanningMilestone) {
  const left = Math.max(0, yearPosition(milestone.start));
  const right = Math.min(100, yearPosition(milestone.end) + (100 / 365));
  return { left: `${left}%`, width: `${Math.max(1.15, right - left)}%` };
}

function formatPlanningRange(start: string, end: string) {
  const formatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' });
  const startDate = new Date(`${start}T00:00:00Z`);
  const endDate = new Date(`${end}T00:00:00Z`);
  if (start === end) return `${formatter.format(startDate)} 2027`;
  return `${formatter.format(startDate)}–${formatter.format(endDate)} 2027`;
}

function PlanningLegend() {
  return (
    <div className="planning-legend" aria-label="Preparation calendar legend">
      <span><i className="planning-swatch session" />Session or forum</span>
      <span><i className="planning-swatch prepare" />Preparation</span>
      <span><i className="planning-swatch draft" />Draft or input window</span>
      <span><i className="planning-swatch negotiate" />Negotiation</span>
      <span><i className="planning-swatch follow-up" />Follow-up</span>
      <span><i className="planning-swatch tentative" />Tentative projection</span>
    </div>
  );
}

function ProcessPlanningCalendar({ process }: { process: ProcessGuide }) {
  const note = operationalNotes[process.id];
  const currentMilestones = note.milestones.filter((milestone) => milestone.status !== 'recent cycle');
  return (
    <section className={`process-planning process-${process.id}`}>
      <div className="planning-heading">
        <div><h3>Preparation and negotiation calendar</h3><p>{note.calendarNote}</p></div>
        <div className="calendar-actions">
          <a className="button secondary" href={negotiationResources[0].href} target="_blank" rel="noreferrer" title={negotiationResources[0].description}>Negotiation and language guide ↗</a>
          <a className="text-action" href={negotiationResources[1].href} target="_blank" rel="noreferrer" title={negotiationResources[1].description}>UNGA explainer slides · negotiation section ↗</a>
          {process.id === 'unga' && <a className="text-action" href={ungaResolutionWatchlist.href} target="_blank" rel="noreferrer" title={ungaResolutionWatchlist.description}>UNGA81 recurring-resolutions watchlist ↗</a>}
          <a className="text-action" href="./calendar/unyd-2027-planning-calendar.ics" download>Download all planning milestones (.ics)</a>
        </div>
      </div>
      <div className="planning-table-scroll" role="region" aria-label={`${process.acronym} 2027 preparation calendar`} tabIndex={0}>
        <div className="planning-table">
          <div className="planning-months"><span />{months.map((month) => <b key={month}>{month}</b>)}</div>
          {currentMilestones.map((milestone) => (
            <div className="planning-row" key={`${milestone.start}-${milestone.label}`}>
              <div className="planning-label"><strong>{milestone.label}</strong><span>{milestone.status}</span></div>
              <div className="planning-track"><span className={`planning-bar kind-${milestone.kind} status-${milestone.status.replaceAll(' ', '-')}`} style={milestoneStyle(milestone)} title={`${milestone.label}: ${milestone.detail}`} /></div>
            </div>
          ))}
        </div>
      </div>
      <PlanningLegend />
    </section>
  );
}

function CombinedPlanningCalendar({ selectProcess }: { selectProcess: (id: string) => void }) {
  const [zoomIndex, setZoomIndex] = useState(0);
  const zoomIndexRef = useRef(0);
  const calendarScrollRef = useRef<HTMLDivElement>(null);
  const lastWheelZoomRef = useRef(0);
  const [tooltip, setTooltip] = useState<{
    process: ProcessGuide;
    milestone: PlanningMilestone;
    left: number;
    top: number;
    above: boolean;
  } | null>(null);
  const zoom = planningZoomLevels[zoomIndex];
  const expandedWidth = 126 + (924 * zoom);

  const applyZoom = useCallback((requestedIndex: number, clientX?: number) => {
    const nextIndex = Math.min(planningZoomLevels.length - 1, Math.max(0, requestedIndex));
    const currentIndex = zoomIndexRef.current;
    if (nextIndex === currentIndex) return;

    const container = calendarScrollRef.current;
    if (!container) {
      zoomIndexRef.current = nextIndex;
      setZoomIndex(nextIndex);
      return;
    }

    const rect = container.getBoundingClientRect();
    const anchor = clientX === undefined
      ? container.clientWidth / 2
      : Math.min(container.clientWidth, Math.max(0, clientX - rect.left));
    const oldScrollWidth = container.scrollWidth;
    const anchorRatio = (container.scrollLeft + anchor) / oldScrollWidth;

    zoomIndexRef.current = nextIndex;
    setZoomIndex(nextIndex);
    requestAnimationFrame(() => {
      const updated = calendarScrollRef.current;
      if (updated) updated.scrollLeft = Math.max(0, (anchorRatio * updated.scrollWidth) - anchor);
    });
  }, []);

  useEffect(() => {
    const container = calendarScrollRef.current;
    if (!container) return;

    function handleWheel(event: WheelEvent) {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      if (event.deltaY === 0) return;

      const now = performance.now();
      if (now - lastWheelZoomRef.current < 80) return;
      lastWheelZoomRef.current = now;
      applyZoom(zoomIndexRef.current + (event.deltaY < 0 ? 1 : -1), event.clientX);
    }

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [applyZoom]);

  function showTooltip(element: HTMLButtonElement, process: ProcessGuide, milestone: PlanningMilestone) {
    const rect = element.getBoundingClientRect();
    const above = window.innerHeight - rect.bottom < 150;
    setTooltip({
      process,
      milestone,
      left: Math.min(Math.max(8, rect.left), Math.max(8, window.innerWidth - 328)),
      top: above ? rect.top - 8 : rect.bottom + 8,
      above,
    });
  }

  return (
    <section className="detailed-calendar" id="preparation" aria-labelledby="preparation-title">
      <div className="section-heading">
        <div><p className="eyebrow">2027 preparation</p><h2 id="preparation-title">Policy and negotiation calendar</h2></div>
        <div className="calendar-actions"><a className="button secondary" href="./calendar/unyd-2027-planning-calendar.ics" download>Download detailed calendar (.ics)</a><span>Includes labelled planning estimates</span></div>
      </div>
      <p className="calendar-explainer">Session dates are shown in full colour. Lighter bars mark the work that normally has to happen before or after them. Open a process below for the milestone descriptions and evidence status.</p>
      <div className="calendar-toolbar">
        <div className="time-zoom" role="group" aria-label="Calendar time-axis zoom">
          <span>Time scale</span>
          <button type="button" onClick={() => applyZoom(zoomIndexRef.current - 1)} disabled={zoomIndex === 0} aria-label="Zoom out time axis">−</button>
          <output aria-live="polite">{Math.round(zoom * 100)}%</output>
          <button type="button" onClick={() => applyZoom(zoomIndexRef.current + 1)} disabled={zoomIndex === planningZoomLevels.length - 1} aria-label="Zoom in time axis">+</button>
        </div>
        <span>Pinch or Ctrl/⌘ + scroll · horizontal scale only</span>
      </div>
      <div ref={calendarScrollRef} className="calendar-scroll" role="region" aria-label="Scrollable combined 2027 preparation calendar" tabIndex={0} onScroll={() => setTooltip(null)}>
        <div className="combined-planning-board" style={{ width: zoom === 1 ? '100%' : `${expandedWidth}px`, minWidth: `${expandedWidth}px` }}>
          <div className="combined-month-row"><span />{months.map((month) => <b key={month}>{month}</b>)}</div>
          {processes.map((process) => (
            <div className={`combined-process-row process-${process.id}`} key={process.id}>
              <button className="combined-process-label" onClick={() => selectProcess(process.id)}><strong>{process.acronym}</strong><span>{process.location}</span></button>
              <div className="combined-process-track">
                {operationalNotes[process.id].milestones.filter((milestone) => milestone.status !== 'recent cycle').map((milestone) => (
                  <button
                    key={`${milestone.start}-${milestone.label}`}
                    className={`combined-bar kind-${milestone.kind} status-${milestone.status.replaceAll(' ', '-')} lane-${milestone.lane}`}
                    style={milestoneStyle(milestone)}
                    onClick={() => { setTooltip(null); selectProcess(process.id); }}
                    onMouseEnter={(event) => showTooltip(event.currentTarget, process, milestone)}
                    onMouseLeave={() => setTooltip(null)}
                    onFocus={(event) => showTooltip(event.currentTarget, process, milestone)}
                    onBlur={() => setTooltip(null)}
                    aria-label={`${process.acronym}, ${milestone.label}, ${formatPlanningRange(milestone.start, milestone.end)}, ${milestone.status}. ${milestone.detail}`}
                    aria-describedby={tooltip?.process.id === process.id && tooltip.milestone === milestone ? 'calendar-milestone-tooltip' : undefined}
                  ><span>{milestone.label}</span></button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PlanningLegend />
      <p className="calendar-caveat">Tentative bars are early-warning projections, not UN deadlines. Historical precedents remain in the process timelines instead of being plotted on the 2027 axis. Check the linked official process page before acting on a projected date.</p>
      {tooltip && (
        <div id="calendar-milestone-tooltip" className={`calendar-tooltip ${tooltip.above ? 'above' : ''}`} role="tooltip" style={{ left: tooltip.left, top: tooltip.top }}>
          <strong>{tooltip.process.acronym} · {tooltip.milestone.label}</strong>
          <span>{formatPlanningRange(tooltip.milestone.start, tooltip.milestone.end)} · {tooltip.milestone.status}</span>
          <p>{tooltip.milestone.detail}</p>
        </div>
      )}
    </section>
  );
}

function ProcessContent({ process, tab }: { process: ProcessGuide; tab: Tab }) {
  if (tab === 'overview') {
    const overview = operationalNotes[process.id].overview;
    return (
      <div className="section-stack">
        <section>
          <h3>Process overview</h3>
          <dl className="overview-grid">
            <div><dt>Mandate</dt><dd>{overview.mandate}</dd></div>
            <div><dt>Main outputs</dt><dd>{overview.outputs}</dd></div>
            <div><dt>Working structure</dt><dd>{overview.workingStructure}</dd></div>
            <div><dt>What access depends on</dt><dd>{overview.access}</dd></div>
            <div className="wide"><dt>Recurring youth relevance</dt><dd>{overview.youthRelevance}</dd></div>
          </dl>
          {overview.strategicEntryPoints && (
            <div className="strategic-entry-points">
              <h4>Recurring entry points</h4>
              {overview.strategicEntryPoints.map((entry) => (
                <article key={entry.title}>
                  <div>
                    <strong>{entry.href ? <a href={entry.href} target="_blank" rel="noreferrer">{entry.title}</a> : entry.title}</strong>
                    <span>{entry.timing}</span>
                  </div>
                  <p>{entry.detail}</p>
                  {entry.links && (
                    <p className="entry-links">
                      {entry.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
                    </p>
                  )}
                  {entry.status && <small>{entry.status}</small>}
                </article>
              ))}
            </div>
          )}
        </section>
        <section className="participation-section">
          <h3>UNYD participation</h3>
          <p className="section-intro">Roles depend on the national mandate and delegation arrangements.</p>
          <ul className="plain-list">
            {process.participation.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="text-action source-action" href={process.sources[0].href} target="_blank" rel="noreferrer">Official process page ↗</a>
        </section>
      </div>
    );
  }

  if (tab === 'negotiations') {
    return (
      <div className="section-stack">
        <ProcessPlanningCalendar process={process} />
        <section className="file-watch" aria-labelledby={`${process.id}-file-watch-title`}>
          <h3 id={`${process.id}-file-watch-title`}>2027 file watch</h3>
          <dl>
            <div><dt>Published</dt><dd>{process.fileWatch.published}</dd></div>
            <div><dt>Expected next</dt><dd>{process.fileWatch.expected}</dd></div>
            <div><dt>Official page</dt><dd><a href={process.fileWatch.source.href} target="_blank" rel="noreferrer">{process.fileWatch.source.label} ↗</a></dd></div>
            <div><dt>Practical route</dt><dd>{process.fileWatch.route}</dd></div>
          </dl>
        </section>
        <section>
          <h3>What to follow</h3>
          <p>{process.negotiations.focus}</p>
          <ul className="plain-list">{process.negotiations.watch.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <div className="two-note-grid">
          <section className="field-note"><p className="eyebrow">Indicative lead time</p><p>{process.negotiations.leadTime}</p></section>
          <section className="field-note"><p className="eyebrow">Likely formal route</p><p>{process.negotiations.route}</p></section>
        </div>
      </div>
    );
  }

  if (tab === 'timeline') {
    return (
      <ol className="process-timeline">
        {process.timeline.map((item) => (
          <li key={`${item.when}-${item.action}`}>
            <div className="timeline-when">{item.when}</div>
            <div>
              <h3>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.action}</a> : item.action}</h3>
              <p>{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (tab === 'examples') {
    const groups = ['Special format', 'Side event', 'Statement', 'Policy / negotiation', 'Initiative', 'Meeting'] as const;
    const publicExamples = process.examples.filter((example) => example.state === 'verified');
    return (
      <div className="examples-list">
        {groups.map((kind) => {
          const examples = publicExamples.filter((example) => example.kind === kind);
          if (!examples.length) return null;
          return (
            <section key={kind}>
              <h3>{kind}</h3>
              {examples.map((example) => (
                <article className="example-row" key={example.title}>
                  <div><h4>{example.title}</h4><p>{example.detail}</p></div>
                  <div className="example-meta">
                    {example.href && <a href={example.href} target="_blank" rel="noreferrer">Open ↗</a>}
                  </div>
                </article>
              ))}
            </section>
          );
        })}
      </div>
    );
  }

  return (
    <div className="contacts-links-grid">
      <section>
        <h3>Process contacts</h3>
        <div className="contact-list">
          {process.contacts.map((contact) => (
            <article className="contact-entry" key={contact.email}>
              <p><strong>{contact.label}</strong> — {contact.role}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h3>Official links</h3>
        <div className="official-link-list">
          {process.sources.map((source) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a>)}
        </div>
      </section>
    </div>
  );
}

function ProcessStructure({ process }: { process: ProcessGuide }) {
  return (
    <section className="process-structure" aria-labelledby={`${process.id}-structure-title`}>
      <div className="structure-heading">
        <h3 id={`${process.id}-structure-title`}>Session structure</h3>
        <span>Exact dates shown where confirmed</span>
      </div>
      <ol className="structure-grid">
        {process.structure.map((item) => (
          <li key={`${item.when}-${item.label}`}>
            <span>{item.when}</span>
            <strong>{item.label}</strong>
            {item.detail && <small>{item.detail}</small>}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Home() {
  const [entryState, setEntryState] = useState<EntryState>('checking');
  const [activeId, setActiveId] = useState('csocd');
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const entryYesRef = useRef<HTMLButtonElement>(null);
  const [annualTooltip, setAnnualTooltip] = useState<{
    title: string;
    date: string;
    meta: string;
    detail: string;
    left: number;
    top: number;
    above: boolean;
  } | null>(null);

  const activeProcess = useMemo(() => processById[activeId] ?? processes[0], [activeId]);
  const addUrl = googleCalendarUrl(activeProcess);

  useEffect(() => {
    const storageCheck = window.setTimeout(() => {
      try {
        setEntryState(window.sessionStorage.getItem(entrySessionKey) === 'accepted' ? 'accepted' : 'prompt');
      } catch {
        setEntryState('prompt');
      }
    }, 0);
    return () => window.clearTimeout(storageCheck);
  }, []);

  useEffect(() => {
    if (entryState === 'prompt') entryYesRef.current?.focus();
  }, [entryState]);

  useEffect(() => {
    if (entryState === 'accepted') return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [entryState]);

  function acceptEntry() {
    try {
      window.sessionStorage.setItem(entrySessionKey, 'accepted');
    } catch {
      // The current page can still be opened if browser storage is unavailable.
    }
    setEntryState('accepted');
  }

  function selectProcess(id: string, scroll = true) {
    setAnnualTooltip(null);
    setActiveId(id);
    setActiveTab('overview');
    window.history.replaceState(null, '', `#${id}`);
    if (scroll) document.getElementById('process-library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function annualBarDate(label: string, process: ProcessGuide) {
    if (label === 'HRC 64') return '24 February–2 April 2027';
    if (label === 'HRC 65') return '14 June–9 July 2027';
    if (label === 'HRC 66') return '6 September–8 October 2027';
    return process.date2027;
  }

  function showAnnualTooltip(element: HTMLButtonElement, process: ProcessGuide, label: string) {
    const rect = element.getBoundingClientRect();
    const above = window.innerHeight - rect.bottom < 170;
    setAnnualTooltip({
      title: label.startsWith('HRC ') ? `${label}: ${process.name}` : process.name,
      date: annualBarDate(label, process),
      meta: `${process.location} · ${process.dateStatus}`,
      detail: process.summary,
      left: Math.min(Math.max(8, rect.left), Math.max(8, window.innerWidth - 336)),
      top: above ? rect.top - 8 : rect.bottom + 8,
      above,
    });
  }

  return (
    <>
      {entryState !== 'accepted' && (
        <div
          className={`entry-gate state-${entryState}`}
          role={entryState === 'prompt' ? 'dialog' : 'status'}
          aria-modal={entryState === 'prompt' ? 'true' : undefined}
          aria-labelledby={entryState === 'prompt' ? 'entry-question' : entryState === 'denied' ? 'entry-denied' : undefined}
          aria-busy={entryState === 'checking'}
        >
          {entryState === 'prompt' && (
            <div className="entry-gate-panel">
              <h1 id="entry-question">Are you currently a UN Youth Delegate?</h1>
              <div className="entry-gate-actions">
                <button ref={entryYesRef} type="button" className="entry-yes" onClick={acceptEntry}>Yes, enter</button>
                <button type="button" className="entry-no" onClick={() => setEntryState('denied')}>No</button>
              </div>
            </div>
          )}
          {entryState === 'denied' && (
            <div className="entry-gate-panel">
              <h1 id="entry-denied">This site is an internal resource only for current UN Youth Delegates.</h1>
            </div>
          )}
        </div>
      )}
      <main inert={entryState !== 'accepted'} aria-hidden={entryState !== 'accepted'}>
      <header className="site-header">
        <a className="wordmark" href="#top">UNYD process guide</a>
        <nav aria-label="Page navigation"><a href="#calendar">Calendar</a><a href="#preparation">Preparation</a><a href="#process-library">Processes</a><a href="#ai-download">Text export</a></nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">UN Youth Delegate resource</p>
        <h1>{siteMeta.title}</h1>
        <p className="hero-copy">{siteMeta.purpose}</p>
        <div className="hero-actions" id="ai-download">
          <a className="button export-button" href="./downloads/unyd-process-guide-for-ai.md" download>Download text export for AI</a>
          <span>Download the full content of this website as a text file, then upload it to any AI tool to ask questions about it more easily.</span>
        </div>
      </section>

      <section className="calendar-section" id="calendar" aria-labelledby="calendar-title">
        <div className="section-heading">
          <div><p className="eyebrow">2027</p><h2 id="calendar-title">UN process calendar</h2></div>
          <div className="calendar-actions"><a className="button secondary" href="./calendar/unyd-2027-official-dates.ics" download>Download calendar (.ics)</a><span>Official exact and official provisional dates only</span></div>
        </div>

        <div className="calendar-scroll" role="region" aria-label="Scrollable 2027 process calendar" tabIndex={0} onScroll={() => setAnnualTooltip(null)}>
          <div className="calendar-board">
            <div className="month-row" aria-hidden="true"><span className="lane-spacer" /><div className="months">{months.map((month) => <span key={month}>{month}</span>)}</div></div>
            <div className="calendar-lane">
              <div className="lane-label"><strong>Main cycle</strong><span>New York</span></div>
              <div className="lane-track">
                {calendarBars.slice(0, 5).map((bar) => <button key={bar.label} className={`calendar-bar bar-${bar.kind}`} style={{ left: `${bar.left}%`, width: `${bar.width}%`, minWidth: bar.minWidth || undefined }} onClick={() => selectProcess(bar.process)} onMouseEnter={(event) => showAnnualTooltip(event.currentTarget, processById[bar.process], bar.label)} onMouseLeave={() => setAnnualTooltip(null)} onFocus={(event) => showAnnualTooltip(event.currentTarget, processById[bar.process], bar.label)} onBlur={() => setAnnualTooltip(null)} aria-label={`${processById[bar.process].name}: ${processById[bar.process].date2027}`} aria-describedby={annualTooltip?.title.includes(processById[bar.process].name) ? 'annual-calendar-tooltip' : undefined}>{bar.label}</button>)}
              </div>
            </div>
            <div className="calendar-lane">
              <div className="lane-label"><strong>HRC</strong><span>Geneva</span></div>
              <div className="lane-track">
                {calendarBars.slice(5, 8).map((bar) => <button key={bar.label} className="calendar-bar bar-official" style={{ left: `${bar.left}%`, width: `${bar.width}%` }} onClick={() => selectProcess('hrc')} onMouseEnter={(event) => showAnnualTooltip(event.currentTarget, processById.hrc, bar.label)} onMouseLeave={() => setAnnualTooltip(null)} onFocus={(event) => showAnnualTooltip(event.currentTarget, processById.hrc, bar.label)} onBlur={() => setAnnualTooltip(null)} aria-label={`Human Rights Council ${bar.label.slice(4)}: ${annualBarDate(bar.label, processById.hrc)}`} aria-describedby={annualTooltip?.title.startsWith(`${bar.label}:`) ? 'annual-calendar-tooltip' : undefined}>{bar.label}</button>)}
              </div>
            </div>
            <div className="calendar-lane">
              <div className="lane-label"><strong>CND</strong><span>Vienna</span></div>
              <div className="lane-track">
                {calendarBars.slice(8).map((bar) => <button key={bar.label} className="calendar-bar bar-provisional" style={{ left: `${bar.left}%`, width: `${bar.width}%`, minWidth: bar.minWidth }} onClick={() => selectProcess('cnd')} onMouseEnter={(event) => showAnnualTooltip(event.currentTarget, processById.cnd, bar.label)} onMouseLeave={() => setAnnualTooltip(null)} onFocus={(event) => showAnnualTooltip(event.currentTarget, processById.cnd, bar.label)} onBlur={() => setAnnualTooltip(null)} aria-label={`${processById.cnd.name}: ${processById.cnd.date2027}`} aria-describedby={annualTooltip?.title === processById.cnd.name ? 'annual-calendar-tooltip' : undefined}>{bar.label}</button>)}
              </div>
            </div>
          </div>
        </div>

        <div className="legend" aria-label="Calendar status legend">
          <span><i className="legend-swatch official" />Official date</span><span><i className="legend-swatch provisional" />Official provisional date</span><span><i className="legend-swatch window" />Planning window</span><span className="last-updated">Status: {siteMeta.lastVerified}</span>
        </div>
        {annualTooltip && (
          <div id="annual-calendar-tooltip" className={`calendar-tooltip annual-calendar-tooltip ${annualTooltip.above ? 'above' : ''}`} role="tooltip" style={{ left: annualTooltip.left, top: annualTooltip.top }}>
            <strong>{annualTooltip.title}</strong>
            <span>{annualTooltip.date} · {annualTooltip.meta}</span>
            <p>{annualTooltip.detail}</p>
          </div>
        )}
      </section>

      <CombinedPlanningCalendar selectProcess={(id) => selectProcess(id)} />

      <section className="library" id="process-library" aria-labelledby="library-title">
        <div className="section-heading library-heading">
          <div><p className="eyebrow">Processes</p><h2 id="library-title">UNYD process guides</h2></div>
          <label className="process-select"><span>Process</span><select value={activeId} onChange={(event) => selectProcess(event.target.value, false)}>{processes.map((process) => <option value={process.id} key={process.id}>{process.acronym} — {process.name}</option>)}</select></label>
        </div>

        <div className="process-switcher" role="list" aria-label="Processes">
          {processes.map((process) => <button key={process.id} className={process.id === activeId ? 'active' : ''} onClick={() => selectProcess(process.id, false)} role="listitem"><span>{process.acronym}</span><small>{process.name}</small></button>)}
        </div>

        <article className="process-card">
          <header className="process-header">
            <div><p className="eyebrow">{activeProcess.location}</p><h2>{activeProcess.name}</h2><p>{activeProcess.summary}</p></div>
            <div className="date-panel"><StatusBadge status={activeProcess.dateStatus} /><strong>{activeProcess.date2027}</strong>{addUrl ? <a className="text-action" href={addUrl} target="_blank" rel="noreferrer">Add this date to Google Calendar ↗</a> : activeProcess.id === 'hrc' ? <a className="text-action" href="./calendar/unyd-2027-official-dates.ics" download>Download all three HRC sessions (.ics)</a> : <span className="disabled-action">Calendar link after official dates are published</span>}<a className="button process-export-button" href={`./downloads/process-briefs/${activeProcess.id}-prose-brief.docx`} download title={`If the structure of the website feels confusing, download the current information about ${activeProcess.name} as a minimally formatted prose document.`}>Download process as prose (.docx)</a></div>
          </header>

          <ProcessStructure process={activeProcess} />

          <div className="tabs" role="tablist" aria-label={`${activeProcess.acronym} sections`}>
            {tabs.filter((tab) => tab.id !== 'examples' || activeProcess.examples.length > 0).map((tab) => <button key={tab.id} role="tab" aria-selected={activeTab === tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>)}
          </div>
          <div className="tab-content" role="tabpanel"><ProcessContent process={activeProcess} tab={activeTab} /></div>
        </article>

        <section className="general-contacts" aria-labelledby="general-contacts-title">
          <div><p className="eyebrow">All processes</p><h3 id="general-contacts-title">General UN youth contacts</h3></div>
          <div className="general-contact-list">
            {generalContacts.map((contact) => (
              <article className="contact-entry" key={contact.email}>
                <p><strong>{contact.label}</strong> — {contact.role}</p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </article>
            ))}
          </div>
        </section>
      </section>

      <footer><span>UN Youth Delegate process guide · updated {siteMeta.lastVerified}</span><a href="https://social.desa.un.org/issues/youth/un-youth-delegate-programme" target="_blank" rel="noreferrer">UN Youth Delegate Programme ↗</a></footer>
      </main>
    </>
  );
}
