import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Eye, 
  MousePointerClick, 
  Filter, 
  DollarSign, 
  Link2, 
  TrendingUp, 
  User,
  Activity,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';

export function WebsiteAuditHeroHud() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Define 8 nodes around the circle with their angle, icon, label, and detail
  const nodes = [
    {
      id: 0,
      angle: -90, // Top
      icon: AlertTriangle,
      label: "Critical Gaps",
      detail: "Alerts on layout breaks & errors",
      glowColor: "rgba(242, 78, 30, 0.4)"
    },
    {
      id: 1,
      angle: -45, // Top-Right
      icon: Eye,
      label: "Zero Attention",
      detail: "Heatmap dead zones & weak flow",
      glowColor: "rgba(242, 78, 30, 0.3)"
    },
    {
      id: 2,
      angle: 0, // Right
      icon: MousePointerClick,
      label: "Friction Clicks",
      detail: "Broken paths & inactive targets",
      glowColor: "rgba(242, 78, 30, 0.4)"
    },
    {
      id: 3,
      angle: 45, // Bottom-Right
      icon: Filter,
      label: "Funnel Leaks",
      detail: "High checkout & lead bounce rates",
      glowColor: "rgba(242, 78, 30, 0.3)"
    },
    {
      id: 4,
      angle: 90, // Bottom
      icon: DollarSign,
      label: "Lost Revenue",
      detail: "Unconverted warm buyer traffic",
      glowColor: "rgba(242, 78, 30, 0.4)"
    },
    {
      id: 5,
      angle: 135, // Bottom-Left
      icon: Link2,
      label: "Broken Journeys",
      detail: "Confusing navigation structures",
      glowColor: "rgba(242, 78, 30, 0.3)"
    },
    {
      id: 6,
      angle: 180, // Left
      icon: TrendingUp,
      label: "Stagnant Conversions",
      detail: "Flatlined click-through stats",
      glowColor: "rgba(242, 78, 30, 0.4)"
    },
    {
      id: 7,
      angle: 225, // Top-Left
      icon: User,
      label: "User Drop-offs",
      detail: "Impatience from clunky UX",
      glowColor: "rgba(242, 78, 30, 0.3)"
    }
  ];

  // Radar/Circular geometry variables
  const radius = 180; // Distance of nodes from center
  const centerSize = 500; // Total canvas coordinate grid size is 500x500
  const cx = 250;
  const cy = 250;

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto select-none flex items-center justify-center p-4">
      {/* Brand Rule: "Orange radial glow (#F24E1E to transparent) at corners or edges — never centred, never full bleed." */}
      {/* Top-Right Glow */}
      <div className="absolute -top-16 -right-16 w-[220px] h-[220px] rounded-full bg-[#F24E1E]/12 blur-[50px] pointer-events-none mix-blend-screen" />
      {/* Bottom-Left Glow */}
      <div className="absolute -bottom-16 -left-16 w-[220px] h-[220px] rounded-full bg-[#F24E1E]/8 blur-[50px] pointer-events-none mix-blend-screen" />

      {/* Grid background texture - Brand Guideline requirement */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(242, 78, 30, 0.12) 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }} 
      />

      {/* Corner UI Accent: Top-Left matrix */}
      <div className="absolute top-4 left-4 opacity-25 flex flex-col gap-1">
        <div className="flex gap-1">
          {[...Array(6)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-[#F24E1E]" />)}
        </div>
        <div className="flex gap-1">
          {[...Array(6)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-[#F24E1E]/50" />)}
        </div>
      </div>

      {/* Corner UI Accent: Bottom-Right matrix */}
      <div className="absolute bottom-4 right-4 opacity-20 flex flex-col gap-1">
        <div className="flex gap-1">
          {[...Array(6)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-[#A0A0A0]" />)}
        </div>
        <div className="flex gap-1">
          {[...Array(6)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-[#A0A0A0]/30" />)}
        </div>
      </div>

      {/* Corner UI Accent: Small Line Charts */}
      <div className="absolute left-4 bottom-4 opacity-30 border border-white/5 bg-[#0A0A0A]/60 p-2 rounded-lg flex items-center gap-2">
        <Activity className="w-3.5 h-3.5 text-[#F24E1E] animate-pulse" />
        <div className="flex gap-1 items-end h-5">
          <div className="w-0.5 bg-[#F24E1E]/30 h-1.5 rounded-sm" />
          <div className="w-0.5 bg-[#F24E1E]/50 h-3.5 rounded-sm" />
          <div className="w-0.5 bg-[#F24E1E]/80 h-2.5 rounded-sm animate-pulse" />
          <div className="w-0.5 bg-[#F24E1E] h-4 rounded-sm" />
        </div>
      </div>

      <div className="absolute right-4 top-4 opacity-30 border border-white/5 bg-[#0A0A0A]/60 p-2 rounded-lg flex items-center gap-2">
        <BarChart3 className="w-3.5 h-3.5 text-zinc-500" />
        <div className="flex gap-1 items-end h-5">
          <div className="w-0.5 bg-zinc-700 h-3 rounded-sm" />
          <div className="w-0.5 bg-zinc-500 h-1.5 rounded-sm" />
          <div className="w-0.5 bg-zinc-600 h-4 rounded-sm" />
          <div className="w-0.5 bg-zinc-400 h-2 rounded-sm" />
        </div>
      </div>

      {/* Main SVG Layout Canvas */}
      <svg 
        viewBox={`0 0 ${centerSize} ${centerSize}`} 
        className="w-full h-full relative z-10 overflow-visible"
      >
        {/* Radar concentric circular ticks and rings */}
        <g className="origin-center">
          {/* Static thin background ring */}
          <circle 
            cx={cx} 
            cy={cy} 
            r={radius} 
            className="fill-none stroke-zinc-800/30" 
            strokeWidth="1" 
            strokeDasharray="4 4"
          />

          {/* Outer ticking HUD ring (Clockwise rotation) */}
          <motion.circle 
            cx={cx} 
            cy={cy} 
            r="120" 
            className="fill-none stroke-[#F24E1E]/10" 
            strokeWidth="1"
            strokeDasharray="10 30 50 15"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          />

          {/* Inner fine tick ring (Counter-clockwise rotation) */}
          <motion.circle 
            cx={cx} 
            cy={cy} 
            r="95" 
            className="fill-none stroke-amber-500/15" 
            strokeWidth="1.5"
            strokeDasharray="2 6"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />

          {/* Core HUD glow bound */}
          <circle 
            cx={cx} 
            cy={cy} 
            r="75" 
            className="fill-none stroke-[#F24E1E]/5" 
            strokeWidth="6"
          />
          <circle 
            cx={cx} 
            cy={cy} 
            r="75" 
            className="fill-none stroke-[#F24E1E]/25" 
            strokeWidth="1"
          />
        </g>

        {/* Connecting Radial Lines & Pulse Indicators */}
        {nodes.map((node) => {
          const angleRad = (node.angle * Math.PI) / 180;
          const targetX = cx + radius * Math.cos(angleRad);
          const targetY = cy + radius * Math.sin(angleRad);

          // Get starting coordinates from the core circle border
          const startX = cx + 75 * Math.cos(angleRad);
          const startY = cy + 75 * Math.sin(angleRad);

          const isHovered = hoveredNode === node.id;

          return (
            <g key={node.id}>
              {/* Thin connecting radial path */}
              <line 
                x1={startX} 
                y1={startY} 
                x2={targetX} 
                y2={targetY} 
                className={`transition-colors duration-300 ${isHovered ? 'stroke-[#F24E1E]/50' : 'stroke-zinc-800/40'}`}
                strokeWidth={isHovered ? "1.2" : "0.8"}
              />

              {/* Laser Bullet Pulse traveling down the path */}
              <motion.circle
                r="2"
                className="fill-[#F24E1E]"
                style={{ filter: "drop-shadow(0 0 3px #F24E1E)" }}
                animate={{
                  cx: [startX, targetX],
                  cy: [startY, targetY],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 3 + (node.id % 3) * 0.5,
                  repeat: Infinity,
                  delay: node.id * 0.4,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}

        {/* Orbiting Interactive Node Elements */}
        {nodes.map((node) => {
          const angleRad = (node.angle * Math.PI) / 180;
          const nx = cx + radius * Math.cos(angleRad);
          const ny = cy + radius * Math.sin(angleRad);

          const IconComponent = node.icon;
          const isHovered = hoveredNode === node.id;

          return (
            <g 
              key={node.id}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Outer halo background on hover */}
              {isHovered && (
                <circle 
                  cx={nx} 
                  cy={ny} 
                  r="26" 
                  className="fill-[#F24E1E]/5 stroke-[#F24E1E]/15" 
                  strokeWidth="1"
                />
              )}

              {/* Node Main Outer Boundary Circle */}
              <circle 
                cx={nx} 
                cy={ny} 
                r="20" 
                className={`transition-all duration-300 ${isHovered ? 'fill-[#0A0A0A] stroke-[#F24E1E]' : 'fill-[#0A0A0A] stroke-zinc-800/60'}`}
                strokeWidth="1.2"
                style={{ 
                  filter: isHovered ? `drop-shadow(0 0 6px ${node.glowColor})` : 'none'
                }}
              />

              {/* React Component inside SVG using foreignObject */}
              <foreignObject
                x={nx - 9}
                y={ny - 9}
                width="18"
                height="18"
                className="pointer-events-none"
              >
                <div className={`w-full h-full flex items-center justify-center transition-colors duration-300 ${isHovered ? 'text-[#F24E1E]' : 'text-zinc-500'}`}>
                  <IconComponent className="w-3.5 h-3.5" strokeWidth={1.5} />
                </div>
              </foreignObject>

              {/* Small outer dot pointer anchor */}
              <circle 
                cx={cx + (radius - 20) * Math.cos(angleRad)} 
                cy={cy + (radius - 20) * Math.sin(angleRad)} 
                r="1.5" 
                className={`transition-colors duration-300 ${isHovered ? 'fill-[#F24E1E]' : 'fill-zinc-700'}`}
              />
            </g>
          );
        })}
      </svg>

      {/* Core Center Web Browser Container with the Glowing Orange Leak Crack */}
      <div 
        className="absolute w-[130px] h-[105px] bg-[#0A0A0A]/95 border border-white/10 rounded-lg shadow-[0_0_30px_rgba(242,78,30,0.12)] flex flex-col overflow-hidden group transition-all duration-500 hover:border-[#F24E1E]/20"
        style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
      >
        {/* Browser Top Title Bar */}
        <div className="h-6 border-b border-white/5 bg-[#0A0A0A] px-2 flex items-center justify-between shrink-0">
          {/* Dots */}
          <div className="flex gap-1 items-center">
            <span className="w-1.2 h-1.2 rounded-full bg-[#F24E1E]/95 shadow-[0_0_2px_#F24E1E]" />
            <span className="w-1.2 h-1.2 rounded-full bg-amber-500/70" />
            <span className="w-1.2 h-1.2 rounded-full bg-zinc-700" />
          </div>
          {/* Address Line */}
          <div className="text-[7.5px] font-mono text-zinc-600 scale-90 origin-right tracking-tight">
            intentstudios.in
          </div>
        </div>

        {/* Browser Content Canvas Area */}
        <div className="p-2.5 flex-1 flex flex-col justify-between relative overflow-hidden bg-[#111111]/85">
          {/* Mock layout placeholder lines */}
          <div className="space-y-1.5">
            <div className="w-[60%] h-1 bg-zinc-800 rounded-sm" />
            <div className="w-[85%] h-1 bg-zinc-900/60 rounded-sm" />
            <div className="w-[45%] h-1 bg-zinc-900/60 rounded-sm" />
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-8 h-2.5 bg-[#F24E1E]/15 rounded-sm border border-[#F24E1E]/10" />
            <div className="w-6 h-2.5 bg-zinc-900 rounded-sm" />
          </div>

          {/* Core Crack Glow Layer: Behind the crack vector */}
          <div className="absolute inset-0 bg-radial-gradient from-amber-600/5 to-transparent blur-[5px] pointer-events-none" />

          {/* The Glowing Neon Orange Leak Crack (reproducing reference image) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 130 80"
            preserveAspectRatio="none"
          >
            {/* Soft background glow trace of crack */}
            <path 
              d="M 65 0 L 61 15 L 72 32 L 58 48 L 68 64 L 64 80"
              fill="none"
              stroke="#F24E1E"
              strokeWidth="4"
              className="opacity-35 blur-[3px]"
            />
            {/* Sharp neon core of crack */}
            <motion.path 
              d="M 65 0 L 61 15 L 72 32 L 58 48 L 68 64 L 64 80"
              fill="none"
              stroke="#FF8354"
              strokeWidth="1.2"
              filter="drop-shadow(0 0 4px #F24E1E)"
              animate={{
                opacity: [0.8, 1, 0.7, 1, 0.9],
                strokeWidth: [1, 1.8, 1, 1.5, 1.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      </div>

      {/* Floating Insight Label Panel (Bottom center of HUD context overlay) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 min-w-[210px] bg-[#0A0A0A]/95 border border-white/5 p-2.5 rounded-xl shadow-xl transition-all duration-300 pointer-events-none backdrop-blur-md">
        {hoveredNode !== null ? (
          <div className="space-y-0.5 text-center">
            {/* Soft peach brand color accent for tags on 10% opacity background */}
            <span className="inline-block text-[9px] text-[#FFD1C2] bg-[#F24E1E]/10 px-2 py-0.5 rounded font-mono tracking-widest font-semibold uppercase">
              Leak Detected
            </span>
            <h4 className="text-xs font-semibold text-[#F5F5F5] tracking-tight">
              {nodes[hoveredNode].label}
            </h4>
            <p className="text-[10px] text-[#A0A0A0] font-light font-sans">
              {nodes[hoveredNode].detail}
            </p>
          </div>
        ) : (
          <div className="space-y-0.5 text-center">
            <span className="inline-block text-[9px] text-zinc-500 font-mono tracking-widest uppercase animate-pulse">
              Interactive Radar
            </span>
            <h4 className="text-xs font-medium text-zinc-300">
              Inspect Critical Deficits
            </h4>
            <p className="text-[10px] text-zinc-500 font-light font-sans">
              Hover over nodes to explore leak points
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
