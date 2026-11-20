import type { Project } from './projects';

export const extensionProjects: Project[] = [
  {
    slug: 'docker-manager',
    title: 'Docker Manager',
    shortTitle: 'Docker Manager',
    tagline: 'Manage Docker resources and Compose projects without leaving Visual Studio Code.',
    description:
      'A Visual Studio Code extension for managing Docker containers, images, volumes, networks, and Compose projects, with monitoring, logs, and lifecycle actions.',
    categories: ['VS Code Extension', 'Developer Tools', 'Docker'],
    projectType: 'VS Code Extension',
    year: '',
    image: '/images/extensions/docker-manager/docker-manager.png',
    heroImage: '/images/extensions/docker-manager/docker-manager.png',
    heroImageAspect: 'aspect-video',
    featured: false,
    technologies: ['Visual Studio Code API', 'Docker CLI', 'Docker Compose'],
    links: [
      {
        label: 'Visual Studio Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=vendayx.vendayx-docker',
        type: 'external',
      },
    ],
    overview:
      'Docker Manager brings common Docker workflows into the editor. Its VS Code interface provides a place to inspect resources and use lifecycle actions while keeping container monitoring and logs close to the development workflow.',
    whatIBuilt: [
      'A VS Code interface for Docker containers, images, volumes, and networks',
      'Compose project management from within the editor',
      'Resource monitoring, log access, and lifecycle actions',
    ],
    role: 'Extension developer',
    responsibilities: [
      { area: 'Resource management', detail: 'Built views for containers, images, volumes, and networks' },
      { area: 'Compose workflows', detail: 'Added access to Docker Compose projects from VS Code' },
      { area: 'Operations', detail: 'Connected monitoring, logs, and lifecycle actions to the extension workflow' },
    ],
    sections: [
      {
        heading: 'Docker resources in the editor',
        body: 'The extension brings Docker resources into a VS Code dashboard so developers can inspect containers, images, volumes, and networks without switching away from their workspace.',
      },
      {
        heading: 'Compose and container operations',
        body: 'Compose projects, logs, monitoring, and lifecycle actions support common development-time container workflows. Docker remains the execution layer for these operations.',
      },
    ],
    flowSteps: [
      { label: 'Open Docker Manager', detail: 'View Docker resources from the VS Code interface' },
      { label: 'Inspect resources', detail: 'Browse containers, images, volumes, networks, and Compose projects' },
      { label: 'Monitor and operate', detail: 'Review logs and use available lifecycle actions' },
    ],
    features: [
      { title: 'Container Management', description: 'Inspect containers and access lifecycle actions from VS Code.' },
      { title: 'Resource Browser', description: 'View Docker images, volumes, and networks alongside container information.' },
      { title: 'Compose Projects', description: 'Manage Docker Compose projects as part of the editor workflow.' },
      { title: 'Monitoring and Logs', description: 'Keep resource monitoring and container logs close to the development workspace.' },
    ],
    gallery: [
      { src: '/images/extensions/docker-manager/docker-manager.png', caption: 'Docker Manager dashboard in Visual Studio Code' },
    ],
    team: 'Independent',
    status: 'Available on Visual Studio Marketplace',
  },
  {
    slug: 'api-tester-pro',
    title: 'API Tester Pro',
    shortTitle: 'API Tester Pro',
    tagline: 'Build, send, and inspect REST requests from inside Visual Studio Code.',
    description:
      'A lightweight REST client extension for composing requests, inspecting responses, and reusing saved calls and environment variables without leaving the editor.',
    categories: ['VS Code Extension', 'Developer Tools', 'API'],
    projectType: 'VS Code Extension',
    year: '',
    image: '/images/extensions/api-tester-pro/api-tester-pro.png',
    heroImage: '/images/extensions/api-tester-pro/api-tester-pro.png',
    heroImageAspect: 'aspect-video',
    featured: false,
    technologies: ['Visual Studio Code API', 'REST', 'SecretStorage'],
    links: [
      {
        label: 'Visual Studio Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=vendayx.api-tester-pro',
        type: 'external',
      },
    ],
    overview:
      'API Tester Pro keeps everyday REST API testing in the editor. Users can construct requests, inspect response data, and reuse calls through saved collections and environment variables. SecretStorage support provides a VS Code-managed option for sensitive values.',
    whatIBuilt: [
      'A REST request editor for composing and sending API calls',
      'Response inspection, including response headers',
      'Reusable saved requests and collections',
      'Environment variables and VS Code SecretStorage integration',
    ],
    role: 'Extension developer',
    responsibilities: [
      { area: 'Request workflow', detail: 'Created an in-editor flow for building and sending REST requests' },
      { area: 'Response inspection', detail: 'Presented API responses and headers for review' },
      { area: 'Reusable requests', detail: 'Added saved calls, collections, and environment variables' },
      { area: 'Credential handling', detail: 'Integrated VS Code SecretStorage for sensitive values' },
    ],
    sections: [
      {
        heading: 'Request and response workflow',
        body: 'Compose a REST request in VS Code, send it to the API, and inspect the resulting response and headers without moving to a separate client.',
      },
      {
        heading: 'Reuse across environments',
        body: 'Saved calls and collections make requests reusable. Environment variables support switching request values, while SecretStorage can hold sensitive values using VS Code’s secure storage API.',
      },
    ],
    flowSteps: [
      { label: 'Compose', detail: 'Create a REST request and configure its values' },
      { label: 'Send', detail: 'Make the request to the selected API endpoint' },
      { label: 'Inspect', detail: 'Review the response and headers' },
      { label: 'Reuse', detail: 'Save the call and use environment variables as needed' },
    ],
    features: [
      { title: 'REST Request Editor', description: 'Build and send API requests without leaving VS Code.' },
      { title: 'Response Inspection', description: 'Review API responses and response headers in the extension.' },
      { title: 'Collections and Saved Calls', description: 'Keep reusable requests organized for later testing.' },
      { title: 'Environments and Secrets', description: 'Use environment variables and VS Code SecretStorage for request values.' },
    ],
    gallery: [
      { src: '/images/extensions/api-tester-pro/api-tester-pro.png', caption: 'Request editor and response details' },
      { src: '/images/extensions/api-tester-pro/marketplace-listing.png', caption: 'API Tester Pro Marketplace listing' },
    ],
    team: 'Independent',
    status: 'Available on Visual Studio Marketplace',
  },
  {
    slug: 'mini-pomodoro',
    title: 'Mini Pomodoro',
    shortTitle: 'Mini Pomodoro',
    tagline: 'Keep a 25-minute focus timer visible in the Visual Studio Code status bar.',
    description:
      'A small VS Code productivity extension that places a Pomodoro countdown in the status bar and provides start, pause, and reset controls.',
    categories: ['VS Code Extension', 'Productivity'],
    projectType: 'VS Code Extension',
    year: '',
    image: '/images/extensions/mini-pomodoro/timer-panel.png',
    heroImage: '/images/extensions/mini-pomodoro/timer-panel.png',
    heroImageAspect: 'aspect-video',
    featured: false,
    technologies: ['Visual Studio Code API', 'Status Bar'],
    links: [
      {
        label: 'Visual Studio Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=vendayx.mini-pomodoro',
        type: 'external',
      },
    ],
    overview:
      'Mini Pomodoro brings a simple focus timer into the VS Code status bar. The countdown stays visible while working, with controls to start, pause, and reset a 25-minute focus session.',
    whatIBuilt: [
      'A visible 25-minute countdown in the VS Code status bar',
      'Start, pause, and reset controls for focus sessions',
      'A compact timer panel that keeps the workflow inside the editor',
    ],
    role: 'Extension developer',
    responsibilities: [
      { area: 'Timer experience', detail: 'Designed a compact countdown for the VS Code status bar' },
      { area: 'Session controls', detail: 'Added start, pause, and reset actions for the focus timer' },
    ],
    sections: [
      {
        heading: 'A timer close at hand',
        body: 'The countdown is displayed in the status bar so it remains accessible while editing. A dedicated timer panel provides the focus controls.',
      },
      {
        heading: 'Simple focus sessions',
        body: 'A 25-minute session can be started, paused, or reset. The extension keeps the interaction intentionally lightweight and within VS Code.',
      },
    ],
    flowSteps: [
      { label: 'Start focus session', detail: 'Begin the 25-minute countdown' },
      { label: 'Keep working', detail: 'Check the remaining time in the status bar' },
      { label: 'Pause or reset', detail: 'Control the session from the timer panel' },
    ],
    features: [
      { title: 'Status Bar Countdown', description: 'Keep the remaining focus time visible while working in the editor.' },
      { title: '25-Minute Sessions', description: 'Start a Pomodoro-length focus session from the extension.' },
      { title: 'Pause and Reset', description: 'Pause an active timer or reset it when starting over.' },
    ],
    gallery: [
      { src: '/images/extensions/mini-pomodoro/timer-panel.png', caption: 'Mini Pomodoro timer panel' },
      { src: '/images/extensions/mini-pomodoro/marketplace-listing.png', caption: 'Mini Pomodoro Marketplace listing' },
    ],
    team: 'Independent',
    status: 'Available on Visual Studio Marketplace',
  },
  {
    slug: 'secretguard',
    title: 'Vendayx SecretGuard',
    shortTitle: 'SecretGuard',
    tagline: 'Find likely hardcoded credentials in source and configuration files with local, offline scans.',
    description:
      'A best-effort VS Code secret detector that reports likely credentials with diagnostics and a Security Dashboard. Scanning is local and offline; credential values are not uploaded, logged, or retained in findings.',
    categories: ['VS Code Extension', 'Developer Tools', 'Security'],
    projectType: 'VS Code Extension',
    year: '',
    image: '/images/extensions/secretguard/security-dashboard.png',
    heroImage: '/images/extensions/secretguard/security-dashboard.png',
    heroImageAspect: 'aspect-video',
    featured: false,
    technologies: ['Visual Studio Code API', 'TypeScript', 'Regular Expressions'],
    links: [
      {
        label: 'Visual Studio Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=vendayx.vendayx',
        type: 'external',
      },
    ],
    overview:
      'SecretGuard scans supported source and configuration files for patterns that may indicate hardcoded credentials. It reports severity-ranked diagnostics and dashboard findings while keeping scans offline and sensitive values out of finding metadata.',
    whatIBuilt: [
      'Automatic scans when supported files open or change, plus current-file and workspace scan commands',
      'Detectors for AWS access key IDs, PEM private-key headers, database URL credentials, and likely credential assignments',
      'Severity-ranked diagnostics and a dashboard with counts and line-linked findings',
      'Validated custom regex rules with a capturing group for the sensitive value',
      'A quick fix that explains moving credentials to environment variables without editing source',
    ],
    role: 'Extension developer',
    responsibilities: [
      { area: 'Detection', detail: 'Implemented local pattern scans across supported source and configuration formats' },
      { area: 'Privacy', detail: 'Kept credential values out of messages, logs, and retained findings' },
      { area: 'VS Code integration', detail: 'Connected scanning to diagnostics, commands, quick fixes, and a dashboard' },
      { area: 'Custom rules', detail: 'Added validation for user-defined detection patterns and metadata' },
    ],
    sections: [
      {
        heading: 'Local scanning and diagnostics',
        body: 'Supported files are scanned when opened, after edits, or by explicit command. Edit-triggered scans are briefly debounced. Findings appear as VS Code diagnostics and can be reviewed in the Security Dashboard.',
      },
      {
        heading: 'Conservative detection',
        body: 'Built-in patterns look for AWS access key IDs, PEM private-key headers, database URL credentials, and likely password, API key, JWT secret, and authentication-token assignments. Configurable custom patterns allow teams to add specific rules.',
      },
      {
        heading: 'Privacy and limitations',
        body: 'Scanning stays on the device. Finding metadata is held in extension memory, and sensitive values are neither included in messages nor retained. SecretGuard is a best-effort detector: it can miss credentials or flag values that are not active.',
      },
    ],
    flowSteps: [
      { label: 'Open or edit a supported file', detail: 'Run an automatic local scan or start one explicitly' },
      { label: 'Evaluate patterns', detail: 'Check source lines with built-in and valid custom rules' },
      { label: 'Report findings', detail: 'Show severity and line locations without exposing credential values' },
      { label: 'Review and remediate', detail: 'Inspect the dashboard and use guidance to move values to approved secret storage' },
    ],
    features: [
      { title: 'Automatic and On-Demand Scans', description: 'Scan supported files on open, after edits, or through file and workspace commands.' },
      { title: 'Credential Pattern Detection', description: 'Flag likely AWS keys, PEM headers, database URL credentials, and sensitive assignments.' },
      { title: 'Security Dashboard', description: 'Review finding totals, severity counts, and clickable line-linked results.' },
      { title: 'Custom Patterns', description: 'Add validated regex rules with a capture group for the sensitive value.' },
      { title: 'Privacy-Conscious Findings', description: 'Keep scans local and avoid exposing sensitive values in messages or findings.' },
      { title: 'Workspace Scan Limits', description: 'Skip common build and dependency directories and files larger than 1 MiB during workspace scans.' },
    ],
    gallery: [
      { src: '/images/extensions/secretguard/security-dashboard.png', caption: 'Security Dashboard with severity totals and line-linked findings' },
    ],
    team: 'Independent',
    status: 'Available on Visual Studio Marketplace',
  },
  {
    slug: 'sql-detective',
    title: 'SQL Detective',
    shortTitle: 'SQL Detective',
    tagline: 'Get local static diagnostics and practical recommendations while editing SQL.',
    description:
      'A lightweight VS Code extension that analyzes SQL files for common performance and safety concerns. It does not execute SQL, connect to databases, or send file contents anywhere.',
    categories: ['VS Code Extension', 'Developer Tools', 'SQL'],
    projectType: 'VS Code Extension',
    year: '',
    image: '/images/extensions/sql-detective/sql-detective-dashboard.png',
    heroImage: '/images/extensions/sql-detective/sql-detective-dashboard.png',
    heroImageAspect: 'aspect-video',
    featured: false,
    technologies: ['TypeScript', 'Visual Studio Code API', 'SQL Tokenizer'],
    links: [
      {
        label: 'Visual Studio Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=vendayx.sql-detective',
        type: 'external',
      },
    ],
    overview:
      'SQL Detective performs best-effort static analysis of SQL text. A local tokenizer supports comment- and string-aware statement handling, while diagnostics, Quick Fix suggestions, and a dashboard help developers review common issues without executing queries.',
    whatIBuilt: [
      'Real-time analysis for open SQL files, including multiline and multi-statement input',
      'Diagnostics for SELECT *, unfiltered UPDATE and DELETE, missing pagination, and repeated same-column OR conditions',
      'A Quick Fix to convert simple same-column equality chains from OR to IN',
      'A dashboard with issue counts, explanations, suggestions, and links to affected lines',
      'Commands to analyze the current file or workspace and clear findings',
    ],
    role: 'Extension developer',
    responsibilities: [
      { area: 'SQL analysis', detail: 'Built rule-based static checks using a small local tokenizer' },
      { area: 'Editor diagnostics', detail: 'Reported findings against SQL source locations in VS Code' },
      { area: 'Code actions', detail: 'Added an explicit OR-to-IN Quick Fix for simple literal conditions' },
      { area: 'Dashboard', detail: 'Presented issue counts, explanations, suggestions, and affected-line links' },
    ],
    sections: [
      {
        heading: 'Static analysis without execution',
        body: 'Analysis runs locally on SQL text. The extension does not execute statements, connect to a database, or send file contents to an external service.',
      },
      {
        heading: 'Conservative rule set',
        body: 'The checks cover SELECT *, UPDATE or DELETE without WHERE, SELECT without pagination, repeated same-column OR equality, and unfiltered SELECT statements that already use pagination. The pagination and unfiltered-read checks avoid duplicate warnings when a query has no pagination.',
      },
      {
        heading: 'Quick Fix and limitations',
        body: 'For simple same-column equality conditions, a Quick Fix can replace a repeated OR chain with IN. The analyzer is not a complete SQL grammar; nested scopes, complex Boolean expressions, and dialect-specific syntax may not be recognized.',
      },
    ],
    flowSteps: [
      { label: 'Open or analyze a SQL file', detail: 'Run automatically or use a file/workspace command' },
      { label: 'Tokenize and split statements', detail: 'Handle comments, strings, and multiple statements locally' },
      { label: 'Apply static rules', detail: 'Check for common performance and safety concerns' },
      { label: 'Review results', detail: 'Use diagnostics, dashboard explanations, and available Quick Fixes' },
    ],
    features: [
      { title: 'Safety Diagnostics', description: 'Flag UPDATE or DELETE statements without a WHERE clause.' },
      { title: 'Query Recommendations', description: 'Highlight SELECT * and SELECT statements that lack pagination.' },
      { title: 'Repeated OR Detection', description: 'Find same-column equality chains and recommend using IN.' },
      { title: 'OR-to-IN Quick Fix', description: 'Convert supported simple literal equality chains with an explicit code action.' },
      { title: 'Findings Dashboard', description: 'Review issue totals, severity, explanations, suggestions, and affected lines.' },
      { title: 'Workspace Commands', description: 'Analyze the current file or entire workspace and clear existing findings.' },
    ],
    gallery: [
      { src: '/images/extensions/sql-detective/sql-detective-dashboard.png', caption: 'SQL Detective diagnostics and analysis dashboard' },
    ],
    team: 'Independent',
    status: 'Available on Visual Studio Marketplace',
  },
  {
    slug: 'log-lens',
    title: 'Log Lens',
    shortTitle: 'Log Lens',
    tagline: 'Inspect, search, and analyze large log files locally in a read-only VS Code viewer.',
    description:
      'A local, offline log viewer and analyzer for VS Code. It opens .log files in a read-only custom editor, parses them in a worker thread, and uses bounded in-memory retention to make large logs easier to inspect.',
    categories: ['VS Code Extension', 'Developer Tools', 'Observability'],
    projectType: 'VS Code Extension',
    year: '',
    image: '/images/extensions/log-lens/log-lens-viewer.png',
    heroImage: '/images/extensions/log-lens/log-lens-viewer.png',
    heroImageAspect: 'aspect-video',
    featured: false,
    technologies: ['TypeScript', 'Visual Studio Code API', 'Worker Threads', 'Virtualized UI'],
    links: [
      {
        label: 'Visual Studio Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=vendayx.log-lens-analyzer',
        type: 'external',
      },
    ],
    overview:
      'Log Lens opens .log files in a read-only custom editor and parses them locally in a worker thread. It detects several common log formats, offers filtering and search, and combines retained rows for interaction with full-file statistics and timeline aggregation.',
    whatIBuilt: [
      'A read-only custom editor for .log files with format detection and plain-text fallback',
      'Level filters, text and regex search, saved time filters, and a clickable minute-level timeline',
      'Full-scan statistics and normalized repeated-error grouping',
      'Foldable stack traces with source locations and inline expansion of raw records',
      'Live tailing with pause/resume, truncation detection, and log-rotation handling',
      'Optional sensitive-data masking, filtered JSON/CSV exports, and Markdown bug reports',
      'Worker parsing, chunked line reads, virtualized rows, and configurable bounded row retention',
    ],
    role: 'Extension developer',
    responsibilities: [
      { area: 'Parsing', detail: 'Designed worker-based streaming analysis and format-specific log parsing' },
      { area: 'Viewing', detail: 'Built a read-only custom editor with virtualized rows and expandable records' },
      { area: 'Analysis', detail: 'Added statistics, error grouping, level filtering, search, and timeline navigation' },
      { area: 'Privacy', detail: 'Kept processing local and added optional masking for display, exports, and copy actions' },
    ],
    sections: [
      {
        heading: 'Format detection and navigation',
        body: 'The parser recognizes JSON-lines, Nginx/Apache access and error records, Docker records, stack traces, and timestamp/level/message logs, with plain-text fallback. Severity labels are normalized; Docker stdout and stderr are treated as stream metadata rather than severity levels.',
      },
      {
        heading: 'Full-file analysis with bounded viewing',
        body: 'Counts, statistics, repeated-error grouping, and timeline aggregation run across the full file. The editor retains only the newest configured number of parsed rows for viewing, filtering, search, and export. Worker-thread parsing, chunked reads, and virtualized rows support large files while keeping retained memory bounded.',
      },
      {
        heading: 'Live tail and privacy',
        body: 'Live tail supports pause/resume and handles truncation and log rotation. Optional masking applies to display, exports, and copy actions without changing the source file. Log contents remain on the device; there are no network calls, telemetry, or remote services.',
      },
    ],
    flowSteps: [
      { label: 'Open a .log file', detail: 'Use the read-only Log Lens custom editor' },
      { label: 'Parse in a worker', detail: 'Detect formats and stream records without blocking the editor' },
      { label: 'Analyze the full file', detail: 'Calculate counts, message groups, service impact, and timeline buckets' },
      { label: 'Inspect retained rows', detail: 'Filter, search, expand records, and navigate to source locations' },
      { label: 'Export or tail', detail: 'Save filtered results, copy a contextual bug report, or follow new log data' },
    ],
    features: [
      { title: 'Multi-Format Parsing', description: 'Detect JSON-lines, Nginx/Apache, Docker, stack traces, and timestamp/level/message logs.' },
      { title: 'Search and Filters', description: 'Combine level toggles, text or regex search, and quick time filters.' },
      { title: 'Statistics and Error Groups', description: 'Review full-scan level distribution, frequent normalized messages, service impact, and repeated errors.' },
      { title: 'Timeline Navigation', description: 'Select a minute-level histogram bucket to filter the log to that time.' },
      { title: 'Live Tail', description: 'Pause or resume updates and handle truncation and log rotation.' },
      { title: 'Masking and Exports', description: 'Optionally mask sensitive values in display and output, then export filtered JSON/CSV or copy a Markdown bug report.' },
      { title: 'Large-File Handling', description: 'Use worker parsing, chunked reads, virtualization, and configurable bounded row retention.' },
    ],
    gallery: [
      { src: '/images/extensions/log-lens/log-lens-viewer.png', caption: 'Log Lens viewer with level filters, statistics, timeline, and parsed records' },
    ],
    team: 'Independent',
    status: 'Available on Visual Studio Marketplace',
  },
];
