export type EvidenceState = 'verified';
export type Contact = { label: string; role: string; email: string };
export type FileWatch = {
  published: string;
  expected: string;
  source: { label: string; href: string };
  route: string;
};

export type ProcessGuide = {
  id: string;
  acronym: string;
  name: string;
  location: string;
  date2027: string;
  dateStatus: 'official' | 'official provisional' | 'planning window';
  calendarStart?: string;
  calendarEnd?: string;
  fileWatch: FileWatch;
  summary: string;
  participation: string[];
  structure: { when: string; label: string; detail?: string }[];
  negotiations: {
    focus: string;
    watch: string[];
    leadTime: string;
    route: string;
  };
  timeline: { when: string; action: string; detail: string; href?: string }[];
  examples: {
    kind: 'Special format' | 'Side event' | 'Statement' | 'Policy / negotiation' | 'Initiative' | 'Meeting';
    title: string;
    detail: string;
    state: EvidenceState;
    href?: string;
  }[];
  contacts: Contact[];
  sources: { label: string; href: string }[];
};

export const processes: ProcessGuide[] = [
  {
    id: 'csocd',
    acronym: 'CSocD',
    name: 'Commission for Social Development',
    location: 'New York',
    date2027: '1–10 February 2027',
    dateStatus: 'official',
    calendarStart: '20270201',
    calendarEnd: '20270211',
    fileWatch: {
      published: 'Official dates, the priority theme and the current Bureau are public.',
      expected: 'The biennial youth report, youth-resolution draft and proposed organization of work.',
      source: { label: 'CSocD65 official page', href: 'https://social.desa.un.org/csocd/65th-session' },
      route: 'Ask your country’s Permanent Mission in New York for the live youth-resolution draft and its internal deadline.',
    },
    summary:
      'ECOSOC functional commission on social development. Its annual session considers a priority theme, draft resolutions and a session report.',
    participation: [
      'UN Youth Delegates normally participate through their country’s official delegation; the precise accreditation and responsibilities depend on the national programme and their country’s Permanent Mission in New York.',
      'Possible roles include delegation briefings, statements, Chair or Bureau exchanges, side events, collective position papers and text proposals.',
      'Input to draft outcomes normally requires early coordination with the country’s Permanent Mission in New York before the formal session begins.',
    ],
    structure: [
      { when: 'Dec–Jan', label: 'Pre-session drafting', detail: 'Agenda review, national-delegation coordination and draft-text preparation' },
      { when: '1 February', label: 'Opening', detail: 'Formal opening and start of the session' },
      { when: '1–9 February', label: 'Policy work', detail: 'General discussion, side events and draft-resolution work' },
      { when: '10 February', label: 'Action and closing', detail: 'Final decisions, session report and closing' },
    ],
    negotiations: {
      focus:
        'The Commission works through a priority theme, an emerging issue, Secretary-General reports and draft resolutions. In odd years, the recurring resolution on policies and programmes involving youth is the clearest UNYD negotiation file.',
      watch: [
        'The CSocD65 priority theme is intergenerational approaches to social development and implementation of the Copenhagen and Doha commitments towards 2030 and beyond. Stefano Guerra of Portugal is the current Chair; the official page lists the full Bureau.',
        'The provisional annotated agenda and proposed organization of work: together they identify the priority theme, emerging issue, reports, panels and day-by-day schedule.',
        '“Policies and programmes involving youth” was adopted in 2015, 2017, 2019, 2021, 2023 and 2025. A 2027 text is expected from that biennial pattern, but is not formally tabled until the session documentation lists it.',
        'The biennial Secretary-General report on policies and programmes involving youth. The official archive lists CSocD reports in 2017, 2019, 2021, 2023 and 2025; the report supplies implementation evidence and recommendations for the resolution considered in the same cycle.',
        'Any pre-session Chair or Bureau briefing. CSocD63 held an official Chair briefing on 9 January 2025; recurrence and timing are not guaranteed.',
      ],
      leadTime:
        'Check the annotated agenda and Bureau from November. In an odd-year CSocD youth-resolution cycle, contact your country’s Permanent Mission in New York by early January and ask when the live draft and internal deadline will circulate. The documented 2025 UNYD input was transmitted on 17 January.',
      route:
        'Use your country’s Permanent Mission in New York as the formal route for proposed text. Ask which person or team follows the CSocD resolution on policies and programmes involving youth, whether the country is negotiating or co-sponsoring it, and where clause-specific wording must arrive before national or regional coordination.',
    },
    timeline: [
      { when: 'From November', action: 'Annotated agenda and organization of work', detail: 'These documents identify the priority theme, emerging issue, Secretary-General reports, panels, Bureau and day-by-day session structure. When the organization of work appears, extract the current draft-proposal and speaker-list deadlines rather than relying on a previous session’s dates.', href: 'https://social.desa.un.org/csocd/65th-session' },
      { when: 'Early January · odd years', action: 'Biennial report and CSocD youth-resolution file', detail: 'Check the new biennial Secretary-General youth report and the last adopted CSocD resolution on policies and programmes involving youth. Before a zero draft exists, these support general priorities; clause-specific recommendations require the live draft. A 2027 report and resolution are expected from the established odd-year cycle but are not yet published or tabled.', href: 'https://social.desa.un.org/issues/youth/ecosoc' },
      { when: 'Early January · if announced', action: 'Chair or Bureau briefing', detail: 'Use the briefing to ask when the youth draft, informal consultations and action are expected. CSocD63 held an official Chair briefing on 9 January 2025; this is a precedent, not an annual deadline.', href: 'https://social.desa.un.org/csocd/63rd-session' },
      { when: 'As soon as the draft circulates', action: 'Zero draft and national deadline', detail: 'Obtain the live text through your country’s Permanent Mission in New York, compare it clause by clause and submit exact wording before the national internal deadline. In the documented 2025 cycle, UNYD input was transmitted on 17 January; the original circulation date was not recovered.' },
      { when: 'During the session', action: 'Draft resolutions and Commission action', detail: 'Follow the L-document, revisions and final action on the official session page. Compare adopted language with submitted proposals, while separating documented participation from demonstrated influence.', href: 'https://social.desa.un.org/csocd/65th-session' },
    ],
    examples: [
      {
        kind: 'Policy / negotiation',
        title: 'Austria–Germany input to the CSocD63 youth resolution',
        detail: 'Austrian and German UN Youth Delegates reviewed the zero draft, sent proposed language through their respective national authorities and Permanent Missions, and later compared the result with the adopted text.',
        state: 'verified',
        href: 'https://social.desa.un.org/csocd/63rd-session',
      },
      {
        kind: 'Meeting',
        title: 'Youth Delegate exchange with the CSocD63 Chair',
        detail: 'Delegates helped shape the agenda, moderated the exchange and submitted a collective paper on more meaningful participation in the Commission.',
        state: 'verified',
      },
    ],
    contacts: [
      { label: 'UN DESA · Division for Inclusive Social Development', role: 'CSocD substantive secretariat and general Commission enquiries', email: 'social@un.org' },
    ],
    sources: [
      { label: 'CSocD65 official page', href: 'https://social.desa.un.org/csocd/65th-session' },
      { label: 'CSocD Secretariat contacts for the 64th session', href: 'https://igov.un.org/ecosoc/csocd/64/meetings' },
      { label: 'Official youth reports and resolutions archive', href: 'https://social.desa.un.org/issues/youth/ecosoc' },
      { label: 'CSocD63 adopted-draft record', href: 'https://social.desa.un.org/csocd/63rd-session' },
    ],
  },
  {
    id: 'csw',
    acronym: 'CSW',
    name: 'Commission on the Status of Women',
    location: 'New York',
    date2027: '8–19 March 2027',
    dateStatus: 'official provisional',
    calendarStart: '20270308',
    calendarEnd: '20270320',
    fileWatch: {
      published: 'Official provisional dates and the CSW71 priority and review themes are public.',
      expected: 'The CSW71 session page, Secretary-General reports, organization of work and zero draft of the Agreed Conclusions.',
      source: { label: 'CSW official hub', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women' },
      route: 'Ask the responsible national ministry or your country’s Permanent Mission in New York for the live draft and internal deadline.',
    },
    summary:
      'ECOSOC functional commission responsible for gender equality and the empowerment of women. Its annual session includes negotiated outcomes, official meetings and events.',
    participation: [
      'UN Youth Delegates may participate through their country’s official delegation, with roles defined by the national programme, responsible ministry and their country’s Permanent Mission in New York.',
      'Possible roles include national statements, delegation briefings, input to negotiated outcomes, institutional meetings and youth-led events.',
      'The most useful text work may take place before the formal March session, so the negotiation calendar matters as much as the travel dates.',
    ],
    structure: [
      { when: 'Jan–Feb', label: 'Drafting and coordination', detail: 'Request the draft and internal deadline, prepare exact wording, and follow national or regional coordination' },
      { when: '8 March', label: 'Opening', detail: 'Formal opening of the Commission' },
      { when: '8–19 March', label: 'Official programme', detail: 'Ministerial meetings, general discussion and events' },
      { when: '19 March', label: 'Action and closing', detail: 'Adoption or confirmation of session outcomes' },
    ],
    negotiations: {
      focus:
        'The annual priority theme normally produces negotiated Agreed Conclusions. The Commission can also adopt resolutions and decisions.',
      watch: [
        'CSW71’s priority theme is accelerating gender equality and the empowerment of all women and girls in the context of the 2030 Agenda. Its review theme covers implementation of the CSW66 Agreed Conclusions on climate change, environment and disaster-risk reduction.',
        'The official documents page: provisional agenda, Secretary-General reports, proposed organization of work and each draft outcome.',
        'Every draft version and national or regional coordination deadline. A public zero draft may appear only shortly before negotiations begin.',
        'Separate youth consultations and UN Women or UN Youth Office briefings. These routes appeared in both the CSW69 and CSW70 cycles and can produce advocacy priorities or explain participation, but their timing and format are not fixed and they do not replace the formal Member State drafting route.',
        'The annual CSW Youth Forum and the session’s youth-representative dialogue. These are recurring youth-engagement spaces, but registration, invitation and accreditation rules are published separately each year.',
      ],
      leadTime:
        'Identify the ministry and Permanent Mission contacts responsible for CSW by early January, before the first draft circulates. In the documented 2025 Austrian route, the draft arrived on 27 January and comments were due on 29 January.',
      route:
        'Ask who coordinates the national CSW position, when the current draft and revisions will circulate, what the internal deadline is, and whether exact wording should be sent before national or regional coordination meetings.',
    },
    timeline: [
      { when: 'Published for 2027', action: 'CSW71 priority and review themes', detail: 'The priority theme is the negotiated track; the review theme assesses implementation of the CSW66 Agreed Conclusions. The official programme of work is the authoritative source for both themes.', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2FRES%2F2025%2F3&t=pdf' },
      { when: 'When the session page opens', action: 'Official documents', detail: 'The documents page adds the provisional agenda, Secretary-General reports, organization of work and draft outcomes. Use it to identify the exact current documents rather than relying on a previous session’s list.', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women' },
      { when: 'January–early February · recent cycles', action: 'Agreed Conclusions zero draft', detail: 'Public zero drafts have appeared around late January or early February in recent cycles; the timetable is set anew each year. CSW68 published its zero draft on 5 February 2024.', href: 'https://www.unwomen.org/sites/default/files/2024-02/csw68_agreed_conclusions_zero_draft_5_february_2024.pdf' },
      { when: 'Immediately on receipt', action: 'National delegation’s internal deadline', detail: 'Ask for the live text and later revisions, then submit exact additions, deletions or amendments before the national deadline. In the documented Austrian CSW69 route, the draft circulated on 27 January 2025 and comments were due on 29 January.' },
      { when: 'February–March', action: 'Organization of work and revisions', detail: 'Use the official documents page to follow the negotiation schedule and published outcomes; ask the responsible national ministry or Permanent Mission for working revisions that are not public. CSW70 showed that substantive negotiations can be scheduled before the formal March session.', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women/csw69-2025/official-documents' },
      { when: 'Previous autumn–winter · check each cycle', action: 'Youth consultation and recommendations', detail: 'Two consecutive cycles provide a pattern without creating a fixed deadline: Beijing+30 recommendations were submitted through the Young Feminist Caucus in November 2024, while a global youth and adolescent-led consultation produced recommendations for CSW70 in December 2025. Treat the resulting priorities as advocacy input, not as the Member State draft.', href: 'https://eca.unwomen.org/en/digital-library/publications/2026/01/europe-and-central-asia-youth-recommendations-to-csw70' },
      { when: 'January–February · check each cycle', action: 'UN Women / UN Youth Office briefing', detail: 'A joint CSW69 youth briefing took place on 14 February 2025. On 20 January 2026, UN Women instead met national UN Youth Delegates before the CSW70 zero draft to present youth demands and suggested language. The repeated coordination is useful, but its audience, timing and function vary.' },
      { when: 'Around the session · annual, date TBC', action: 'CSW Youth Forum', detail: 'UN Women identifies the CSW Youth Forum as an annual event. It was held during CSW68 and immediately before CSW69 and CSW70; each session page sets the date and participation rules.', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women' },
      { when: 'During the session · programme-specific', action: 'Dialogue with youth representatives', detail: 'The formal programme included a youth dialogue at CSW68, a high-level Beijing@30 youth dialogue at CSW69 and an interactive youth dialogue at CSW70. The topic and access conditions change with the session programme.', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women/csw69-2025/official-documents' },
      { when: 'At adoption', action: 'Session outcomes', detail: 'Link the final Agreed Conclusions, declarations, resolutions or decisions and compare them with the last available draft and any wording submitted through the national authorities or Permanent Mission.', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women/csw69-2025/session-outcomes' },
    ],
    examples: [
      {
        kind: 'Statement',
        title: 'Austrian UN Youth Delegate statement in the official CSW69 youth dialogue',
        detail: 'Jana Berchtold delivered Austria’s three-minute statement in the high-level interactive dialogue with youth representatives, using a formal speaking opportunity within the Commission’s programme.',
        state: 'verified',
        href: 'https://www.unwomen.org/sites/default/files/2024-12/csw69_proposed_organisation_of_work_5_december_2024.pdf',
      },
      {
        kind: 'Side event',
        title: 'Moderating a high-level CSW69 side-event discussion',
        detail: 'Austrian UN Youth Delegate Jana Berchtold moderated the high-level discussion in “Children and the Promise of Gender Equality”, involving a minister, a parliamentarian and an expert from three countries.',
        state: 'verified',
      },
      {
        kind: 'Special format',
        title: 'Co-facilitating the UNECE roundtable at the CSW69 Global Youth Dialogue',
        detail: 'Jana Berchtold and Afra Göncüoğlu of Türkiye co-facilitated the regional roundtable during UN Women’s Global Youth Dialogue immediately before CSW69.',
        state: 'verified',
        href: 'https://www.unwomen.org/en/csw/previous-sessions',
      },
      {
        kind: 'Meeting',
        title: 'UN Women pre-zero-draft briefing for UN Youth Delegates',
        detail: 'In January 2026, UN Women presented priorities and suggested language compiled from a global youth consultation. Delegates could use them in advocacy, but access to the negotiated text still depended on their national authorities or Permanent Mission including them in the drafting process.',
        state: 'verified',
      },
      {
        kind: 'Policy / negotiation',
        title: 'Youth recommendations feeding CSW advocacy',
        detail: 'The Austrian UN Youth Delegates submitted Beijing+30 recommendations through the Young Feminist Caucus in November 2024. A separate global youth and adolescent-led consultation produced recommendations for CSW70 in December 2025. These are examples of a repeated advocacy route, not submissions to the Member State negotiation itself.',
        state: 'verified',
        href: 'https://eca.unwomen.org/en/digital-library/publications/2026/01/europe-and-central-asia-youth-recommendations-to-csw70',
      },
      {
        kind: 'Meeting',
        title: 'Annual CSW Youth Forum',
        detail: 'UN Women convened the CSW Youth Forum at CSW68, CSW69 and CSW70. It is a recurring space for youth priorities, strategy and accountability, although the date, registration and invitation rules change each year.',
        state: 'verified',
        href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women',
      },
    ],
    contacts: [
      { label: 'UN Women · CSW team', role: 'Session and registration enquiries', email: 'csw@unwomen.org' },
      { label: 'Katharina Reisenbauer', role: 'Austrian UN Youth Delegate · CSW participation and peer contact', email: 'katharina.reisenbauer@bjv.at' },
    ],
    sources: [
      { label: 'UN Women CSW hub', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women' },
      { label: 'CSW70 outcomes', href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women/csw70-2026/session-outcomes' },
      { label: 'ECOSOC 2026–2027 provisional calendar', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2025%2F47&t=pdf' },
    ],
  },
  {
    id: 'ecosoc-yf',
    acronym: 'Youth Forum',
    name: 'ECOSOC Youth Forum',
    location: 'New York',
    date2027: '13–15 April 2027',
    dateStatus: 'official provisional',
    calendarStart: '20270413',
    calendarEnd: '20270416',
    fileWatch: {
      published: 'Official provisional dates are public; the 2027 invitation and programme are not.',
      expected: 'The President of ECOSOC’s invitation letter, concept note, programme and side-event call.',
      source: { label: 'Official Forum archive', href: 'https://ecosoc.un.org/en/what-we-do/ecosoc-youth-forum/about-youth-forum/youth-taking-action-implement-2030-agenda-ecosoc' },
      route: 'Ask your country’s Permanent Mission in New York whether the invitation has arrived and whether UN Youth Delegates will be included.',
    },
    summary:
      'Annual ECOSOC forum on youth participation in the 2030 Agenda and the SDGs. Its programme centres on policy discussion, statements, meetings and follow-up.',
    participation: [
      'UN Youth Delegates may attend with their national delegation; the precise role and access depend on the national programme and their country’s Permanent Mission in New York.',
      'Common activities include national statements, thematic sessions, institutional meetings, peer coordination and youth-led side events.',
      'The Forum week concentrates meetings with UN entities, Missions and other Youth Delegates that are difficult to arrange remotely.',
    ],
    structure: [
      { when: 'Dec–Jan', label: 'Delegation invitation', detail: 'The ECOSOC President invites Permanent Representatives and may expressly encourage inclusion of UN Youth Delegates' },
      { when: 'Feb–Mar', label: 'Programme and calls', detail: 'Concept note, side-event call, speaker arrangements and delegation planning' },
      { when: '13 April', label: 'Opening', detail: 'Opening plenary and start of the official programme' },
      { when: '13–15 April', label: 'Forum programme', detail: 'Thematic sessions, statements, meetings and side events' },
      { when: '15 April', label: 'Closing and follow-up', detail: 'Closing session and links to HLPF or later processes' },
    ],
    negotiations: {
      focus:
        'The Forum does not normally negotiate a resolution. Its concrete process points are the annual concept note and programme, national statements, the official side-event call, selected institutional meetings and the President’s post-Forum outputs.',
      watch: [
        'The ECOSOC President’s invitation letter to Permanent Representatives. In 2026 it was issued on 9 January and explicitly invited countries to include UN Youth Delegates.',
        'The concept note and draft programme: they identify the SDGs under review, session formats, participation arrangements and expected outputs.',
        'The official side-event guidelines. The deadline was 5 March in 2025 and 18 March in 2026; eligibility and co-sponsor requirements are set in each call.',
        'The national-statement and speaker process coordinated through the country’s Permanent Mission in New York, which is separate from applying for a side event.',
        'Recurring but access-dependent moments such as the Ministerial Breakfast. Its 2025 and 2026 editions are documented, but attendance should not be assumed without an invitation or confirmed delegation role.',
        'The ECOSOC President’s statement or informal summary and any “Voices of Youth” input published after the Forum. These are outputs; the ECOSOC Youth Forum does not negotiate a Youth Forum resolution.',
      ],
      leadTime:
        'Check for the official invitation letter in December or January and ask whether the country will include UN Youth Delegates. Monitor the Forum page from February. A side-event partnership may need to exist before the March call closes; in 2025 the documented proposal was submitted on 5 March, approved on 17 March and shared with the Austrian authorities and Permanent Mission in New York alongside the speaking request on 21 March.',
      route:
        'Use your country’s Permanent Mission in New York for the official delegation and national-statement route. Use the DESA call for side events; under the 2026 rules, an organization without the required status needed an eligible Member State, UN entity or ECOSOC-accredited co-sponsor to submit.',
    },
    timeline: [
      { when: 'December–January · when published', action: 'ECOSOC President’s invitation letter', detail: 'Ask your country’s Permanent Mission in New York whether the official invitation has arrived, whether the country will send a delegation and whether UN Youth Delegates will be included. The 2026 letter explicitly invited their inclusion; the 2027 wording must be checked.', href: 'https://ecosoc.un.org/sites/default/files/2026-01/PECOSOC%20letter%209%20Jan%202026.pdf' },
      { when: 'When published · usually February–March', action: 'Concept note and draft programme', detail: 'These identify the SDGs under review, session formats, participation arrangements and expected outputs. The official archive keeps each year’s concept note, programme, statements and summary together.', href: 'https://ecosoc.un.org/en/what-we-do/ecosoc-youth-forum/about-youth-forum/youth-taking-action-implement-2030-agenda-ecosoc' },
      { when: 'When the annual call opens', action: 'Official side-event guidelines', detail: 'Check the exact deadline, eligible lead organizer and co-sponsor rule before preparing a proposal. Deadlines changed from 5 March in 2025 to 18 March in 2026, so neither date should be projected as a fixed rule.', href: 'https://ecosoc.un.org/sites/default/files/2026-02/ECOSOC-2026-YF%20Guidelines-for-Side-Events%20%28revised%29.pdf' },
      { when: 'After submission', action: 'DESA review and approval', detail: 'Do not treat a submitted side event as accepted. In the documented 2025 case, DESA acknowledged the proposal on 12 March and approved it on 17 March.' },
      { when: 'About 3–4 weeks before · recent precedent', action: 'National statement or speaking request', detail: 'Send the specific request and supporting concept note through your national authorities and country’s Permanent Mission in New York. The documented Austrian request was sent on 21 March 2025; no universal deadline is claimed.' },
      { when: 'Forum week', action: 'Official programme, statements and selected meetings', detail: 'Follow confirmed thematic sessions, national statements and approved side events. The Ministerial Breakfast has recurred, but access depends on the cycle’s invitation and delegation arrangements.', href: 'https://ecosoc.un.org/en/events/2025/youth-forum' },
      { when: 'After publication', action: 'President’s statement and informal summary', detail: 'Use the official outputs to see which recommendations and themes were carried forward. They inform later ECOSOC and HLPF work but are not a negotiated Forum resolution.', href: 'https://ecosoc.un.org/en/what-we-do/ecosoc-youth-forum/about-youth-forum/youth-taking-action-implement-2030-agenda-ecosoc' },
    ],
    examples: [
      {
        kind: 'Special format',
        title: 'Ministerial Breakfast with UN Youth Delegates',
        detail: 'A distinctive setting for direct exchange among ministers, officials, Youth Delegates and youth organizations. The format is officially documented in both 2025 and 2026; participation depends on the year’s invitation and delegation arrangements.',
        state: 'verified',
        href: 'https://www.un.org/youthaffairs/en/news/opening-new-doors-meaningful-youth-participation-ministerial-breakfast-2026-ecosoc-youth-forum',
      },
      {
        kind: 'Special format',
        title: 'MGCY ECOSOC Youth Forum Youth Blast',
        detail: 'A youth-led preparatory day organized by the Major Group for Children and Youth before the official Forum, covering capacity-building, strategy, networking, interventions and other participation opportunities. It is not a UNYD-organized event, although UN Youth Delegates can participate.',
        state: 'verified',
        href: 'https://www.unmgcy.org/eyf',
      },
      {
        kind: 'Initiative',
        title: 'Launch of the UNYD Coordination Collective',
        detail: 'The 2025 Forum provided the in-person setting for launching a peer coordination structure that connected current UN Youth Delegates across countries and later developed into the UNYDs Working Group.',
        state: 'verified',
      },
      {
        kind: 'Side event',
        title: 'Youth Expertise in Action: Mental Health and Decent Work',
        detail: 'A cross-country, youth-partner side event co-developed and co-moderated by UN Youth Delegates during the 2025 Forum.',
        state: 'verified',
        href: 'https://bjv.at/alles-vom-ecosoc-jugendforum-2025/',
      },
    ],
    contacts: [
      { label: 'UN DESA · IISB', role: 'Forum preparation and official side-event proposals', email: 'desa-iisb@un.org' },
      { label: 'Markus Wainde Wane', role: 'Former Austrian UN Youth Delegate · Forum participation, side-event process and cross-country UNYD coordination', email: 'waindewane@gmail.com' },
    ],
    sources: [
      { label: '2026 invitation letter to delegations', href: 'https://ecosoc.un.org/sites/default/files/2026-01/PECOSOC%20letter%209%20Jan%202026.pdf' },
      { label: 'ECOSOC Youth Forum 2026', href: 'https://ecosoc.un.org/en/events/2026/youth-forum' },
      { label: 'Official Youth Forum side-event guidance', href: 'https://ecosoc.un.org/sites/default/files/2025-02/2025%20Youth%20Forum%20Side%20Events%20Guidelines.pdf' },
      { label: 'Official Forum archive', href: 'https://ecosoc.un.org/en/what-we-do/ecosoc-youth-forum/about-youth-forum/youth-taking-action-implement-2030-agenda-ecosoc' },
      { label: '2026 Ministerial Breakfast', href: 'https://www.un.org/youthaffairs/en/news/opening-new-doors-meaningful-youth-participation-ministerial-breakfast-2026-ecosoc-youth-forum' },
      { label: 'MGCY ECOSOC Youth Forum and Youth Blast', href: 'https://www.unmgcy.org/eyf' },
    ],
  },
  {
    id: 'hlpf',
    acronym: 'HLPF',
    name: 'High-Level Political Forum on Sustainable Development',
    location: 'New York',
    date2027: '6–15 July 2027 · ministerial segment 13–15 July',
    dateStatus: 'official provisional',
    calendarStart: '20270706',
    calendarEnd: '20270716',
    fileWatch: {
      published: 'The 2027 theme, SDGs under review and official provisional July dates are public.',
      expected: 'The VNR country list, regional-forum dates, VNR guidance and the SDG Summit political-declaration timetable.',
      source: { label: 'HLPF 2027 cycle', href: 'https://hlpf.un.org/' },
      route: 'Use the national VNR ministry for a country review and your country’s Permanent Mission in New York for the SDG Summit declaration.',
    },
    summary:
      'Annual ECOSOC forum reviewing implementation of the 2030 Agenda through thematic reviews, Voluntary National Reviews and a ministerial segment. In 2027, it is followed by the four-yearly SDG Summit under the General Assembly.',
    participation: [
      'UN Youth Delegate participation normally depends on the national delegation, especially where the country presents a Voluntary National Review.',
      'Possible roles include VNR preparation, delegation briefings, thematic sessions, statements, bilateral meetings and side events.',
      'Some countries appoint separate sustainable-development youth delegates; those roles should not be attributed to a general UN Youth Delegate without verification.',
    ],
    structure: [
      { when: 'Before July', label: 'National preparation', detail: 'VNR work, SDG review and delegation coordination' },
      { when: '6 July', label: 'Opening', detail: 'Opening and start of thematic review' },
      { when: '6–15 July', label: 'Thematic reviews and VNRs', detail: 'SDG sessions, national reviews and side events' },
      { when: '13–15 July', label: 'Ministerial segment', detail: 'Ministerial meetings; 2027 feeds into the single SDG Summit political declaration rather than a separate July ministerial declaration' },
      { when: 'September · date TBC', label: 'SDG Summit', detail: 'Heads-of-State HLPF under the General Assembly and action on the negotiated political declaration' },
    ],
    negotiations: {
      focus:
        'The July ECOSOC HLPF includes thematic reviews and Voluntary National Reviews. Because 2027 is also an SDG Summit year, the cycle is expected to have one negotiated political declaration covering the July and September HLPF meetings, rather than a separate July ministerial declaration, following the rule and 2023 precedent.',
      watch: [
        'The 2027 theme is scaling up just transitions to achieve sustainable development, eradicate poverty and fully implement the 2030 Agenda and its SDGs. Goals 4, 10, 12, 15 and 17 are under in-depth review.',
        'The official VNR country list and each reviewing country’s national consultation timetable. VNRs are state-led and country-specific; the New York presentation is the final stage of a longer domestic process.',
        'The five Regional Forums on Sustainable Development and their region-specific youth sessions, which provide official preparatory routes before the July HLPF.',
        'The official VNR workshops and knowledge exchanges for reviewing countries, which publish current guidance and reveal the cycle’s deadlines and expectations for stakeholder participation.',
        'The VNR main-messages and final-report deadlines. In the 2025 cycle these were 24 April and 17 June; each year’s handbook and workshops set new dates.',
        'The SDGs under review in 2027: Goals 4, 10, 12, 15 and 17, plus the connection to the September 2027 SDG Summit.',
        'The 2027 SDG Summit political-declaration timetable: General Assembly co-facilitators, elements paper, zero draft, consultations, revisions and final text. The 2027 timetable is not yet published.',
        'The official side-event call and the VNR Lab programme. In 2025, side-event applications closed on 9 May and approvals were expected by 6 June.',
      ],
      leadTime:
        'If the country is presenting a VNR, enter the national process as soon as it opens—often in the preceding autumn. For the 2027 SDG Summit political declaration, contact your country’s Permanent Mission in New York when the General Assembly appoints co-facilitators and publishes the consultation timetable.',
      route:
        'Use the national VNR ministry for the country review and your country’s Permanent Mission in New York for the SDG Summit political declaration and official delegation. These are distinct channels with separate schedules.',
    },
    timeline: [
      { when: 'Previous autumn', action: 'Official VNR country list', detail: 'The invitation for the 2026 cycle requested expressions of interest by 30 September 2025. Once the list is published, check whether the country is reviewing and identify the national coordinating ministry; the date is set anew each cycle.', href: 'https://hlpf.un.org/vnrs' },
      { when: 'Before July · dates set by each region', action: 'Regional Forums on Sustainable Development', detail: 'Check the relevant UN regional commission’s programme for an official regional preparatory forum and any youth or children-and-youth session. Participation conditions and dates differ across the five regions.', href: 'https://hlpf.un.org/2026/preparation' },
      { when: 'Across the VNR cycle', action: 'VNR workshops and knowledge exchanges', detail: 'For reviewing countries, these official sessions explain the current handbook, report milestones and expectations for stakeholder involvement before the VNR is finalized.', href: 'https://hlpf.un.org/vnrs' },
      { when: 'National cycle · often autumn–June', action: 'VNR consultation, main messages and final report', detail: 'The process is state-led and country-specific. In 2025, main messages were due on 24 April and final VNR reports on 17 June; use the current handbook or workshop material before relying on those precedent dates.', href: 'https://hlpf.un.org/vnrs' },
      { when: 'When appointed · 2027 dates pending', action: 'SDG Summit political-declaration co-facilitators', detail: 'The President of the General Assembly appoints the co-facilitators and they publish the consultation timetable. In the 2023 precedent, the elements paper appeared on 28 February; that date is not a standing 2027 deadline.', href: 'https://www.un.org/en/conferences/SDGSummit2023/political-declaration' },
      { when: 'Spring–summer · 2023 precedent', action: 'Political-declaration zero draft and consultations', detail: 'For the 2023 SDG Summit, the zero draft appeared on 8 May, a revised zero draft on 8 June and the final draft on 19 July before September adoption. Use the eventual 2027 co-facilitator timetable rather than projecting those dates as official.', href: 'https://www.un.org/en/conferences/SDGSummit2023/political-declaration' },
      { when: 'Spring · if applying', action: 'Official HLPF side-event call', detail: 'The 2025 application deadline was 9 May and approval notification was expected by 6 June. These are dated precedents, not standing deadlines.', href: 'https://hlpf.un.org/sites/default/files/2025-07/HLPF%202025%20Guidelines%20Side%20Events.pdf' },
      { when: 'July', action: 'VNR presentations, VNR Labs and official events', detail: 'Use the programme to distinguish formal VNR presentations from VNR Labs, which are informal spaces for candid exchange, and from separately approved side events.', href: 'https://hlpf.un.org/2025/events' },
      { when: 'September 2027 · exact dates pending', action: 'SDG Summit and political declaration', detail: 'The HLPF meets under the General Assembly at Heads-of-State level. The official 2027 page and General Assembly programme will confirm the Summit dates and action on the negotiated political declaration.', href: 'https://hlpf.un.org/' },
    ],
    examples: [],
    contacts: [
      { label: 'UN DESA · HLPF Secretariat', role: 'General HLPF enquiries', email: 'hlpf@un.org' },
    ],
    sources: [
      { label: 'HLPF official overview and 2027 cycle', href: 'https://hlpf.un.org/' },
      { label: 'HLPF preparation and regional forums', href: 'https://hlpf.un.org/2026/preparation' },
      { label: 'VNR hub and workshops', href: 'https://hlpf.un.org/vnrs' },
      { label: 'HLPF Secretariat', href: 'https://hlpf.un.org/secretariat' },
      { label: 'HLPF Handbook', href: 'https://hlpf.un.org/sites/default/files/2025-07/HLPF%20Handbook_14%20July%5B24%5D.pdf' },
      { label: 'ECOSOC 2026–2027 provisional calendar', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2025%2F47&t=pdf' },
    ],
  },
  {
    id: 'unga',
    acronym: 'UNGA',
    name: 'United Nations General Assembly',
    location: 'New York',
    date2027: 'Session opens 7 September · general debate opens 21 September',
    dateStatus: 'official',
    calendarStart: '20270907',
    calendarEnd: '20270908',
    fileWatch: {
      published: 'The UNGA82 opening date is official; the session-specific Third Committee programme is not yet public.',
      expected: 'The Third Committee calendar, annual and biennial resolution list, Youth Resolution facilitator and live drafts.',
      source: { label: 'Third Committee', href: 'https://www.un.org/en/ga/third/' },
      route: 'Ask your country’s Permanent Mission in New York which files it will follow and who coordinates each national position.',
    },
    summary:
      'Annual General Assembly cycle covering High-Level Week, the Main Committees and plenary action. Most recurring UNYD policy work is concentrated in the Third Committee.',
    participation: [
      'UN Youth Delegates participate through their official national delegation. Possible roles include a national statement, an interactive-dialogue intervention, text work, bilateral meetings, side events or a joint initiative; these are separate participation formats rather than one uniform “UNGA role”.',
      'High-Level Week and the Third Committee are operationally different. High-Level Week concentrates senior-level meetings and events, while the Third Committee provides the recurring social, humanitarian and human-rights agenda, speaking slots and resolution files.',
      'Public schedules and documents are available online, but delegation accreditation, e-deleGATE access, draft-text circulation and national or regional coordination normally depend on the country’s Permanent Mission in New York.',
    ],
    structure: [
      { when: '7 September', label: 'Session opens', detail: 'Formal opening of the eighty-second session' },
      { when: 'From 21 September', label: 'High-Level Week', detail: 'General debate and high-level meetings' },
      { when: 'Early October · TBC', label: 'Third Committee opens', detail: 'Social, humanitarian and human-rights agenda begins' },
      { when: 'October–November', label: 'Third Committee negotiations', detail: 'Statements, informal consultations and action on draft resolutions' },
      { when: 'November–December', label: 'Plenary follow-up', detail: 'Committee recommendations proceed to General Assembly action' },
    ],
    negotiations: {
      focus:
        'The Third Committee handles social, humanitarian and human-rights questions. Its recurring resolutions include a biennial “Policies and programmes involving youth” resolution, expected again in 2027 if the established cycle continues.',
      watch: [
        'The live working tools: the UN Journal for daily and forthcoming meetings; the current iGov proposals view for drafts and action; the Third Committee documentation page for voting records, committee reports and submission guidance; and the UN Editorial Manual for UN drafting conventions.',
        'The official Third Committee calendar, meeting pages, presenter list and proposals page. Together they show which agenda item is being discussed, who presents a report, when statements or interactive dialogues occur and when the Committee takes action.',
        'A session list of annual and biennial recurring resolutions, including the previous symbol, recurrence, last main sponsor or facilitator and any requested Secretary-General report. The prior resolution and report are the starting documents; neither replaces the live draft.',
        'The role attached to each file. A main sponsor or penholder authors and advances a draft; a co-facilitator manages consultations on behalf of the process. The relevant contact therefore varies by resolution and session.',
        'In odd years, the facilitator for the UNGA Third Committee resolution on policies and programmes involving youth and the pre-draft window. The 2025 cycle included a facilitator meeting before the zero draft, followed by only five days for formal Member State comments after the draft circulated.',
        'Your country’s Permanent Mission in New York may set an internal deadline before the Member State deadline. Track that deadline alongside the live zero draft, readings, revisions, silence procedure and action. Proposed wording should identify the exact paragraph, source and rationale; earlier agreed language supports a proposal but does not make acceptance automatic.',
      ],
      leadTime:
        'Build the recurring-resolution list in May–July and check public schedules before travel. In an odd-year UNGA Youth Resolution cycle, identify the facilitator by July or August and request a pre-draft exchange at least one week ahead. Once the October draft arrives, national deadlines can move in days rather than weeks.',
      route:
        'Ask your country’s Permanent Mission in New York which Third Committee files it expects to follow, which person or team is responsible for each file, what e-deleGATE or document access is available and where statement or text requests must go. A facilitator exchange can clarify process and priorities, but formal comments and delegation roles still move through Member States.',
    },
    timeline: [
      { when: 'May–July', action: 'Create the recurring-resolution list', detail: 'List expected annual and biennial files and add the previous symbol, recurrence, last main sponsor or facilitator and requested Secretary-General report.' },
      { when: 'Before travel', action: 'Confirm delegation access and live document routes', detail: 'Ask your country’s Permanent Mission in New York which Third Committee person or team and files you will work with, whether e-deleGATE access is needed and how draft texts, speaking requests and internal deadlines will be shared.', href: 'https://www.eda.admin.ch/dam/eda/en/documents/publications/InternationaleOrganisationen/Uno/UN-ga-handbook_en.pdf' },
      { when: 'July–August · odd years', action: 'Identify the UNGA Youth Resolution facilitator', detail: 'Confirm which Member State and Permanent Mission will facilitate the Third Committee resolution on policies and programmes involving youth, request a pre-draft exchange at least one week ahead and prepare questions on process and timing.' },
      { when: 'August–September · odd years', action: 'Prepare pre-zero-draft language', detail: 'Use the previous resolution to organize general priorities and possible wording before the new draft exists.' },
      { when: 'September', action: 'High-Level Week', detail: 'Treat the general debate and high-level meetings as a distinct phase for senior-level meetings, bilateral exchanges and public events. The official programme determines which meetings are actually relevant.', href: 'https://www.un.org/en/ga/about/ropga/sessions.shtml' },
      { when: 'Late September–early October', action: 'Open the live working tools', detail: 'Use the UN Journal for the daily schedule; the Third Committee calendar and meeting pages for agenda items and speakers; the proposals view for live drafts and action; and the documentation page for voting records, committee reports and submission guidance.', href: 'https://journal.un.org/' },
      { when: 'Early October · odd years', action: 'Obtain the draft and internal deadline', detail: 'Ask your country’s Permanent Mission in New York for the zero draft, revisions and its internal comment deadline; prepare clause-specific wording against the live text.' },
      { when: 'October–November', action: 'Follow speeches, dialogues, readings and action', detail: 'Track the specific speaking slot or agenda item, and separately follow first and later readings, revised drafts, silence procedure and Third Committee action.', href: 'https://igov.un.org/ga/c3/80/meetings' },
      { when: 'December and handover', action: 'Close the record', detail: 'Link adopted outcomes, record statements and public events, note which proposals entered the national position and distinguish participation from demonstrated text impact. Preserve the resolution list and access lessons for the next delegation.' },
    ],
    examples: [
      {
        kind: 'Policy / negotiation',
        title: 'UNGA80 Youth Resolution negotiation sequence',
        detail: 'A documented sequence from pre-draft coordination through zero draft, national-delegation comments, readings, silence procedure and adoption.',
        state: 'verified',
        href: 'https://documents.un.org/api/symbol/access?l=en&s=A%2FRES%2F80%2F180&t=pdf',
      },
      {
        kind: 'Statement',
        title: 'UN Youth Delegate statements in the Third Committee general discussion',
        detail: 'A video compilation showing several UN Youth Delegates delivering statements during the Third Committee’s general discussion.',
        state: 'verified',
        href: 'https://www.instagram.com/reel/DBgSKojtEW6/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==',
      },
      {
        kind: 'Initiative',
        title: 'Joint youth peace statement transmitted as S/2024/799',
        detail: 'A cross-country youth-delegate output that moved through a Member State and became a Security Council document.',
        state: 'verified',
        href: 'https://docs.un.org/S/2024/799',
      },
    ],
    contacts: [
      { label: 'Ziad Mahmassani', role: 'Secretary of the Third Committee · re-check at the start of each session', email: 'mahmassani@un.org' },
      { label: 'Markus Wainde Wane', role: 'Former Austrian UN Youth Delegate · Third Committee, UNGA Youth Resolution and cross-country UNYD coordination', email: 'waindewane@gmail.com' },
    ],
    sources: [
      { label: 'Official UNGA rules and future session dates', href: 'https://www.un.org/en/ga/about/ropga/sessions.shtml' },
      { label: 'A/INF/81/1 future opening dates', href: 'https://digitallibrary.un.org/record/4102577' },
      { label: 'The GA Handbook', href: 'https://www.eda.admin.ch/dam/eda/en/documents/publications/InternationaleOrganisationen/Uno/UN-ga-handbook_en.pdf' },
      { label: 'UNGA Third Committee', href: 'https://www.un.org/en/ga/third/' },
      { label: 'UN Journal · daily and forthcoming meetings', href: 'https://journal.un.org/' },
      { label: 'UNGA80 Third Committee meetings', href: 'https://igov.un.org/ga/c3/80/meetings' },
      { label: 'UNGA80 Third Committee calendar', href: 'https://igov.un.org/ga/c3/80/calendar' },
      { label: 'UNGA80 Third Committee proposals and action', href: 'https://igov.un.org/ga/c3/80/proposals' },
      { label: 'Third Committee documentation · voting records, reports and drafting guidance', href: 'https://www.un.org/en/ga/third/80/documentation.shtml' },
      { label: 'UN Editorial Manual · drafting conventions', href: 'https://www.un.org/dgacm/en/content/editorial-manual' },
      { label: 'UN Web TV', href: 'https://webtv.un.org/' },
      { label: 'Previous Youth Resolution · A/RES/78/179', href: 'https://documents.un.org/api/symbol/access?l=en&s=A%2FRES%2F78%2F179&t=pdf' },
      { label: 'Secretary-General youth report · A/80/375', href: 'https://documents.un.org/api/symbol/access?l=en&s=A%2F80%2F375&t=pdf' },
      { label: 'Adopted UNGA80 Youth Resolution · A/RES/80/180', href: 'https://documents.un.org/api/symbol/access?l=en&s=A%2FRES%2F80%2F180&t=pdf' },
      { label: 'UN DESA · UN Youth Delegate Programme', href: 'https://social.desa.un.org/issues/youth/un-youth-delegate-programme' },
      { label: 'UN Youth Office', href: 'https://www.un.org/youthaffairs/en/about-us' },
      { label: 'Third Committee Secretariat directory', href: 'https://www.un.org/en/ga/third/secretariat.shtml' },
    ],
  },
  {
    id: 'hrc',
    acronym: 'HRC',
    name: 'Human Rights Council',
    location: 'Geneva',
    date2027: '24 February–2 April · 14 June–9 July · 6 September–8 October 2027',
    dateStatus: 'official',
    fileWatch: {
      published: 'All three regular-session dates and the Council’s three-year programme are public.',
      expected: 'Session programmes, mandated reports, draft-resolution consultations and issue-specific calls for input.',
      source: { label: 'HRC session pages', href: 'https://hrcportal.ohchr.org/hrc-sessions' },
      route: 'Use your country’s Permanent Mission in Geneva for delegation and resolution work; follow each separate OHCHR call for its own eligibility rules.',
    },
    summary:
      'The Council holds three regular sessions each year. Each includes mandated reports, panels, interactive dialogues and action on draft resolutions.',
    participation: [
      'UN Youth Delegates participate through their country’s official delegation, with responsibilities agreed with their country’s Permanent Mission in Geneva.',
      'Possible roles include statements, panel interventions, report follow-up, meetings with OHCHR or mandate holders, events and resolution work.',
      'Because the Council meets three times each year, delegates usually select specific sessions and agenda items rather than attempting to cover the full annual programme.',
    ],
    structure: [
      { when: 'Before each session', label: 'Reports and preparation', detail: 'Programme of work, mandated reports and national-delegation coordination' },
      { when: '24 Feb–2 Apr', label: '64th regular session', detail: 'Includes the annual full-day meeting on the rights of the child, on children’s mental health and well-being' },
      { when: '14 Jun–9 Jul', label: '65th regular session', detail: 'Second regular session of the year' },
      { when: '6 Sep–8 Oct', label: '66th regular session', detail: 'Includes the biennial panel on youth and human rights' },
      { when: 'Final week of each session', label: 'Action on resolutions', detail: 'Council decisions and session closure' },
    ],
    negotiations: {
      focus:
        'Each regular session has a programme of work, mandated reports, interactive dialogues, panels and draft resolutions. The three-year programme is the best early-warning tool.',
      watch: [
        'The three-year programme of work and the session’s list of reports.',
        'Mandated annual or biennial panels, calls for input, country and thematic resolutions, and relevant special-procedure mandates.',
        'Submission and speaking deadlines in the session’s practical information and A–Z guide.',
      ],
      leadTime:
        'Aim to contact your country’s Permanent Mission in Geneva around eight weeks before the relevant session. Name the exact report, panel, dialogue or resolution and then follow the session-specific speaker, submission and consultation deadlines.',
      route:
        'Begin with the human-rights team at your country’s Permanent Mission in Geneva. Use the agenda and reports to make a concrete request rather than asking generally how to participate in the Council.',
    },
    timeline: [
      { when: 'Rolling', action: 'Three-year programme', detail: 'Use the programme and its supplementary information to identify the session number, mandated reports, panels, interactive dialogues, annual thematic meetings and recurring files already scheduled for 2026–2028.', href: 'https://hrcportal.ohchr.org/three-year-programme-work' },
      { when: 'Rolling · deadline-specific', action: 'OHCHR calls for input', detail: 'Search for a call linked to a named Special Procedure or report, then check the questions, eligible contributors, confidentiality terms and deadline. This is a separate written-input route and does not require participation through a national delegation unless the call says otherwise.', href: 'https://www.ohchr.org/en/calls-for-input-listing' },
      { when: 'Around 8 weeks before', action: 'Contact your country’s Permanent Mission in Geneva', detail: 'Name the exact agenda item, report, panel or resolution. Ask about delegation accreditation, speaker registration, the country’s sponsor or co-sponsor role and the national delegation’s internal deadline for text input.' },
      { when: 'When the session page opens', action: 'Session programme and practical information', detail: 'Check the programme of work, mandated reports, speaker-list procedures, written or video submission rules and session-specific deadlines. These operational details are published per session, not by one fixed annual rule.', href: 'https://hrcportal.ohchr.org/practical-information' },
      { when: 'During the session', action: 'Interactive dialogues, panels and informal consultations', detail: 'Follow the selected agenda item and any consultations on a named draft resolution. The final week is normally when the Council takes action on draft texts.', href: 'https://hrcportal.ohchr.org/hrc-sessions' },
      { when: 'After adoption', action: 'Mandated follow-up', detail: 'Read the adopted text for requested reports, studies, panels, calls for input and the session at which the issue returns. Those mandates determine whether there is a concrete next opening.' },
    ],
    examples: [
      {
        kind: 'Statement',
        title: 'UNYD interventions in the biennial panel on youth and human rights',
        detail: 'A session-specific opening created by a mandated HRC panel; the resulting report can become a source for later policy work.',
        state: 'verified',
        href: 'https://hrcportal.ohchr.org/panel-discussions',
      },
      {
        kind: 'Statement',
        title: 'Italian UN Youth Delegate statement at HRC61',
        detail: 'Andrea Dongili delivered Italy’s statement during the 4 March 2026 panel discussion on human rights and a culture of peace, providing a public example of a UN Youth Delegate using a formal Council speaking slot.',
        state: 'verified',
        href: 'https://webtv.un.org/en/asset/k1n/k1nx60bmyv',
      },
      {
        kind: 'Meeting',
        title: 'OHCHR–DESA–UN Youth Office follow-up on UNYD participation',
        detail: 'A 2026 exchange brought together institutional focal points and current/former youth delegates to discuss practical HRC entry points and recurring barriers.',
        state: 'verified',
      },
    ],
    contacts: [
      { label: 'Helen Griffiths', role: 'OHCHR Child and Youth Rights Unit · youth-rights and HRC participation enquiries', email: 'helen.griffiths@un.org' },
      { label: 'Razan Askar', role: 'HRC Secretariat · correspondence and extranet', email: 'razan.askar@un.org' },
      { label: 'Matias Pellado', role: 'HRC Secretariat · resolutions processing', email: 'matias.pellado@un.org' },
      { label: 'Markus Wainde Wane', role: 'Former Austrian UN Youth Delegate · peer contact on UNYD participation and youth-rights coordination', email: 'waindewane@gmail.com' },
    ],
    sources: [
      { label: 'HRC session calendar', href: 'https://hrcportal.ohchr.org/hrc-sessions' },
      { label: 'Three-year programme of work', href: 'https://hrcportal.ohchr.org/three-year-programme-work' },
      { label: 'OHCHR calls for input', href: 'https://www.ohchr.org/en/calls-for-input-listing' },
      { label: 'Youth and human rights resolution adopted in 2024', href: 'https://searchlibrary.ohchr.org/record/31693' },
      { label: 'HRC60 biennial panel on youth and human rights', href: 'https://hrcportal.ohchr.org/60th-regular-session-human-rights-council-0' },
      { label: 'HRC61 panel on human rights and a culture of peace', href: 'https://webtv.un.org/en/asset/k1n/k1nx60bmyv' },
      { label: 'Rights of the child resolution adopted in 2026', href: 'https://searchlibrary.ohchr.org/record/35366' },
      { label: 'Committee on the Rights of the Child session database', href: 'https://tbinternet.ohchr.org/_layouts/15/TreatyBodyExternal/SessionsList.aspx?Treaty=CRC' },
      { label: 'OHCHR youth reports and studies', href: 'https://www.ohchr.org/en/youth/reports' },
      { label: 'Practical information and deadlines', href: 'https://hrcportal.ohchr.org/practical-information' },
      { label: 'HRC Secretariat directory', href: 'https://hrcportal.ohchr.org/contact-directory' },
    ],
  },
  {
    id: 'cnd',
    acronym: 'CND',
    name: 'Commission on Narcotic Drugs',
    location: 'Vienna',
    date2027: '15–19 March 2027',
    dateStatus: 'official provisional',
    calendarStart: '20270315',
    calendarEnd: '20270320',
    fileWatch: {
      published: 'Official provisional dates and the CND70 return of the resolution 68/6 expert-panel recommendations are known.',
      expected: 'The UNODC Youth Forum nomination invitation, Bureau-endorsed tabling deadline, draft-resolution list and panel consultation details.',
      source: { label: 'CND sessions', href: 'https://www.unodc.org/unodc/en/commissions/CND/session.html' },
      route: 'Ask your country’s Permanent Mission in Vienna about Youth Forum nominations and the resolution files it expects to sponsor or follow.',
    },
    summary:
      'The main UN policymaking body on international drug control. A small, changing package of draft resolutions is negotiated in the Committee of the Whole alongside plenary debate and treaty-based scheduling decisions.',
    participation: [
      'UN Youth Delegates participate through their country’s official delegation, with responsibilities agreed with the national authorities and their country’s Permanent Mission in Vienna.',
      'Resolution work depends on national-delegation access: only CND member States can table drafts, and the country’s Permanent Mission in Vienna decides whether a Youth Delegate can receive sponsor text, join coordination or submit wording.',
      'The annual UNODC Youth Forum is a separate route: Member States nominate young participants through their Permanent Missions, UNODC selects them and they attend in their personal capacity rather than as members of a national delegation.',
      'The independent panel created by resolution 68/6 must also consult youth groups. That stakeholder route is separate from participation as a member of a national delegation.',
    ],
    structure: [
      { when: 'Previous summer onward', label: 'UNODC Youth Forum nominations', detail: 'Member State nominations through Permanent Missions; timing and selection are separate from the CND delegation' },
      { when: '25 January', label: 'National delegation resolution-file check', detail: 'Planning point three weeks before the expected tabling deadline' },
      { when: 'Around 15 February', label: 'Draft-resolution deadline', detail: 'Four-week rule applied to the provisional CND70 opening; exact deadline to confirm' },
      { when: '15 March', label: 'Opening', detail: 'Formal opening of the seventieth session' },
      { when: '15–19 March', label: 'Committee of the Whole and plenary', detail: 'Negotiation, action on resolutions and discussion of the 68/6 panel recommendations' },
      { when: '19 March', label: 'Action and closing', detail: 'Final decisions and session closure' },
    ],
    negotiations: {
      focus:
        'CND does not return to a fixed roster of six or seven resolutions. It receives a small annual package of new or follow-up drafts. Policy lines recur, but titles, sponsors, operative requests and votes change from one session to the next.',
      watch: [
        'The CND68 package that Markus encountered in 2025 contained six resolutions: child- and adolescent-focused prevention; stimulant-use-disorder treatment; complementing the Guiding Principles on Alternative Development; safety when dismantling illicit synthetic-drug laboratories; environmental impacts of illicit drug activities; and strengthening the international drug-control system through an independent expert panel.',
        'The CND69 package changed in 2026. Four Commission resolutions covered equipment used in illicit manufacture, supply-chain integrity, early-warning systems for synthetic drugs and precursors, and integrated public-health responses. A fifth outcome recommended an Appendix to the Guiding Principles on Alternative Development for General Assembly adoption.',
        'For CND70, resolution 68/6 is already a known file: the independent panel must consult stakeholders including youth groups, and CND70 is mandated to discuss its recommendations. The consultation timetable is not yet published.',
        'Drug-scheduling decisions are a separate annual treaty function based on WHO or INCB recommendations. Do not count them as thematic policy resolutions when mapping the negotiation package.',
      ],
      leadTime:
        'Use 25 January 2027 as an early-warning date: it is exactly three weeks before the projected 15 February tabling deadline. Ask your country’s Permanent Mission in Vienna which national, EU or other regional drafts it expects to sponsor or follow, who the lead negotiator is and whether early sponsor text can be shared. This is a planning date, not an official deadline.',
      route:
        'A CND member State tables the draft; the sponsor then leads consultations and the Committee of the Whole works through the text before plenary adoption. For an EU Member State, ask your country’s Permanent Mission in Vienna about both nationally sponsored drafts and EU coordination files.',
    },
    timeline: [
      { when: 'Previous summer onward · when invited', action: 'UNODC Youth Forum nomination', detail: 'The UNODC forum is seemingly organised and largely financed by Russia. UNYD participation is very rare. Ask your country’s Permanent Mission in Vienna whether the nomination invitation has arrived; selected participants attend in their personal capacity, and the resulting collective youth statement is delivered to CND rather than negotiated as a CND resolution.', href: 'https://www.unodc.org/res/prevention/youth-initiative/youth-forum-2025_html/Youth_Forum_2025_Report_Final.pdf' },
      { when: 'When a panel consultation is announced', action: 'Resolution 68/6 stakeholder consultation', detail: 'The panel must consult stakeholders through a virtual platform and expressly include youth groups. Check the official CND channels for the call, eligibility, questions and submission date; no 2027 timetable is published yet.', href: 'https://www.unodc.org/documents/commissions/CND/Drug_Resolutions/2020-2029/2025/Res_68_6.pdf' },
      { when: '25 January 2027 · planning date', action: 'Ask your country’s Permanent Mission in Vienna which resolution files it expects', detail: 'Name the projected deadline and ask about intended national, EU or other regional drafts, the lead sponsor, the person or team responsible for each file and the route for receiving early text. This planning point is not a UN deadline.' },
      { when: 'Around 15 February 2027 · to confirm', action: 'CND70 draft-resolution deadline', detail: 'Decision 55/1 sets the deadline in principle four weeks before the session. The date shown applies that rule to the provisional 15 March opening and must be replaced by the Bureau-endorsed deadline when published.', href: 'https://www.unodc.org/documents/commissions/CND_CCPCJ_joint/Delegates_Handbook/Delegates_Handbook_2019_update_sept_19.pdf' },
      { when: 'After the L-documents appear', action: 'Identify drafts, sponsors and earlier mandates', detail: 'Use the official draft list to replace predictions. For each file, record the lead sponsor, co-sponsors, cited prior resolutions, reporting mandate and the national delegation’s internal deadline for wording.', href: 'https://rddb.unodc.org/rddb/' },
      { when: '15–19 March 2027 · provisional', action: 'Committee of the Whole and plenary action', detail: 'Follow sponsor consultations and revised L-documents in the Committee of the Whole. The plenary adopts the final resolutions and is also mandated to discuss the resolution 68/6 expert-panel recommendations.' },
      { when: 'After CND70', action: 'Session report and adopted texts', detail: 'Use the official report to verify titles, sponsors, votes, explanations of vote and new reporting or consultation mandates before describing the outcome.' },
    ],
    examples: [
      {
        kind: 'Initiative',
        title: 'Austrian–Irish CND explainer Reel',
        detail: 'A public collaboration explaining why drug policy matters to young people and calling for support-focused, participatory approaches.',
        state: 'verified',
        href: 'https://www.instagram.com/unyouthirl/reel/DHESZGnPhGL/',
      },
    ],
    contacts: [
      { label: 'UNODC · Secretariat to the Governing Bodies', role: 'CND session, documentation and organizational enquiries', email: 'unodc-sgb@un.org' },
      { label: 'Kirsty Rancier', role: 'UNODC Youth Focal Point', email: 'kirsty.rancier@un.org' },
      { label: 'Markus Wainde Wane', role: 'Former Austrian UN Youth Delegate · CND participation and peer contact', email: 'waindewane@gmail.com' },
    ],
    sources: [
      { label: 'CND official site', href: 'https://www.unodc.org/unodc/en/commissions/CND/index.html' },
      { label: 'UNODC Youth Forum 2025 report', href: 'https://www.unodc.org/res/prevention/youth-initiative/youth-forum-2025_html/Youth_Forum_2025_Report_Final.pdf' },
      { label: 'ECOSOC 2026–2027 provisional calendar', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2025%2F47&t=pdf' },
      { label: 'CND67 official report (2024)', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2024%2F28&t=pdf' },
      { label: 'CND68 official report (2025)', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2025%2F28&t=pdf' },
      { label: 'CND69 official report (2026)', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2026%2F28&t=pdf' },
      { label: 'Resolution 68/6 · independent expert panel', href: 'https://www.unodc.org/documents/commissions/CND/Drug_Resolutions/2020-2029/2025/Res_68_6.pdf' },
      { label: 'UNODC resolutions and decisions database', href: 'https://rddb.unodc.org/rddb/' },
      { label: 'Delegates’ Handbook · tabling and Committee of the Whole', href: 'https://www.unodc.org/documents/commissions/CND_CCPCJ_joint/Delegates_Handbook/Delegates_Handbook_2019_update_sept_19.pdf' },
      { label: 'Official UNODC concept note identifying the Youth Focal Point', href: 'https://www.unodc.org/documents/NGO/COP_UNTOC/Youth_Side_Event_-_Concept_note.pdf' },
    ],
  },
];

export const processById = Object.fromEntries(processes.map((process) => [process.id, process]));

export const negotiationResources = [
  {
    label: 'Negotiation and language guide',
    description: 'Negotiation process, agreed-language research, resolution structure and text-markup conventions.',
    href: 'https://docs.google.com/document/d/1ieNXyo4w0Q6Q5sOg9TjoX4l19ny9eXKhLkD-XyATjQk/edit',
  },
  {
    label: 'UNGA explainer slides · negotiation section',
    description: 'Slides 16–28 show recurring resolutions, drafting roles, the Youth Resolution sequence, agreed language and markup notation.',
    href: 'https://docs.google.com/presentation/d/1uIk5GrBEQ-TFYGFgR9M8jybopsfCVEzznZ8vp4kY22E/edit',
  },
] as const;

export const ungaResolutionWatchlist = {
  label: 'UNGA81 recurring-resolutions watchlist',
  description: 'Public preparation forecast for the UNGA81 Third Committee: 44 likely resolution series, including 24 annual or functionally annual and 20 odd-session biennial series. It covers the autumn 2026 UNGA81 cycle and is a reference, not a UNGA82 forecast.',
  href: 'https://docs.google.com/spreadsheets/d/1ubG4_yAgNhwL75HiPP_eW8Rf8qkFo4NEe-jOeKd-veM/edit',
} as const;

export const generalContacts: Contact[] = [
  { label: 'United Nations Youth Office', role: 'General youth-affairs and meaningful-participation enquiries', email: 'youthaffairs@un.org' },
  { label: 'UN DESA · Programme on Youth', role: 'UN Youth Delegate Programme and UN youth-system routing', email: 'youth@un.org' },
  { label: 'UNYD Working Group', role: 'Peer-run coordination mailbox for current UN Youth Delegates', email: 'unyds.workinggroup@gmail.com' },
];
