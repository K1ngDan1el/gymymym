// src/components/Machines.jsx

// --- PECHO ---
export const MachineBenchPress = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <rect x="20" y="65" width="60" height="8" fill="#334155" rx="2" />
    <path d="M25 65 L25 85 M75 65 L75 85" stroke="#475569" strokeWidth="4" />
    <g style={{ animation: 'lift-weight 2.5s ease-in-out infinite' }}>
      <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <rect x="20" y="42" width="10" height="16" fill="#475569" rx="1" />
      <rect x="70" y="42" width="10" height="16" fill="#475569" rx="1" />
    </g>
  </svg>
);

export const MachineInclineDB = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 80 L80 80 M40 80 L40 50 L75 30 M55 80 L55 65 L40 65" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 52 L75 28" stroke="#334155" strokeWidth="8" strokeLinecap="round"/>
    <g style={{ animation: 'lift-weight 2.5s ease-in-out infinite' }}>
      <line x1="50" y1="40" x2="60" y2="34" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="40" r="5" fill="currentColor" />
      <circle cx="60" cy="34" r="5" fill="currentColor" />
    </g>
  </svg>
);

export const MachineDumbbellFly = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <rect x="40" y="20" width="20" height="60" fill="#334155" rx="4" />
    <g style={{ transformOrigin: '50px 50px', animation: 'pec-deck-left 2.5s ease-in-out infinite' }}>
      <line x1="50" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="20" cy="50" r="6" fill="currentColor" />
    </g>
    <g style={{ transformOrigin: '50px 50px', animation: 'pec-deck-right 2.5s ease-in-out infinite' }}>
      <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="80" cy="50" r="6" fill="currentColor" />
    </g>
  </svg>
);

export const MachineCableCrossover = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M10 10 L10 90 M90 10 L90 90" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    <g style={{ animation: 'pull-row 2.5s ease-in-out infinite alternate' }}>
        <path d="M10 20 Q50 60 50 50" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="4 2" />
        <path d="M90 20 Q50 60 50 50" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="4 2" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
    </g>
  </svg>
);

export const MachineDips = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 60 L20 40 L80 40 L80 60" stroke="#334155" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M20 40 L20 90 M80 40 L80 90" stroke="#475569" strokeWidth="4" />
    <g style={{ animation: 'squat-down 2s ease-in-out infinite' }}>
      <circle cx="50" cy="30" r="10" fill="currentColor" />
      <path d="M50 40 L50 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
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

// --- ESPALDA ---
export const MachinePullUp = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 20 L80 20" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
    <path d="M20 20 L20 90 M80 20 L80 90" stroke="#475569" strokeWidth="4" />
    <g style={{ animation: 'lift-weight 2.5s ease-in-out infinite reverse' }}>
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      <path d="M50 60 L50 85" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path d="M50 60 L30 30 M50 60 L70 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineLatPulldown = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M30 90 L70 90 M50 90 L50 10 L30 10 M50 50 L65 50 M60 50 L60 90" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <g style={{ animation: 'pull-down 2.5s ease-in-out infinite' }}>
      <line x1="35" y1="15" x2="35" y2="35" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M20 35 Q35 30 50 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineBarbellRow = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
     <g style={{ animation: 'lift-weight 2s ease-in-out infinite' }}>
      <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="25" cy="70" r="8" fill="#475569" />
      <circle cx="75" cy="70" r="8" fill="#475569" />
    </g>
    <path d="M40 30 L50 60 L60 30" stroke="#334155" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="20" r="8" fill="#334155" />
  </svg>
);

export const MachineCableRow = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M10 80 L90 80 M20 80 L20 40 L10 40 M30 80 L30 60" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="50" y="65" width="20" height="5" fill="#334155" rx="2" />
    <g style={{ animation: 'pull-row 2.5s ease-in-out infinite' }}>
      <line x1="20" y1="45" x2="60" y2="45" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M60 35 L60 55 M55 45 L65 45" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineDumbbellRow = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <rect x="20" y="50" width="40" height="10" fill="#334155" rx="2" />
    <g style={{ animation: 'lift-weight 2s ease-in-out infinite' }}>
       <line x1="60" y1="60" x2="60" y2="40" stroke="currentColor" strokeWidth="4" />
       <rect x="55" y="60" width="10" height="5" fill="currentColor" />
       <rect x="55" y="40" width="10" height="5" fill="currentColor" />
    </g>
  </svg>
);

