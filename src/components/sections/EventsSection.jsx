import React from 'react';
import { motion } from 'framer-motion';
import { EVENTS } from '../../data/content';

const FadeInWhenVisible = ({ children, delay = 0, direction = 'up' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 50 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function EventsSection() {
return (
    <section id="events" className="event-sec relative overflow-hidden bg-[#e4e4e4]">
      
      {/* Marquee Banner */}
      <div className="marquee-b w-full overflow-hidden border-y border-gray-300 ">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap items-center font-black text-5xl sm:text-7xl text-slate-800/80 tracking-tighter uppercase"
        >
          {/* Repeating content for seamless scrolling */}
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="px-8">exhibition&nbsp;&nbsp;•</span>
              <svg width="40" height="40" viewBox="0 0 100 100" className="mx-4 text-slate-800 opacity-50" style={{marginInline: '16px'}}>
                 {[...Array(12)].map((_, j) => (
                   <line key={j} x1="50" y1="50" x2="50" y2="0" stroke="currentColor" strokeWidth="4" transform={`rotate(${j * 30} 50 50)`} />
                 ))}
              </svg>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="events-sec max-w-5xl relative z-10">
        <div className="space-y-4">
          {EVENTS.map((event, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1} direction="up">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-300 group hover:border-slate-800 transition-colors"
                style={{paddingBlock: '14px'}} >
                <div className="flex items-start sm:items-center gap-6 sm:gap-12 sm:mb-0 w-full sm:w-auto" style={{marginBottom: '8px'}}>
                  <span className="text-md font-bold text-gray-400 group-hover:text-slate-900 transition-colors w-6">
                    {event.id}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight w-full sm:w-64">
                    {event.title}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 w-full sm:w-auto justify-between sm:justify-end ml-12 sm:ml-0">
                  <div className="text-xs text-gray-500 font-medium w-40">
                    <p>{event.type}</p>
                    <p>{event.date}</p>
                    <p>{event.venue}</p>
                  </div>
                  <button className=" rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all whitespace-nowrap"
                     style={{padding: '6px 8px'}}
                   >
                    Reserve Your Spot
                  </button>
                </div>

              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}