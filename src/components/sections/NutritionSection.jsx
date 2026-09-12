import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NUTRITION } from '../../data/content';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

export default function NutritionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="coach"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EFF2F8 0%, #F0EFEB 60%)' }}
    >

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#3B7BF6] font-bold uppercase tracking-widest"
            >
              {NUTRITION.badge}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-5xl font-black leading-tight text-[#0D0D12]"
            >
              Fit your body with{' '}
              <span className="gradient-text">balanced</span> meals
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#6B7280] leading-relaxed text-sm"
            >
              {NUTRITION.subtext}
            </motion.p>

            {/* Diet type tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {NUTRITION.tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-[#0D0D12] text-white shadow-md'
                      : 'glass text-[#6B7280] hover:text-[#0D0D12]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Plan CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 items-center"
            >
              <Button variant="primary" size="md" icon={<ArrowRight size={15} />}>
                Start Meal Plan
              </Button>
              <Button variant="ghost" size="md">
                Explore Recipes
              </Button>
            </motion.div>

            {/* Macro breakdown */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 flex-wrap"
            >
              {NUTRITION.calories.breakdown.map((m) => (
                <div key={m.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: m.color }}
                  />
                  <span className="text-xs text-[#6B7280]">
                    {m.name} <strong className="text-[#0D0D12]">{m.pct}%</strong>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Food image + Calories card ── */}
          <div className="relative flex justify-center items-center min-h-[380px]">
            {/* Food bowl circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden float-anim"
              style={{
                background: 'linear-gradient(135deg, #e8f4f8, #c8e6e0)',
                boxShadow: '0 30px 80px rgba(59,123,246,0.15)',
              }}
            >
              {/* Fallback gradient bowl illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-2">🥗</div>
                  <p className="text-[#6B7280] text-sm font-medium">Balanced Bowl</p>
                </div>
              </div>
            </motion.div>

            {/* Calories floating card */}
            <GlassCard
              delay={0.5}
              hover={false}
              className="absolute top-4 right-0 md:right-[-1rem] p-5 w-52 z-10"
            >
              <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider mb-1">
                Calories
              </p>
              <p className="text-3xl font-black text-[#0D0D12] leading-none">
                {NUTRITION.calories.value}
                <span className="text-sm font-normal text-[#3B7BF6] ml-1">
                  {NUTRITION.calories.unit}
                </span>
              </p>
              <p className="text-[10px] text-[#6B7280] mt-1 mb-3">{NUTRITION.calories.label}</p>

              {/* Macro bars */}
              <div className="flex flex-col gap-2">
                {NUTRITION.calories.breakdown.map((m) => (
                  <div key={m.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[10px] text-[#6B7280]">{m.name}</span>
                      <span className="text-[10px] font-semibold text-[#0D0D12]">{m.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-black/8 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: m.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Mini badge bottom-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-4 left-0 md:left-[-1rem] glass rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <span className="text-2xl">🌿</span>
              <div>
                <p className="text-xs font-bold text-[#0D0D12]">Organic Certified</p>
                <p className="text-[10px] text-[#6B7280]">100% natural ingredients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
