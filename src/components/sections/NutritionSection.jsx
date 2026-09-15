import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NUTRITION } from '../../data/content';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

export default function NutritionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="coach" className="section-pad relative overflow-hidden"
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
              className="text-lg text-[#3B7BF6] font-bold uppercase tracking-widest"
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
              balanced <span className="gradient-text meal-text italic"> meals</span>
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
          </div>

          {/* ── Right: Food image + Calories card ── */}
          <div className="relative flex justify-center items-center min-h-[380px]">
            {/* Food bowl circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full h-full md:w-120 md:h-100 rounded-full float-anim"
            >
              {/* Food bowl illustration */}
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-white/50 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthy bowl of food" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Calories floating card */}
            <GlassCard
              delay={0.5}
              hover={false}
              className="dish-card absolute top-1 right-0 md:right-[-1rem] w-52 z-10"
            >
              <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider">
                Calories
              </p>
              <p className="text-3xl font-black text-[#0D0D12] leading-none">
                {NUTRITION.calories.value}
                <span className="cal-unit text-sm font-normal text-[#3B7BF6]">
                  {NUTRITION.calories.unit}
                </span>
              </p>
              <p className="text-[10px] text-[#6B7280] cal-label ">{NUTRITION.calories.label}</p>

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
              className="mini-badge absolute bottom-4 left-0 md:left-[-1rem] glass backdrop-blur-lg rounded-2xl flex items-center gap-3"
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