export const MachineCablePullover = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M50 10 L50 90" stroke="#475569" strokeWidth="4" strokeDasharray="4 4" />
    <g style={{ transformOrigin: '50px 10px', animation: 'leg-raise 3s ease-in-out infinite' }}>
      <line x1="50" y1="10" x2="50" y2="60" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="60" r="5" fill="currentColor" />
    </g>
  </svg>
);

// --- PIERNA ---
export const MachineSquat = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 90 L20 20 M80 90 L80 20" stroke="#475569" strokeWidth="4" />
    <g style={{ animation: 'squat-down 2.5s ease-in-out infinite' }}>
      <line x1="15" y1="35" x2="85" y2="35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <rect x="25" y="30" width="6" height="10" fill="#334155" />
      <rect x="69" y="30" width="6" height="10" fill="#334155" />
    </g>
  </svg>
);

export const MachineSmithBulgarian = MachineSquat;

export const MachineLegPress = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 80 L80 20" stroke="#475569" strokeWidth="4" />
    <g style={{ animation: 'pull-row 2.5s ease-in-out infinite alternate' }}>
       <rect x="40" y="40" width="20" height="40" transform="rotate(-45 50 60)" fill="#334155" rx="2" />
       <line x1="30" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineLunges = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <g style={{ animation: 'squat-down 2s ease-in-out infinite' }}>
      <path d="M30 70 L50 40 L70 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="50" y1="40" x2="50" y2="20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="50" cy="15" r="6" fill="currentColor" />
    </g>
    <line x1="10" y1="80" x2="90" y2="80" stroke="#475569" strokeWidth="4" />
  </svg>
);

export const MachineRDL = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <g style={{ animation: 'lift-weight 2.5s ease-in-out infinite' }}>
      <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="25" cy="70" r="10" fill="#475569" />
      <circle cx="75" cy="70" r="10" fill="#475569" />
    </g>
    <path d="M50 70 L50 30" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const MachineHipThrust = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M10 80 L90 80 M30 80 L30 50 L50 50 L50 80" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="25" y="45" width="30" height="5" fill="#334155" rx="2" />
    <g style={{ animation: 'lift-weight 2s ease-in-out infinite' }}>
      <line x1="50" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="50" r="10" fill="currentColor" className="opacity-80" />
    </g>
  </svg>
);

export const MachineLegExtension = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 90 L80 90 M40 90 L40 50 M60 90 L60 50 L30 50 L30 20" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="40" y="45" width="20" height="5" fill="#334155" rx="2" />
    <g style={{ transformOrigin: '60px 50px', animation: 'leg-extend 2.5s ease-in-out infinite' }}>
      <line x1="60" y1="50" x2="60" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="80" r="5" fill="#94a3b8" />
    </g>
  </svg>
);

export const MachineLegCurl = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <rect x="20" y="50" width="60" height="10" fill="#334155" rx="2" />
    <g style={{ transformOrigin: '70px 55px', animation: 'leg-extend 2.5s ease-in-out infinite reverse' }}>
        <line x1="70" y1="55" x2="90" y2="55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <circle cx="90" cy="55" r="5" fill="currentColor" />
    </g>
  </svg>
);

export const MachineCalfRaise = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <rect x="20" y="80" width="60" height="10" fill="#334155" />
    <g style={{ animation: 'lift-weight 1.5s ease-in-out infinite' }}>
      <path d="M50 80 L50 30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <rect x="30" y="20" width="40" height="10" fill="#475569" rx="2" />
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
    </g>
    <g style={{ transformOrigin: '60px 60px', animation: 'abduct-r 2.5s ease-in-out infinite' }}>
      <line x1="60" y1="60" x2="75" y2="80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </g>
  </svg>
);

// --- HOMBRO ---
export const MachineOverheadPress = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M50 90 L50 50" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
    <g style={{ animation: 'lift-weight 2s ease-in-out infinite' }}>
      <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="25" cy="40" r="5" fill="#475569" />
      <circle cx="75" cy="40" r="5" fill="#475569" />
    </g>
  </svg>
);

