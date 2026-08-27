export type PlanningStatus = 'official' | 'official provisional' | 'recent cycle' | 'tentative';
export type PlanningKind = 'prepare' | 'draft' | 'negotiate' | 'session' | 'follow-up';

export type PlanningMilestone = {
  label: string;
  detail: string;
  start: string;
  end: string;
  kind: PlanningKind;
  status: PlanningStatus;
  lane: 0 | 1 | 2;
};

export type OperationalNote = {
  overview: {
    mandate: string;
    outputs: string;
    workingStructure: string;
    access: string;
    youthRelevance: string;
    strategicEntryPoints?: {
      title: string;
      timing: string;
      detail: string;
      status?: string;
      href?: string;
      links?: { label: string; href: string }[];
    }[];
  };
  calendarNote: string;
  milestones: PlanningMilestone[];
};

export const operationalNotes: Record<string, OperationalNote> = {
  csocd: {
    overview: {
      mandate: 'ECOSOC commission responsible for social-development policy, including poverty, inclusion, ageing, disability and youth.',
      outputs: 'Draft resolutions and decisions, a priority-theme discussion and the Commission report.',
      workingStructure: 'General discussion, ministerial or high-level segments, panels, side events and negotiations on draft outcomes.',
      access: 'The national delegation and the person or team at the Permanent Mission responsible for the file determine access to statements, coordination and draft text.',
      youthRelevance: 'A recurring resolution on policies and programmes involving youth has followed a biennial cycle; a 2027 iteration is expected but not yet treated as formally tabled.',
      strategicEntryPoints: [
        {
          title: 'CSocD65 priority theme and Bureau',
          timing: 'Published for 2027',
          detail: 'The priority theme is intergenerational approaches to social development and implementation of the Copenhagen and Doha commitments towards 2030 and beyond. Stefano Guerra of Portugal is the current Chair; the official page lists the full Bureau. The Chair’s role should not be confused with sponsorship of a specific resolution.',
          status: 'Official 2027 information',
          href: 'https://social.desa.un.org/csocd/65th-session',
        },
        {
          title: 'Policies and programmes involving youth',
          timing: 'Odd years · established biennial cycle',
          detail: 'The resolution was adopted in 2015, 2017, 2019, 2021, 2023 and 2025. A 2027 iteration is expected from that pattern, but should not be described as tabled until CSocD65 publishes the draft.',
          status: '2027 expected; official draft pending',
          href: 'https://social.desa.un.org/issues/youth/ecosoc',
        },
        {
          title: 'Biennial Secretary-General youth report',
          timing: 'Odd years · same biennial cycle as the CSocD youth resolution',
          detail: 'This is a biennial report. The official UN DESA archive lists CSocD reports on policies and programmes involving youth in 2017, 2019, 2021, 2023 and 2025. Each report reviews implementation and provides recommendations for the resolution considered in that cycle. A 2027 report is expected from the established pattern but is not yet published.',
          status: '2027 expected; official report pending',
          href: 'https://social.desa.un.org/issues/youth/ecosoc',
        },
        {
          title: 'Annotated agenda and organization of work',
          timing: 'Normally available before the session',
          detail: 'These identify the priority theme, emerging issue, Secretary-General reports, panels, Bureau and day-by-day structure. They are the starting point for a specific request to the country’s Permanent Mission in New York.',
          status: 'Official session documents',
          href: 'https://social.desa.un.org/csocd/65th-session',
        },
        {
          title: 'Chair or Bureau pre-session briefing',
          timing: 'Early January in the 2025 precedent',
          detail: 'CSocD63 held an official Chair briefing on 9 January 2025. A briefing can clarify the draft and consultation timetable, but recurrence and access must be checked each year.',
          status: '2025 official precedent; not guaranteed annually',
          href: 'https://social.desa.un.org/csocd/63rd-session',
        },
      ],
    },
    calendarNote: 'The sequence separates general priority-setting before the zero draft from clause-specific recommendations after it arrives. January timing uses the documented 2025 CSocD youth-resolution cycle as an early-warning pattern, not a fixed CSocD rule.',
    milestones: [
      { label: 'CSocD youth-resolution zero-draft input', detail: 'Austrian UN Youth Delegates sent comments on the CSocD63 resolution on policies and programmes involving youth to the officials coordinating Austria’s position on 17 January 2025. The exact draft-circulation and internal-deadline dates were not recovered and are therefore not projected.', start: '2027-01-17', end: '2027-01-17', kind: 'draft', status: 'recent cycle', lane: 0 },
      { label: 'Vice-Chair process exchange', detail: 'On 24 January 2025, UN Youth Delegates met the Austrian CSocD63 Vice-Chair to discuss the state of negotiations and routes for youth input. This is a documented precedent, not a recurring formal deadline.', start: '2027-01-24', end: '2027-01-24', kind: 'prepare', status: 'recent cycle', lane: 1 },
      { label: 'Chair exchange', detail: 'On 10 February 2025, UN Youth Delegates held a hybrid exchange with the CSocD63 Chair on earlier and more structured participation in the Commission’s work.', start: '2027-02-10', end: '2027-02-10', kind: 'follow-up', status: 'recent cycle', lane: 1 },
      { label: 'CSocD65', detail: 'Official session dates.', start: '2027-02-01', end: '2027-02-10', kind: 'session', status: 'official', lane: 0 },
    ],
  },
  csw: {
    overview: {
      mandate: 'ECOSOC commission responsible for gender equality, women’s rights and the empowerment of women.',
      outputs: 'Agreed Conclusions on the annual priority theme, plus resolutions, decisions and the Commission report.',
      workingStructure: 'Ministerial round tables, general discussion, interactive dialogues, side events and intergovernmental negotiation of the outcome text.',
      access: 'The national delegation, responsible ministry and the country’s Permanent Mission in New York determine statement roles and access to national or regional text coordination.',
      youthRelevance: 'The priority-theme outcome is often the main policy entry point. The formal text route through the national authorities must be distinguished from separate UN Women and youth consultations that develop advocacy priorities.',
      strategicEntryPoints: [
        {
          title: 'Agreed Conclusions through national authorities and the country’s Permanent Mission',
          timing: 'January–March · session-specific timetable',
          detail: 'Ask the responsible ministry or Permanent Mission contact for the current draft, the national internal deadline and the route for exact wording. In the 2025 Austrian record, the draft arrived on 27 January and comments were due on 29 January.',
          status: '2025 route verified; annual timetable varies',
          href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women',
        },
        {
          title: 'Priority theme and review theme',
          timing: 'Every annual session',
          detail: 'For CSW71, the priority theme is accelerating gender equality and the empowerment of all women and girls in the context of the 2030 Agenda. The review theme is implementation of the CSW66 Agreed Conclusions on climate change, environment and disaster-risk reduction. The priority theme normally produces the negotiated Agreed Conclusions; the review theme does not create a second outcome text.',
          status: 'Official 2027 themes',
          href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2FRES%2F2025%2F3&t=pdf',
        },
        {
          title: 'Official documents and proposed organization of work',
          timing: 'Before and during each session',
          detail: 'The official documents page brings together the agenda, Secretary-General reports, organization of work and draft outcomes; it is the public reference for what the Commission will formally consider.',
          status: 'Session-specific official source',
          href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women/csw69-2025/official-documents',
        },
        {
          title: 'UN Women and youth-priorities route',
          timing: 'Previous autumn–January · check each cycle',
          detail: 'Youth-recommendation work appeared in the CSW69 and CSW70 cycles, while UN Women or UN Youth Office briefings also took place in both cycles. The repeated route can provide advocacy priorities or participation guidance, but the organizers, timing and function changed and it does not replace the formal route through the national authorities and the country’s Permanent Mission in New York.',
          status: 'Repeated 2025–2026 route; format and timing not fixed',
        },
        {
          title: 'CSW Youth Forum',
          timing: 'Annually around the session · date and access TBC',
          detail: 'UN Women describes the CSW Youth Forum as an annual event. Official session pages confirm it at CSW68, CSW69 and CSW70; each cycle publishes its own date, registration and invitation conditions.',
          status: 'Recurring annual event; 2027 details pending',
          href: 'https://www.unwomen.org/en/how-we-work/commission-on-the-status-of-women',
        },
      ],
    },
    calendarNote: 'Three routes are shown separately: the formal Agreed Conclusions route through the responsible ministry or the country’s Permanent Mission in New York; repeated recent-cycle youth-recommendation and UN Women coordination; and the annual CSW Youth Forum. Only the first route provides access to the intergovernmental draft.',
    milestones: [
      { label: 'Draft circulation and internal deadline', detail: 'In the documented 2025 Austrian cycle, the draft circulated on 27 January and comments were due on 29 January. The 2027 dates are not yet published.', start: '2027-01-27', end: '2027-01-29', kind: 'prepare', status: 'recent cycle', lane: 0 },
      { label: 'Youth recommendations', detail: 'Youth recommendations were developed for both CSW69 and CSW70, but through different consultation arrangements. This projects a check-for-call window rather than an official 2027 deadline.', start: '2027-01-04', end: '2027-01-17', kind: 'prepare', status: 'tentative', lane: 1 },
      { label: 'UN Women / Youth Office briefing', detail: 'Briefings occurred in both recent cycles: a general CSW69 youth briefing on 14 February 2025 and a CSW70 pre-zero-draft meeting with national UN Youth Delegates on 20 January 2026. No fixed 2027 date or format is established.', start: '2027-01-18', end: '2027-02-14', kind: 'prepare', status: 'tentative', lane: 1 },
      { label: 'Draft markup window', detail: 'The 2025 Austrian record shows clause-specific UNYD wording prepared immediately after draft circulation. The equivalent 2027 window depends on receiving the current text.', start: '2027-01-27', end: '2027-01-29', kind: 'draft', status: 'recent cycle', lane: 2 },
      { label: 'National submission window', detail: 'Austrian UNYD wording was transmitted on 28 January 2025 for consideration in the national position. The 2027 internal route and deadline remain unknown.', start: '2027-01-28', end: '2027-01-29', kind: 'negotiate', status: 'recent cycle', lane: 1 },
      { label: 'CSW Youth Forum · date TBC', detail: 'The CSW Youth Forum is recurring and was held at CSW68, CSW69 and CSW70. Its 2027 date and participation conditions have not yet been published.', start: '2027-03-07', end: '2027-03-14', kind: 'session', status: 'tentative', lane: 1 },
      { label: 'CSW71', detail: 'Official provisional session dates.', start: '2027-03-08', end: '2027-03-19', kind: 'session', status: 'official provisional', lane: 0 },
    ],
  },
  'ecosoc-yf': {
    overview: {
      mandate: 'ECOSOC’s annual forum for youth participation in follow-up and review of the 2030 Agenda and the SDGs.',
      outputs: 'Policy discussions, national and youth interventions, informal recommendations and side events.',
      workingStructure: 'Plenaries, thematic sessions, national statements, youth-led events, institutional meetings and peer coordination.',
      access: 'Delegation status determines official participation; event and speaker roles follow separate calls and coordination channels.',
      youthRelevance: 'The Forum is designed around youth participation and is especially useful for statements, institutional access, collaboration and initiatives.',
      strategicEntryPoints: [
        {
          title: 'ECOSOC President’s invitation letter',
          timing: 'Usually December–January',
          detail: 'The letter goes to Permanent Representatives and is the first concrete delegation checkpoint. The 2026 letter explicitly invited countries to include UN Youth Delegates; the 2027 letter will determine whether that invitation and any named participation contact recur.',
          status: 'Annual official invitation; 2027 letter pending',
          href: 'https://ecosoc.un.org/sites/default/files/2026-01/PECOSOC%20letter%209%20Jan%202026.pdf',
        },
        {
          title: 'Official side-event call',
          timing: 'Usually February–March · exact deadline changes',
          detail: 'The deadline was 5 March in 2025 and 18 March in 2026. The annual guidelines set eligibility, format and co-sponsor rules; a submitted proposal still requires DESA approval.',
          status: 'Annual call; 2027 not yet published',
          href: 'https://ecosoc.un.org/sites/default/files/2026-02/ECOSOC-2026-YF%20Guidelines-for-Side-Events%20%28revised%29.pdf',
        },
        {
          title: 'National statement and speaker route',
          timing: 'Before the Forum · coordinated through the national delegation',
          detail: 'An official delegation role does not automatically create a speaking slot. The specific national statement or intervention request is handled through the country’s Permanent Mission in New York and the year’s programme arrangements.',
          status: 'Delegation-specific',
          href: 'https://ecosoc.un.org/en/what-we-do/ecosoc-youth-forum/about-youth-forum/youth-taking-action-implement-2030-agenda-ecosoc',
        },
        {
          title: 'Ministerial Breakfast',
          timing: 'Forum week · documented in 2025 and 2026',
          detail: 'A recurring high-level exchange involving ministers, officials and youth representatives. It is strategically useful, but access depends on the cycle’s invitation and delegation arrangements.',
          status: 'Recurring recent example; access not automatic',
          href: 'https://www.un.org/youthaffairs/en/news/opening-new-doors-meaningful-youth-participation-ministerial-breakfast-2026-ecosoc-youth-forum',
        },
        {
          title: 'President’s statement and informal summary',
          timing: 'Published after the Forum',
          detail: 'These record the Forum’s themes and recommendations and may feed later ECOSOC or HLPF work. They are outputs of the Forum; the ECOSOC Youth Forum does not negotiate a Youth Forum resolution.',
          status: 'Recurring official output types',
          href: 'https://ecosoc.un.org/en/what-we-do/ecosoc-youth-forum/about-youth-forum/youth-taking-action-implement-2030-agenda-ecosoc',
        },
      ],
    },
    calendarNote: 'The Forum does not normally negotiate one zero draft. Only the documented 2025 side-event and statement sequence is projected here; general advice about choosing priorities or arranging meetings is not placed on the calendar.',
    milestones: [
      { label: 'Side-event concept development', detail: 'In the documented 2025 case, concrete partner planning and a model concept note were exchanged on 26 February.', start: '2027-02-22', end: '2027-03-05', kind: 'prepare', status: 'recent cycle', lane: 1 },
      { label: 'DESA side-event proposal deadline', detail: 'The 2025 side-event proposal was submitted on 5 March, matching that cycle’s official call deadline. The 2027 call has not yet been published.', start: '2027-03-01', end: '2027-03-05', kind: 'draft', status: 'recent cycle', lane: 2 },
      { label: 'DESA review and approval', detail: 'In the documented 2025 cycle, DESA acknowledged the proposal on 12 March and approved it on 17 March. A submitted proposal should not be treated as accepted before this confirmation.', start: '2027-03-06', end: '2027-03-17', kind: 'follow-up', status: 'recent cycle', lane: 1 },
      { label: 'National delegation briefing and statement request', detail: 'In 2025, the Austrian concept note and speaking request reached the Austrian authorities and Permanent Mission in New York by 21 March. This is a dated precedent, not a universal Forum deadline.', start: '2027-03-08', end: '2027-03-21', kind: 'prepare', status: 'recent cycle', lane: 0 },
      { label: 'Youth Forum', detail: 'Official provisional forum dates.', start: '2027-04-13', end: '2027-04-15', kind: 'session', status: 'official provisional', lane: 1 },
    ],
  },
  hlpf: {
    overview: {
      mandate: 'The central UN platform for reviewing implementation of the 2030 Agenda and the Sustainable Development Goals.',
      outputs: 'Voluntary National Reviews, thematic reviews and a negotiated outcome. In 2027, the negotiated outcome is expected to be the SDG Summit political declaration rather than a separate July ministerial declaration.',
      workingStructure: 'July SDG reviews, VNR presentations, ministerial segment and events, followed in September 2027 by the HLPF under the General Assembly at Heads-of-State level.',
      access: 'The national delegation and VNR process shape official roles; negotiation input normally moves through the country’s Permanent Mission in New York and the SDG Summit political-declaration co-facilitators.',
      youthRelevance: 'Youth delegates can connect national SDG implementation with the multilateral review, contribute to statements or the VNR, and organize meetings and events.',
      strategicEntryPoints: [
        {
          title: '2027 theme and SDGs under review',
          timing: 'Published for 2027',
          detail: 'The 2027 theme is scaling up just transitions to achieve sustainable development, eradicate poverty and fully implement the 2030 Agenda and its SDGs. Goals 4, 10, 12, 15 and 17 will receive in-depth review.',
          status: 'Official 2027 framework',
          href: 'https://hlpf.un.org/',
        },
        {
          title: 'Regional Forums on Sustainable Development',
          timing: 'Usually before the July HLPF · dates set regionally',
          detail: 'The five UN regional commissions convene official preparatory forums. Their programmes can provide a regional youth-entry point even when the country is not presenting a VNR, but participation and youth sessions differ by region.',
          status: 'Recurring official preparatory process; 2027 dates pending',
          href: 'https://hlpf.un.org/2026/preparation',
        },
        {
          title: 'VNR workshops and knowledge exchanges',
          timing: 'Across the VNR cycle · for reviewing countries',
          detail: 'Official workshops and exchanges explain the current VNR guidance, deadlines and expectations for stakeholder participation. They are useful before the national report and New York presentation are finalized.',
          status: 'Recurring official VNR support; 2027 schedule pending',
          href: 'https://hlpf.un.org/vnrs',
        },
        {
          title: 'Voluntary National Review country process',
          timing: 'Previous autumn–June · only for reviewing countries',
          detail: 'The official country list determines whether there is a VNR opening. The review is state-led and begins domestically; the New York presentation is the final stage, not the start of the process.',
          status: 'Country-specific annual list',
          href: 'https://hlpf.un.org/vnrs',
        },
        {
          title: 'VNR main messages and final report',
          timing: 'Spring–June · cycle-specific deadlines',
          detail: 'In 2025, main messages were due on 24 April and final reports on 17 June. The current handbook and VNR workshops must be checked because the deadlines are set anew.',
          status: '2025 official precedent',
          href: 'https://hlpf.un.org/vnrs',
        },
        {
          title: '2027 SDG Summit political declaration',
          timing: 'Spring–September · 2027 timetable pending',
          detail: 'In an SDG Summit year, the July and September HLPF meetings are covered by one negotiated political declaration rather than a separate July ministerial declaration. In the 2023 precedent, an elements paper in February was followed by a May zero draft, June consultations, a July final draft and September adoption.',
          status: '2027 outcome type established; negotiation dates pending',
          href: 'https://www.un.org/en/conferences/SDGSummit2023/political-declaration',
        },
        {
          title: 'Official side-event call',
          timing: 'Spring · exact dates change',
          detail: 'In 2025, applications closed on 9 May and approval notification was expected by 6 June. The annual guidelines define eligibility and format.',
          status: '2025 official precedent',
          href: 'https://hlpf.un.org/sites/default/files/2025-07/HLPF%202025%20Guidelines%20Side%20Events.pdf',
        },
        {
          title: 'VNR Labs',
          timing: 'HLPF week',
          detail: 'VNR Labs are informal spaces for candid exchange on VNR practice. They are distinct from formal country presentations, declaration negotiations and side events.',
          status: 'Recurring HLPF event format',
          href: 'https://hlpf.un.org/2025/events',
        },
      ],
    },
    calendarNote: 'Because 2027 is an SDG Summit year, the ordinary July ministerial-declaration sequence is not projected. The political-declaration bars use the 2023 Summit cycle only as a precedent; the 2027 co-facilitator timetable is still pending.',
    milestones: [
      { label: 'SDG Summit political-declaration zero draft', detail: 'The 2023 Summit precedent placed the zero draft on 8 May. The 2027 co-facilitators have not yet published a timetable.', start: '2027-05-03', end: '2027-05-14', kind: 'draft', status: 'recent cycle', lane: 2 },
      { label: 'Political-declaration consultations and revisions', detail: 'The 2023 precedent used June consultations and a final draft in July. These dates are an early-warning range, not a 2027 deadline.', start: '2027-06-01', end: '2027-07-23', kind: 'negotiate', status: 'recent cycle', lane: 0 },
      { label: 'HLPF', detail: 'Official provisional forum dates.', start: '2027-07-06', end: '2027-07-15', kind: 'session', status: 'official provisional', lane: 2 },
      { label: 'SDG Summit', detail: 'The Heads-of-State HLPF under the General Assembly will take place in September 2027. Exact dates are not yet published.', start: '2027-09-20', end: '2027-09-22', kind: 'session', status: 'tentative', lane: 1 },
    ],
  },
  unga: {
    overview: {
      mandate: 'The UN’s universal deliberative body, with six Main Committees and a plenary covering the full international agenda.',
      outputs: 'Resolutions, decisions, declarations, committee reports and political commitments; most UNYD policy work sits in the Third Committee.',
      workingStructure: 'The session opens in September, High-level Week follows, Main Committees meet from late September, and committee outcomes move to plenary.',
      access: 'Accreditation through the country’s Permanent Mission in New York, e-deleGATE access and a clear relationship with the responsible person or team are decisive for statements and negotiations.',
      youthRelevance: 'The biennial UNGA Third Committee resolution on policies and programmes involving youth is the clearest recurring UNYD negotiation file. A separate list of annual and biennial Third Committee resolutions makes other relevant files visible before drafting begins.',
      strategicEntryPoints: [
        {
          title: 'Third Committee live document map',
          timing: 'Late September–November',
          detail: 'The meeting pages, calendar, documentation and proposals view answer different questions: what is happening, when an agenda item is heard, which report is presented, what text is before the Committee and what action it took.',
          status: 'Public official working pages',
          links: [
            { label: 'UN Journal', href: 'https://journal.un.org/' },
            { label: 'Third Committee', href: 'https://www.un.org/en/ga/third/' },
            { label: 'UNGA80 meetings', href: 'https://igov.un.org/ga/c3/80/meetings' },
            { label: 'UNGA80 proposals', href: 'https://igov.un.org/ga/c3/80/proposals' },
            { label: 'Documentation, voting and drafting guidance', href: 'https://www.un.org/en/ga/third/80/documentation.shtml' },
            { label: 'UN Editorial Manual', href: 'https://www.un.org/dgacm/en/content/editorial-manual' },
          ],
        },
        {
          title: 'Permanent Mission, delegation and e-deleGATE access',
          timing: 'Before travel and before requesting a formal role',
          detail: 'Public pages are enough to research the agenda, but accreditation, restricted delegation systems, draft-text circulation, speaker registration and national or regional coordination normally require a known contact at the Permanent Mission and an agreed delegation role.',
          status: 'National arrangements vary',
          href: 'https://www.eda.admin.ch/dam/eda/en/documents/publications/InternationaleOrganisationen/Uno/UN-ga-handbook_en.pdf',
        },
        {
          title: 'Annual and biennial resolution list',
          timing: 'May–July',
          detail: 'List the files expected at the next session, including the previous document symbol, recurrence, last main sponsor or facilitator and any requested Secretary-General report. This turns a broad topic interest into named files that can be discussed with the country’s Permanent Mission in New York.',
          status: 'planning step',
        },
        {
          title: 'Resolution, report and live draft',
          timing: 'Before and during each recurring negotiation',
          detail: 'Read the previous resolution for the existing mandate and recurrence clause, the requested Secretary-General report for implementation evidence and new issues, and the live draft for clause-specific proposals. These documents have different functions and should not be conflated.',
          status: 'Recurring document sequence',
          links: [
            { label: 'A/RES/78/179', href: 'https://documents.un.org/api/symbol/access?l=en&s=A%2FRES%2F78%2F179&t=pdf' },
            { label: 'A/80/375', href: 'https://documents.un.org/api/symbol/access?l=en&s=A%2F80%2F375&t=pdf' },
            { label: 'A/RES/80/180', href: 'https://documents.un.org/api/symbol/access?l=en&s=A%2FRES%2F80%2F180&t=pdf' },
          ],
        },
        {
          title: 'UNGA Youth Resolution pre-draft window',
          timing: 'August–September · odd years',
          detail: 'Identify the current facilitator and request a pre-draft exchange. In 2025, UN Youth Delegates met the Portuguese facilitator on 25 August, before the zero draft was issued.',
          status: '2025 precedent; 2027 dates unconfirmed',
        },
        {
          title: 'UNGA Youth Resolution formal text window',
          timing: 'October · odd years',
          detail: 'Obtain the zero draft and the national delegation’s internal deadline through the country’s Permanent Mission in New York, prepare clause-specific wording and follow readings, revisions and any silence procedure.',
          status: '2025 precedent; 2027 dates unconfirmed',
        },
        {
          title: 'Statements and interactive dialogues',
          timing: 'Third Committee calendar and presenter list',
          detail: 'A national statement, an intervention during an interactive dialogue and a high-level speech are separate formats with different speakers, timing and approval routes. The live calendar and presenter list show the relevant meeting; the country’s Permanent Mission in New York confirms whether a delegation slot is available.',
          status: 'Session-specific public schedule; delegation role varies',
          links: [
            { label: 'UNGA80 meeting calendar', href: 'https://www.un.org/en/ga/third/80/docs/calendar_of_meetings.pdf' },
            { label: 'UNGA80 presenter list', href: 'https://www.un.org/en/ga/third/80/docs/provisional-list.pdf' },
            { label: 'UN Web TV', href: 'https://webtv.un.org/' },
          ],
        },
        {
          title: 'High-Level Week and Third Committee timing',
          timing: 'September–November',
          detail: 'High-Level Week concentrates senior-level meetings and public events; the Third Committee then runs through statements, dialogues and resolution work. Travel dates should follow the actual role and agenda item rather than treating the full UNGA period as one continuous programme.',
          status: 'Annual structure; exact programme varies',
          href: 'https://www.un.org/en/ga/about/ropga/sessions.shtml',
        },
      ],
    },
    calendarNote: 'General Third Committee preparation is separated from the odd-year UNGA Youth Resolution sequence. The August–October dates use the verified 2025 cycle as a precedent, not as confirmed 2027 deadlines.',
    milestones: [
      { label: 'Annual and biennial resolution list', detail: 'Tentative planning window for compiling the expected 2027 files with the previous document symbol, recurrence, last sponsors or facilitator and requested reports.', start: '2027-05-03', end: '2027-06-18', kind: 'prepare', status: 'tentative', lane: 0 },
      { label: 'National delegation’s expected resolution list', detail: 'Tentative window for obtaining the current Third Committee file list from the country’s Permanent Mission in New York. This is useful process information, but there is no universal UN deadline for it.', start: '2027-06-21', end: '2027-07-16', kind: 'prepare', status: 'tentative', lane: 1 },
      { label: '2027 UNGA Youth Resolution facilitator', detail: 'Tentative window for confirming which Member State and Permanent Mission will facilitate the expected biennial Third Committee resolution on policies and programmes involving youth. The facilitator changes between cycles.', start: '2027-07-19', end: '2027-08-13', kind: 'prepare', status: 'tentative', lane: 0 },
      { label: 'Facilitator pre-draft meeting window', detail: 'In 2025, the meeting with the Portuguese facilitator took place on 25 August, before the zero draft. At least one week was allowed for outreach.', start: '2027-08-16', end: '2027-08-27', kind: 'prepare', status: 'recent cycle', lane: 1 },
      { label: 'Pre-zero-draft language consolidation', detail: 'The 2025 group used September to organize priorities and possible language before the new draft existed; this was preparation, not formal Member State input.', start: '2027-08-30', end: '2027-09-24', kind: 'draft', status: 'recent cycle', lane: 0 },
      { label: 'UNGA opening and High-level Week', detail: 'UNGA82 opens on 7 September 2027; the general debate opens on 21 September. Other High-level Week events follow the official programme.', start: '2027-09-07', end: '2027-09-27', kind: 'session', status: 'official', lane: 2 },
      { label: 'Third Committee opening window', detail: 'Tentative 2027 window based on the recurring early-October pattern; the official programme has not yet been published.', start: '2027-10-01', end: '2027-10-08', kind: 'session', status: 'tentative', lane: 0 },
      { label: 'UNGA Youth Resolution zero draft and national deadline', detail: 'In 2025, the zero draft of the Third Committee resolution on policies and programmes involving youth was released on 3 October and Member State comments were due on 8 October. The national internal deadline may fall earlier.', start: '2027-10-03', end: '2027-10-08', kind: 'draft', status: 'recent cycle', lane: 1 },
      { label: 'National wording-submission window', detail: 'In 2025, Austrian UN Youth Delegates used this short period to send clause-specific additions, deletions and amendments to the officials coordinating Austria’s position on the live zero draft.', start: '2027-10-04', end: '2027-10-08', kind: 'negotiate', status: 'recent cycle', lane: 2 },
      { label: 'UNGA Youth Resolution readings and revisions', detail: 'The verified 2025 sequence ran from the first reading on 10 October through revised texts and the 28–30 October silence procedure.', start: '2027-10-10', end: '2027-10-30', kind: 'negotiate', status: 'recent cycle', lane: 1 },
      { label: 'Committee action window', detail: 'Tentative window based on the recurring Third Committee sequence; official action dates are set in the programme of work.', start: '2027-11-08', end: '2027-11-26', kind: 'session', status: 'tentative', lane: 0 },
      { label: 'Plenary adoption window', detail: 'Tentative window for plenary action on Third Committee reports; the official plenary schedule is not yet published.', start: '2027-12-01', end: '2027-12-22', kind: 'follow-up', status: 'tentative', lane: 1 },
    ],
  },
  hrc: {
    overview: {
      mandate: 'The UN intergovernmental body responsible for promoting and protecting human rights and addressing violations.',
      outputs: 'Resolutions, decisions, panel discussions, interactive dialogues, mandate renewals and the Council report.',
      workingStructure: 'Three regular sessions each year, organized by agenda item, with statements and dialogues followed by draft resolutions and action.',
      access: 'Official delegation status, coordination with the country’s Permanent Mission in Geneva and the session-specific speaker and resolution procedures determine practical access.',
      youthRelevance: 'The most useful entry points are recurring, session-specific files. The cycles below are more actionable than treating the Council as one general annual event.',
      strategicEntryPoints: [
        {
          title: 'OHCHR calls for input',
          timing: 'Rolling deadlines · mechanism-specific',
          detail: 'Special Procedures and other mechanisms publish calls that identify the report, questions, eligible contributors and deadline. This is a separate written-input route, not participation through a national delegation; eligibility and confidentiality must be checked in each call.',
          status: 'Official rolling directory',
          href: 'https://www.ohchr.org/en/calls-for-input-listing',
        },
        {
          title: 'Youth and human rights resolution',
          timing: 'September session · recent even-year cycle',
          detail: 'The Council adopted this resolution in 2022 (HRC51) and 2024 (HRC57). A further iteration is expected at HRC63 in 2026, but the draft should be rechecked before treating it as formally tabled.',
          status: '2026 expected; draft status to recheck',
          links: [
            { label: 'OHCHR youth and human rights', href: 'https://www.ohchr.org/en/youth' },
            { label: 'Youth reports and studies', href: 'https://www.ohchr.org/en/youth/reports' },
          ],
        },
        {
          title: 'Biennial panel on youth and human rights',
          timing: 'September session · alternating odd years',
          detail: 'The panel was held at HRC60 in 2025. The official three-year programme lists the next panel for HRC66 in 2027; its theme is still to be determined.',
          status: '2027 officially programmed',
          links: [
            { label: 'HRC60 panel programme, speakers and webcast', href: 'https://hrcportal.ohchr.org/60th-regular-session-human-rights-council-0' },
            { label: 'Three-year programme', href: 'https://hrcportal.ohchr.org/three-year-programme-work' },
          ],
        },
        {
          title: 'Annual full-day meeting on the rights of the child',
          timing: 'First regular session · every year',
          detail: 'A recurring first-session entry point for statements, side events and meetings. Official themes are armed conflict in 2026, children’s mental health and well-being in 2027, and artificial intelligence in 2028.',
          status: 'Recurring mandate and official themes',
          links: [
            { label: 'Three-year programme and scheduled themes', href: 'https://hrcportal.ohchr.org/three-year-programme-work' },
            { label: 'OHCHR children’s rights', href: 'https://www.ohchr.org/en/children' },
          ],
        },
        {
          title: 'Rights of the child resolution',
          timing: 'First regular session · recent even-year cycle',
          detail: 'The biennial resolution was adopted at HRC55 in 2024 and HRC61 in 2026. In 2026 the core groups were the European Union and GRULAC; the session schedule is the place to watch for informal consultations.',
          status: '2024 and 2026 verified',
          links: [
            { label: 'OHCHR children’s rights', href: 'https://www.ohchr.org/en/children' },
            { label: 'HRC session schedules', href: 'https://hrcportal.ohchr.org/hrc-sessions' },
          ],
        },
        {
          title: 'Committee on the Rights of the Child review',
          timing: 'Separate treaty-body cycle · country-specific',
          detail: 'This is adjacent to, but not part of, the Human Rights Council. The Committee follows its own session and country-review calendar: its meetings can overlap with an HRC session, but the two schedules are not synchronized. When a country is listed, civil society and children can use written submissions and Committee briefings.',
          status: 'Separate mechanism',
          links: [
            { label: 'CRC sessions and scheduled countries', href: 'https://tbinternet.ohchr.org/_layouts/15/TreatyBodyExternal/SessionsList.aspx?Treaty=CRC' },
            { label: 'Committee on the Rights of the Child', href: 'https://www.ohchr.org/en/treaty-bodies/crc' },
          ],
        },
      ],
    },
    calendarNote: 'There is no single annual HRC zero draft. Until a session-specific report, panel, resolution consultation or submission deadline is published, the calendar shows only the three official regular sessions; recurring youth and child-rights entry points remain described below.',
    milestones: [
      { label: 'HRC64', detail: 'Official session dates: 24 February–2 April 2027.', start: '2027-02-24', end: '2027-04-02', kind: 'session', status: 'official', lane: 2 },
      { label: 'HRC65', detail: 'Official session dates: 14 June–9 July 2027.', start: '2027-06-14', end: '2027-07-09', kind: 'session', status: 'official', lane: 2 },
      { label: 'HRC66', detail: 'Official session dates: 6 September–8 October 2027; the biennial panel on youth and human rights is programmed for this session.', start: '2027-09-06', end: '2027-10-08', kind: 'session', status: 'official', lane: 2 },
    ],
  },
  cnd: {
    overview: {
      mandate: 'The UN’s principal policy-making body on international drug control and implementation of the drug-control conventions.',
      outputs: 'A small annual package of policy resolutions, treaty-based drug-scheduling decisions and occasional declarations or recommendations to ECOSOC and the General Assembly.',
      workingStructure: 'Plenary considers the agenda and adopts outcomes; the parallel Committee of the Whole works through draft resolutions before they return to plenary for action.',
      access: 'Only a State member of the Commission can table a draft. Practical UNYD access to sponsor drafts, informal consultations and the Committee of the Whole therefore depends on the national delegation and the country’s Permanent Mission in Vienna.',
      youthRelevance: 'CND does not have one recurring youth resolution. Two separate youth-specific openings are the annual UNODC Youth Forum and the independent expert panel established by resolution 68/6, which must consult youth groups and return to CND70 in 2027.',
      strategicEntryPoints: [
        {
          title: 'Annual UNODC Youth Forum',
          timing: 'Nomination can begin in the previous summer · event around CND',
          detail: 'The UNODC forum is seemingly organised and largely financed by Russia. UNYD participation is very rare.',
          status: 'Annual adjacent participation route; 2027 nomination pending',
          href: 'https://www.unodc.org/res/prevention/youth-initiative/youth-forum-2025_html/Youth_Forum_2025_Report_Final.pdf',
        },
        {
          title: 'Annual draft-resolution package',
          timing: 'Deadline normally four weeks before the session',
          detail: 'This is not a fixed list of six or seven recurring resolutions. The official reports record four CND policy resolutions plus a high-level declaration in 2024, six resolutions in 2025, and four CND resolutions plus one draft General Assembly resolution in 2026. Titles, sponsors and votes changed in every package.',
          status: 'Annual mechanism; 2027 draft list not yet published',
          links: [
            { label: 'CND67 report (2024)', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2024%2F28&t=pdf' },
            { label: 'CND68 report (2025)', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2025%2F28&t=pdf' },
            { label: 'CND69 report (2026)', href: 'https://documents.un.org/api/symbol/access?l=en&s=E%2F2026%2F28&t=pdf' },
          ],
        },
        {
          title: 'Recurring policy lines, not recurring titles',
          timing: 'Multi-year lineages · no fixed annual or biennial cycle',
          detail: 'Alternative development formed a clear 2024–2026 chain. Public-health resolutions moved from recovery, medicines and overdose in 2024 to prevention and stimulant treatment in 2025 and an integrated public-health resolution in 2026. Synthetic-drug and precursor files also recur, but their scope and sponsors change.',
          status: 'Pattern verified across the 2024–2026 official reports',
          href: 'https://rddb.unodc.org/rddb/',
        },
        {
          title: 'Independent expert-panel recommendations',
          timing: 'Consultations before CND70 · discussion at CND70',
          detail: 'Resolution 68/6 requires the 19-member panel to consult States and stakeholders, expressly including youth groups, through a virtual platform. CND69 completed the panel’s composition; CND70 is mandated to discuss its recommendations. Consultation dates and the route for youth input still have to be published.',
          status: '2027 discussion mandated; consultation timetable pending',
          href: 'https://www.unodc.org/documents/commissions/CND/Drug_Resolutions/2020-2029/2025/Res_68_6.pdf',
        },
        {
          title: 'Drug-scheduling decisions',
          timing: 'Annual treaty function · separate from policy resolutions',
          detail: 'The Commission also votes on WHO and INCB recommendations to place substances and precursors under international control. These decisions can be numerous, but they are not the same as the smaller package of negotiated thematic resolutions.',
          status: 'Recurring treaty-based process',
          href: 'https://www.unodc.org/LSS/Announcement/Details/475042d4-534c-4a06-b956-4531d4a72432',
        },
        {
          title: 'Committee of the Whole',
          timing: 'During the regular session',
          detail: 'Sponsors introduce draft resolutions and delegations negotiate them in the Committee of the Whole, which runs alongside plenary. Approved texts return to plenary for adoption. Informal sponsor consultations may begin before formal introduction when the Commission’s Bureau agrees.',
          status: 'Recurring formal working structure',
          href: 'https://www.unodc.org/documents/commissions/CND_CCPCJ_joint/Delegates_Handbook/Delegates_Handbook_2019_update_sept_19.pdf',
        },
      ],
    },
    calendarNote: 'The four-week tabling rule is official, but the 15 February 2027 date is derived from the officially published provisional CND70 start date and must be checked against the Bureau-endorsed deadline. The 25 January Mission check is a planning point exactly three weeks earlier, not a UN deadline.',
    milestones: [
      { label: 'National delegation check on intended resolution files', detail: 'Planning point exactly three weeks before the projected tabling deadline. Ask your country’s Permanent Mission in Vienna which national, EU or other regional drafts it expects to sponsor, co-sponsor or follow, who owns each file and whether early sponsor text is available.', start: '2027-01-25', end: '2027-01-25', kind: 'prepare', status: 'tentative', lane: 0 },
      { label: 'Expected CND70 draft-resolution deadline', detail: 'Commission decision 55/1 sets the deadline in principle four weeks before the session. Applying that rule to the provisional 15 March 2027 opening gives 15 February; the Bureau-endorsed CND70 deadline must still be confirmed.', start: '2027-02-15', end: '2027-02-15', kind: 'draft', status: 'tentative', lane: 2 },
      { label: 'Sponsor circulation and informal consultations', detail: 'Once the L-documents and sponsors are known, follow the sponsor-led informals and revised texts. The exact sequence depends on the drafts tabled; negotiations can start before formal introduction when the Bureau agrees.', start: '2027-02-22', end: '2027-03-12', kind: 'negotiate', status: 'tentative', lane: 0 },
      { label: 'Resolution 68/6 panel recommendations', detail: 'CND70 is mandated to discuss the independent expert panel’s recommendations. Resolution 68/6 also requires stakeholder consultations that expressly include youth groups; their dates are still pending.', start: '2027-03-15', end: '2027-03-19', kind: 'follow-up', status: 'official provisional', lane: 1 },
      { label: 'CND70', detail: 'Official provisional session dates.', start: '2027-03-15', end: '2027-03-19', kind: 'session', status: 'official provisional', lane: 2 },
    ],
  },
};
