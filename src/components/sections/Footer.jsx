import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Inline SVG brand icons (lucide-react v4+ removed social brands)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FOOTER_LINKS = {
  Company: ['About Us', 'Our Coaches', 'Careers', 'Press'],
  Programs: ['Yoga & Stretch', 'Strength Training', 'Nutrition Plans', 'Live Classes'],
  Support: ['FAQ', 'Contact', 'Privacy Policy', 'Terms of Service'],
};

const SOCIALS = [
  { icon: InstagramIcon, href: '#' },
  { icon: TwitterIcon, href: '#' },
  { icon: FacebookIcon, href: '#' },
  { icon: YoutubeIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D12] text-white/80 overflow-hidden">
      {/* Top CTA band */}
      <div className="border-b border-white/8">
        <div className="container-custom flex flex-col md:flex-row md:items-center justify-between gap-6" style={{paddingBlock: '24px' }}>
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Ready to transform your fitness?
            </h3>
            <p className="text-white/50 text-sm">
              Join 500K+ people already on their Y16 journey.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-custom" style={{paddingBlock: '20px'}}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 group self-start">
              <div className="w-8 h-8 bg-[#3B7BF6] rounded-lg flex items-center justify-center overflow-hidden">
                  <img src="/Y16fitness-logo.png" alt="logo" style={{objectFit: 'cover', width: 'full'}}/>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Y16 <span className="text-[#3B7BF6] italic">fitness</span>
              </span>
            </a>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Your personal fitness brand tailored training, balanced nutrition, and
              community driven wellness for every body and every goal.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#3B7BF6] hover:bg-[#3B7BF6]/10 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Oversized brand wordmark ── */}
      <div className="relative overflow-hidden border-t border-white/6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="container-custom pt-6 pb-0"
        >
      {/* Giant Footer Logo */}
      <div className=" w-full overflow-hidden translate-y-1/4 select-none pointer-events-none flex items-end justify-center">
         <h1 className="text-[15vw] font-black tracking-tight text-white/70 leading-none italic m-0 p-0 flex items-end"
           style={{fontFamily: 'Limelight, sans-serif'}}
          >
            Y16 Fitness
         </h1>
      </div>
        </motion.div>
      </div>
    </footer>
  );
}