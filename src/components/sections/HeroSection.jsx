import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Inline SVG social icons (lucide-react v4+ removed social brands)
const SocialIcons = {
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Twitter: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
};
import { HERO } from '../../data/content';
import Button from '../ui/Button';
import StatCounter from '../ui/StatCounter';
import GlassCard from '../ui/GlassCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
      style={{ background: 'linear-gradient(150deg, #F0EFEB 55%, #E8EEF8 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue blob behind model */}
        <div
          className="absolute right-0 top-0 w-[55%] h-full rounded-bl-[80px]"
          style={{
            background:
              'radial-gradient(ellipse at 70% 40%, rgba(59,123,246,0.12) 0%, rgba(59,123,246,0.04) 60%, transparent 100%)',
          }}
        />
        {/* Large faint circle */}
        <div
          className="absolute right-[5%] top-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59,123,246,0.08) 0%, transparent 70%)',
          }}
        />

      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left column: Text content ── */}
          <div className="flex flex-col gap-6 max-w-xl">
            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.05] tracking-tight text-[#0D0D12]"
            >
              Perfect
              <br />
              Fitness Path
              <br />
              With{' '}
              <span className="gradient-text italic">Y16</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p {...fadeUp(0.3)} className="text-[#6B7280] text-base leading-relaxed max-w-md">
              {HERO.subtext}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg" icon={<ArrowRight size={16} />} href="#events">
                Get Started
              </Button>
              <Button variant="outline" size="lg" href="#about">
                Join Community
              </Button>
            </motion.div>

            {/* Social icons */}
            <motion.div {...fadeUp(0.45)} className="flex items-center gap-3 -mt-1">
              <span className="text-xs text-[#6B7280] font-medium">Follow us</span>
              {[SocialIcons.Instagram, SocialIcons.Twitter, SocialIcons.Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-[#0D0D12]/60 hover:text-[#3B7BF6] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-start gap-10 pt-4 border-t border-[#0D0D12]/8"
            >
              {HERO.stats.map((s) => (
                <StatCounter
                  key={s.value}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </motion.div>
          </div>

          {/* ── Right column: Model + floating cards ── */}
          <div className="relative flex justify-center lg:justify-end items-end min-h-[520px] md:min-h-[600px]">

            {/* Model image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="float-anim relative z-10 h-[500px] md:h-[560px] flex items-end justify-center"
            >
              <img
                src="/landing-model.png"
                alt="Y16 Fitness athlete"
                className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(59,123,246,0.2))' }}
              />
            </motion.div>

            {/* Floating card — top right: Activity tracker */}
            <GlassCard
              delay={0.6}
              hover={false}
              className="absolute top-[8%] right-0 lg:right-[-1rem] xl:right-0 p-4 w-52 z-20"
            >
              <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider mb-2">
                Weekly Activity
              </p>
              <div className="flex items-end gap-1 h-12">
                {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.06, ease: 'easeOut' }}
                    style={{
                      originY: 1,
                      height: `${h}%`,
                      background: i === 5 ? 'linear-gradient(180deg,#3B7BF6,#6FA3FF)' : 'rgba(59,123,246,0.2)',
                      borderRadius: '2px',
                      flexShrink: 0,
                      flex: 1,
                    }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-[#3B7BF6] font-semibold mt-2">+12% this week ↑</p>
            </GlassCard>

            {/* Floating card — bottom left: Pulse/Heart rate */}
            <GlassCard
              delay={0.7}
              hover={false}
              className="absolute bottom-[12%] left-0 lg:left-[-1rem] xl:left-0 p-4 w-44 z-20"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">❤️</span>
                <span className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider">
                  Heart Rate
                </span>
              </div>
              <p className="text-2xl font-black text-[#0D0D12] leading-none">
                128 <span className="text-sm font-normal text-[#6B7280]">bpm</span>
              </p>
              <div className="mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-500 font-medium">Optimal Zone</span>
              </div>
            </GlassCard>

            {/* Floating card — bottom right: Calories */}
            <GlassCard
              delay={0.8}
              hover={false}
              className="absolute bottom-[4%] right-2 p-3 w-36 z-20"
            >
              <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider">
                Calories
              </p>
              <p className="text-xl font-black text-[#3B7BF6] mt-1">
                486 <span className="text-xs font-normal text-[#6B7280]">kcal</span>
              </p>
              <div className="mt-2 w-full h-1.5 bg-[#3B7BF6]/15 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#3B7BF6]"
                  initial={{ width: 0 }}
                  animate={{ width: '62%' }}
                  transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
                />
              </div>
              <p className="text-[10px] text-[#6B7280] mt-1">62% of goal</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
