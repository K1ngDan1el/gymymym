export const MachineInclineDB = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 80 L80 80 M40 80 L40 50 L75 30 M55 80 L55 65 L40 65" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 52 L75 28" stroke="#334155" strokeWidth="8" strokeLinecap="round"/>
    <g style={{ animation: 'lift-weight 2.5s ease-in-out infinite' }}>
      <line x1="50" y1="40" x2="60" y2="34" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="40" r="4" fill="currentColor" />
      <circle cx="60" cy="34" r="4" fill="currentColor" />
    </g>
  </svg>
);

export const MachineLatPulldown = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M30 90 L70 90 M50 90 L50 10 L30 10 M50 50 L65 50 M60 50 L60 90" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="30" y="45" width="10" height="5" fill="#334155" rx="2" />
    <rect x="40" y="35" width="10" height="5" fill="#334155" rx="2" />
    <circle cx="35" cy="15" r="3" fill="#64748b" />
    <g style={{ animation: 'pull-down 2.5s ease-in-out infinite' }}>
      <line x1="35" y1="15" x2="35" y2="35" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M20 35 Q35 30 50 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineCablePushdown = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 90 L80 90 M50 90 L50 10 L70 10" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="65" cy="15" r="3" fill="#64748b" />
    <g style={{ animation: 'pull-down 2s ease-in-out infinite' }}>
      <line x1="65" y1="15" x2="65" y2="45" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M60 55 L65 45 L70 55" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="55" r="3" fill="currentColor" />
      <circle cx="70" cy="55" r="3" fill="currentColor" />
    </g>
  </svg>
);

export const MachinePreacherCurl = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 90 L80 90 M50 90 L50 60 L30 40 L30 30" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M25 45 L45 25" stroke="#334155" strokeWidth="10" strokeLinecap="round"/>
    <rect x="60" y="55" width="15" height="5" fill="#334155" rx="2" />
    <g style={{ transformOrigin: '35px 35px', animation: 'curl-up 2.5s ease-in-out infinite' }}>
      <line x1="35" y1="35" x2="55" y2="15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="55" cy="15" r="5" fill="currentColor" />
      <line x1="45" y1="15" x2="65" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachinePecDeck = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <circle cx="50" cy="50" r="15" fill="#334155" />
    <rect x="40" y="80" width="20" height="5" fill="#475569" rx="2" />
    <path d="M50 80 L50 65" stroke="#475569" strokeWidth="4" />
    <g style={{ transformOrigin: '50px 50px', animation: 'pec-deck-left 2.5s ease-in-out infinite' }}>
      <path d="M35 50 C20 50 15 35 15 20" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="10" y="15" width="10" height="15" fill="currentColor" rx="2" />
    </g>
    <g style={{ transformOrigin: '50px 50px', animation: 'pec-deck-right 2.5s ease-in-out infinite' }}>
      <path d="M65 50 C80 50 85 35 85 20" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="80" y="15" width="10" height="15" fill="currentColor" rx="2" />
    </g>
  </svg>
);

export const MachineCableRow = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M10 80 L90 80 M20 80 L20 40 L10 40 M30 80 L30 60" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="20" cy="45" r="3" fill="#64748b" />
    <rect x="50" y="65" width="20" height="5" fill="#334155" rx="2" />
    <path d="M30 60 L30 50" stroke="#334155" strokeWidth="6" strokeLinecap="round"/>
    <g style={{ animation: 'pull-row 2.5s ease-in-out infinite' }}>
      <line x1="20" y1="45" x2="60" y2="45" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M60 35 L60 55 M55 45 L65 45" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineSmithBulgarian = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M30 90 L30 10 M70 90 L70 10 M10 90 L90 90" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="60" y="60" width="15" height="5" fill="#334155" rx="2" />
    <path d="M65 65 L65 90 M70 65 L70 90" stroke="#475569" strokeWidth="2" />
    <g style={{ animation: 'squat-down 2.5s ease-in-out infinite' }}>
      <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <rect x="25" y="25" width="5" height="10" fill="currentColor" />
      <rect x="70" y="25" width="5" height="10" fill="currentColor" />
    </g>
  </svg>
);

export const MachineHipThrust = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M10 80 L90 80 M30 80 L30 50 L50 50 L50 80" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="25" y="45" width="30" height="5" fill="#334155" rx="2" />
    <g style={{ animation: 'lift-weight 2s ease-in-out infinite' }}>
      <line x1="50" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="50" r="10" fill="currentColor" className="opacity-80" />
      <circle cx="60" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
    </g>
  </svg>
);

export const MachineLegExtension = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 90 L80 90 M40 90 L40 50 M60 90 L60 50 L30 50 L30 20" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="40" y="45" width="20" height="5" fill="#334155" rx="2" />
    <rect x="25" y="20" width="5" height="30" fill="#334155" rx="2" />
    <g style={{ transformOrigin: '60px 50px', animation: 'leg-extend 2.5s ease-in-out infinite' }}>
      <line x1="60" y1="50" x2="60" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="80" r="5" fill="#94a3b8" />
    </g>
  </svg>
);

export const MachineLegRaise = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M30 90 L70 90 M40 90 L40 10 M60 90 L60 10 M40 40 L30 40 M60 40 L70 40 M40 20 L60 20" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="42" y="25" width="16" height="30" fill="#334155" rx="2" />
    <rect x="25" y="38" width="15" height="4" fill="#334155" rx="2" />
    <rect x="60" y="38" width="15" height="4" fill="#334155" rx="2" />
    <g style={{ transformOrigin: '50px 55px', animation: 'leg-raise 2s ease-in-out infinite' }}>
      <line x1="50" y1="55" x2="50" y2="85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineAdductor = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 90 L80 90 M50 90 L50 30" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="35" y="40" width="30" height="20" fill="#334155" rx="4" />
    <circle cx="50" cy="20" r="15" fill="#475569" />
    <g style={{ transformOrigin: '40px 60px', animation: 'abduct-l 2.5s ease-in-out infinite' }}>
      <line x1="40" y1="60" x2="25" y2="80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <rect x="20" y="70" width="10" height="15" fill="#94a3b8" rx="2" transform="rotate(-35 25 80)" />
    </g>
    <g style={{ transformOrigin: '60px 60px', animation: 'abduct-r 2.5s ease-in-out infinite' }}>
      <line x1="60" y1="60" x2="75" y2="80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <rect x="70" y="70" width="10" height="15" fill="#94a3b8" rx="2" transform="rotate(35 75 80)" />
    </g>
  </svg>
);

export const MachineGeneric = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <circle cx="50" cy="50" r="40" stroke="#475569" strokeWidth="4" fill="none" strokeDasharray="10 5" />
    <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
  </svg>
);