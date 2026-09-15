import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiWhatsappFill } from "@remixicon/react";
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass backdrop-blur-lg shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
            <img src="/Y16fitness-logo.png" alt="logo" style={{objectFit: 'cover', width: 'full'}}/>
          </div>
          <span className="wordmark text-3xl font-bold tracking-tight text-[#0D0D12]">
            Y16 <span className="text-[#3B7BF6] italic">Fitness</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#0D0D12]/70 hover:text-[#3B7BF6] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="lg" href="#events">
            <RiWhatsappFill size={22} color="#3B7BF6"/>
            Contact Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#0D0D12]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass backdrop-blur-lg border-t border-white/20 overflow-hidden"
          >
            <nav className="container-custom flex flex-col gap-4"
              style={{ padding: "20px 30px", }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-bold text-[#0D0D12]/80 hover:text-[#3B7BF6] border-b border-black/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" size="sm" href="#events" className="self-start">
                 <RiWhatsappFill size={19} color="#F0EFEB"/> 
                 Contact Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
