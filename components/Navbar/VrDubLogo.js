export default function VrDubLogo({ className }) {
  return (
    <svg 
      viewBox="0 0 125 70" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Monitor & Mouse Group */}
      <g transform="translate(0, 8)" fill="currentColor">
        {/* Monitor Base */}
        <rect x="5" y="45" width="14" height="2" rx="1" />
        {/* Monitor Arm */}
        <path d="M12 45 C18 45, 18 30, 15 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Monitor Screen */}
        <polygon points="17,10 11,40 14,40 20,10" fill="currentColor"/>
        
        {/* Mouse */}
        <path d="M26 47 C26 42, 34 42, 34 47 Z" fill="currentColor"/>
      </g>

      {/* Vertical Divider */}
      <rect x="42" y="15" width="2" height="42" rx="1" fill="currentColor" />

      {/* Text Group */}
      <g transform="translate(52, 0)" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif">
        <text x="0" y="34" fontSize="24" fontWeight="900" letterSpacing="-0.5">Vr</text>
        <text x="0" y="56" fontSize="24" fontWeight="900" letterSpacing="-0.5">Dub</text>
        <text x="0" y="66" fontSize="5" fontWeight="600" letterSpacing="0.2">always ready for this</text>
      </g>
    </svg>
  );
}
