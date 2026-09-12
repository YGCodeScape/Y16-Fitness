import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { EVENTS } from '../../data/content';
import MarqueeBanner from '../ui/MarqueeBanner';
import Button from '../ui/Button';

const MARQUEE_ITEMS = ['exhibition', 'wellness', 'fitness', 'balance', 'strength', 'mindful'];

export default function EventsSection() {
  return (
    <section id="events" className="relative overflow-hidden">
      {/* Top marquee banner */}
      <MarqueeBanner
        items={MARQUEE_ITEMS}
        speed={18}
        className="py-5 border-y border-[#0D0D12]/8"
      />

      <div className="section-pad bg-[#F0EFEB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ── Left: Headline ── */}
            <div className="sticky top-28">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs text-[#3B7BF6] font-bold uppercase tracking-widest mb-4"
              >
                Upcoming Events
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black leading-tight text-[#0D0D12] mb-6"
              >
                Join Our Next{' '}
                <span className="gradient-text">Experience</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#6B7280] leading-relaxed text-sm max-w-sm"
              >
                Connect with like-minded fitness enthusiasts, world-class coaches, and leading
                wellness brands at our curated events around the globe.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-8 mt-8"
              >
                {[
                  { v: '4+', l: 'Events this season' },
                  { v: '12K', l: 'Past attendees' },
                  { v: '98%', l: 'Satisfaction rate' },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-black text-[#0D0D12]">{s.v}</p>
                    <p className="text-[10px] text-[#6B7280] mt-0.5">{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Event list ── */}
            <div className="flex flex-col divide-y divide-[#0D0D12]/8">
              {EVENTS.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="group py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/40 transition-colors duration-200 px-4 rounded-2xl -mx-4"
                >
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span className="text-xs font-bold text-[#3B7BF6]/60 mt-1 w-6 flex-shrink-0">
                      {event.id}
                    </span>

                    {/* Text */}
                    <div>
                      <h3 className="text-xl font-bold text-[#0D0D12] group-hover:text-[#3B7BF6] transition-colors duration-200 leading-tight">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                          <Calendar size={11} />
                          {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                          <MapPin size={11} />
                          {event.venue}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={13} />}
                    className="flex-shrink-0 group-hover:bg-[#0D0D12] group-hover:text-white group-hover:border-[#0D0D12] transition-all duration-200"
                  >
                    Reserve Your Spot
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
