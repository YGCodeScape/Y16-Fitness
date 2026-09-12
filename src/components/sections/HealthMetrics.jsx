import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HEALTH_METRICS } from '../../data/content';
import GlassCard from '../ui/GlassCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HealthMetrics() {
  const [active, setActive] = useState(1);

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[#F0EFEB]">

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Health category cards grid ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#3B7BF6] font-bold uppercase tracking-widest mb-4"
            >
              {HEALTH_METRICS.badge}
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {HEALTH_METRICS.categories.map((cat) => (
                <motion.div key={cat.id} variants={cardVariants}>
                  <GlassCard
                    hover
                    delay={0}
                    onClick={() => setActive(cat.id)}
                    className={`p-5 flex flex-col gap-3 border-2 transition-colors duration-200 ${
                      active === cat.id
                        ? 'border-[#3B7BF6]/60 shadow-[0_0_24px_rgba(59,123,246,0.18)]'
                        : 'border-transparent'
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: cat.bg }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0D0D12]">{cat.label}</p>
                      {active === cat.id && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[10px] text-[#3B7BF6] font-medium"
                        >
                          Selected ✓
                        </motion.span>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Text content ── */}
          <div className="flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black leading-tight text-[#0D0D12]"
            >
              {HEALTH_METRICS.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#6B7280] leading-relaxed"
            >
              {HEALTH_METRICS.subtext}
            </motion.p>

            {/* Active category detail */}
            {HEALTH_METRICS.categories.find((c) => c.id === active) && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-5 flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: HEALTH_METRICS.categories.find((c) => c.id === active)?.bg,
                  }}
                >
                  {HEALTH_METRICS.categories.find((c) => c.id === active)?.icon}
                </div>
                <div>
                  <p className="font-bold text-[#0D0D12]">
                    {HEALTH_METRICS.categories.find((c) => c.id === active)?.label}
                  </p>
                  <p className="text-sm text-[#6B7280] mt-1">
                    Personalized plan ready for you based on your health focus.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[#3B7BF6] text-sm font-semibold mt-2 hover:gap-2 transition-all"
                  >
                    View Plan <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            )}

            {/* Doctor badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 self-start glass rounded-full px-4 py-2"
            >
              <span className="text-xl">👨‍⚕️</span>
              <div>
                <p className="text-xs font-bold text-[#0D0D12]">Doctor Recommended</p>
                <p className="text-[10px] text-[#6B7280]">All plans clinically reviewed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
