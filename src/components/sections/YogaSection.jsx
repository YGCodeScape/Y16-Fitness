import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { YOGA_STYLES } from '../../data/content';
import Button from '../ui/Button';

// Gradient palettes for each yoga card
const CARD_GRADIENTS = [
  'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
  'linear-gradient(145deg, #0f2027 0%, #2c5364 100%)',
  'linear-gradient(145deg, #0d1b2a 0%, #1b4332 100%)',
  'linear-gradient(145deg, #2d1b4e 0%, #1a1a2e 100%)',
  'linear-gradient(145deg, #1c2833 0%, #2e4057 100%)',
  'linear-gradient(145deg, #1a1a2e 0%, #4a1942 100%)',
];

const CARD_ACCENTS = ['#3B7BF6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#EC4899'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function YogaSection() {
  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-[#F0EFEB]">
      <div className="container-custom">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black leading-tight text-[#0D0D12]"
          >
            Find Your Perfect{' '}
            <span className="gradient-text">Yoga</span> Style
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#6B7280] text-sm leading-relaxed max-w-sm"
          >
            Explore different yoga styles tailored to your body's needs and fitness level.
            From gentle stretches to dynamic flows — find what moves you.
          </motion.p>
        </div>

        {/* Yoga cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {YOGA_STYLES.map((style, idx) => (
            <motion.div key={style.id} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  background: CARD_GRADIENTS[idx],
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                  minHeight: '200px',
                }}
              >
                {/* "YOGA" watermark text */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  style={{ zIndex: 1 }}
                >
                  <span
                    className="font-black tracking-widest text-5xl md:text-6xl"
                    style={{
                      color: 'rgba(255,255,255,0.07)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    YOGA
                  </span>
                </div>

                {/* Accent gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 80%, ${CARD_ACCENTS[idx]}22, transparent 70%)`,
                    zIndex: 1,
                  }}
                />

                {/* Accent dot top-right */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{ background: CARD_ACCENTS[idx], zIndex: 2 }}
                />

                {/* Tag pill */}
                <div
                  className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{
                    background: `${CARD_ACCENTS[idx]}22`,
                    border: `1px solid ${CARD_ACCENTS[idx]}44`,
                    color: CARD_ACCENTS[idx],
                    zIndex: 2,
                  }}
                >
                  {style.tag}
                </div>

                {/* Content bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
                    zIndex: 2,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-base">{style.title}</p>
                      <p className="text-white/50 text-xs mt-0.5">Explore program →</p>
                    </div>
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: CARD_ACCENTS[idx] }}
                      whileHover={{ rotate: 45, scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={14} color="white" />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative emoji icon center */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ zIndex: 1 }}
                >
                  <div
                    className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 mt-4"
                  >
                    {['🧘', '🤸', '⚖️', '🦵', '🏃', '💪'][idx]}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Check all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Button variant="primary" icon={<ArrowRight size={16} />}>
            Check All Styles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
