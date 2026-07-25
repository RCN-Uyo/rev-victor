export function RvaLogo({ className = "", width = 80, height = 40 }: { className?: string; width?: number | string; height?: number | string }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9F1D8" />
          <stop offset="50%" stopColor="#CEAA54" />
          <stop offset="100%" stopColor="#8A6728" />
        </linearGradient>
      </defs>
      
      {/* Main RVA text - inherits the majestic font from the app */}
      <text 
        x="50%" 
        y="60%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill="url(#logo-gold)" 
        fontSize="34" 
        fontWeight="800" 
        letterSpacing="2"
        style={{ fontFamily: 'var(--font-heading), serif' }}
      >
        RVA
      </text>
      
      {/* Accent elements to make it an actual logo rather than just text */}
      <circle cx="90" cy="12" r="3" fill="#CEAA54" />
      <path d="M 10 35 L 90 35" stroke="url(#logo-gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