export const MachineLateralRaise = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <line x1="50" y1="90" x2="50" y2="40" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
    <circle cx="50" cy="30" r="8" fill="#334155" />
    <g style={{ transformOrigin: '50px 45px', animation: 'lateral-raise-l 2s ease-in-out infinite' }}>
       <line x1="50" y1="45" x2="20" y2="60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
       <circle cx="20" cy="60" r="5" fill="currentColor" />
    </g>
    <g style={{ transformOrigin: '50px 45px', animation: 'lateral-raise-r 2s ease-in-out infinite' }}>
       <line x1="50" y1="45" x2="80" y2="60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
       <circle cx="80" cy="60" r="5" fill="currentColor" />
    </g>
  </svg>
);

export const MachineFacePull = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M80 50 L80 10" stroke="#475569" strokeWidth="4" />
    <circle cx="80" cy="10" r="3" fill="#475569" />
    <g style={{ animation: 'pull-row 2s ease-in-out infinite alternate' }}>
       <line x1="80" y1="10" x2="50" y2="50" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" />
       <circle cx="50" cy="50" r="8" fill="currentColor" />
    </g>
  </svg>
);

export const MachineCableLateral = MachineLateralRaise;

// --- BRAZO ---
export const MachineBarbellCurl = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M50 90 L50 50" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
    <g style={{ transformOrigin: '50px 50px', animation: 'curl-up 2s ease-in-out infinite' }}>
      <line x1="50" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="30" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineHammerCurl = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M50 90 L50 50" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
    <g style={{ transformOrigin: '50px 50px', animation: 'curl-up 2s ease-in-out infinite' }}>
      <line x1="50" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <rect x="45" y="75" width="10" height="15" fill="currentColor" />
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
    </g>
  </svg>
);

export const MachineSkullCrusher = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <rect x="20" y="60" width="60" height="5" fill="#334155" />
    <g style={{ transformOrigin: '40px 50px', animation: 'curl-up 2s ease-in-out infinite' }}>
      <line x1="40" y1="50" x2="40" y2="20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <rect x="35" y="15" width="10" height="10" fill="currentColor" />
    </g>
  </svg>
);

export const MachineCablePushdown = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 90 L80 90 M50 90 L50 10 L70 10" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <g style={{ animation: 'pull-down 2s ease-in-out infinite' }}>
      <line x1="65" y1="15" x2="65" y2="45" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M60 55 L65 45 L70 55" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="55" r="3" fill="currentColor" />
      <circle cx="70" cy="55" r="3" fill="currentColor" />
    </g>
  </svg>
);

export const MachineTricepPushdown = MachineCablePushdown;

export const MachineTricepKickback = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 60 L60 60" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
    <g style={{ transformOrigin: '40px 60px', animation: 'curl-up 2s ease-in-out infinite alternate' }}>
      <line x1="40" y1="60" x2="60" y2="70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="70" r="5" fill="currentColor" />
    </g>
  </svg>
);

// --- ABDOMEN ---
export const MachinePlank = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M20 70 L20 80 M80 70 L80 80" stroke="#334155" strokeWidth="4" />
    <circle cx="20" cy="65" r="5" fill="#334155" />
  </svg>
);

export const MachineLegRaise = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M30 90 L70 90 M40 90 L40 10 M60 90 L60 10 M40 40 L30 40 M60 40 L70 40" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <g style={{ transformOrigin: '50px 55px', animation: 'leg-raise 2s ease-in-out infinite' }}>
      <line x1="50" y1="55" x2="50" y2="85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineHangingLegRaise = MachineLegRaise;

export const MachineCableCrunch = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M50 10 L50 40" stroke="#475569" strokeWidth="4" />
    <g style={{ transformOrigin: '50px 70px', animation: 'curl-up 2s ease-in-out infinite' }}>
       <circle cx="50" cy="70" r="10" fill="#334155" />
       <path d="M50 70 L50 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    </g>
  </svg>
);

export const MachineRussianTwist = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <path d="M20 80 L80 80" stroke="#475569" strokeWidth="4" />
    <g style={{ transformOrigin: '50px 70px', animation: 'lateral-raise-l 1.5s ease-in-out infinite alternate' }}>
       <line x1="50" y1="70" x2="50" y2="40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
       <circle cx="50" cy="35" r="8" fill="currentColor" />
    </g>
  </svg>
);

export const MachineGeneric = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
    <circle cx="50" cy="50" r="40" stroke="#475569" strokeWidth="4" fill="none" strokeDasharray="10 5" />
    <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
  </svg>
);