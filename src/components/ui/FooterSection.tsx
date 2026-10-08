'use client';

export default function FooterSection() {
  return (
    <div className="relative h-[80vh] w-full" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      {/* The footer is fixed to the bottom and revealed as the parent container scrolls up */}
      <footer className="fixed bottom-0 w-full h-[80vh] bg-black text-white flex flex-col justify-between py-12 px-6 md:px-24 z-0">
        
        {/* Top Header of Footer */}
        <div className="flex justify-between items-start pt-10">
          <div>
            <h4 className="text-[var(--accent-start)] text-xs tracking-[0.3em] uppercase font-bold mb-4">
              Start a Project
            </h4>
            <a 
              href="mailto:contact@sabilabs.co.ke" 
              className="text-3xl md:text-5xl font-light hover:text-[var(--accent-start)] transition-colors inline-block"
            >
              contact@sabilabs.co.ke
            </a>
          </div>
          <div className="text-right">
            <h4 className="text-slate-500 text-xs tracking-[0.3em] uppercase font-bold mb-4">
              Nairobi, Kenya
            </h4>
            <p className="text-sm font-light text-slate-300 leading-relaxed">
              +254 700 000 000<br/>
              East Africa & Beyond
            </p>
          </div>
        </div>

        {/* Navigation Links Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
          {['Services', 'Products', 'Projects', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm text-slate-400 hover:text-[var(--accent-start)] transition-colors uppercase tracking-wider font-bold"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Massive Logo Type at Bottom */}
        <div className="flex flex-col items-center">
          <div className="w-full border-t border-white/10 mb-8" />
          
          <h1 className="text-[15vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
            Sabi<span className="text-[var(--accent-start)]">Labs</span>
          </h1>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-4 text-xs tracking-widest text-slate-500 uppercase font-semibold gap-4 text-center">
            <span>© {new Date().getFullYear()} SABILABS. Strategy-Led Technology Consulting.</span>
            <span>Understanding Businesses. Engineering Solutions.</span>
          </div>
        </div>

        {/* Dynamic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent-start)] rounded-[100%] blur-[150px] opacity-10 pointer-events-none" />
      </footer>
    </div>
  );
}
