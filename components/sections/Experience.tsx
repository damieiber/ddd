'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Briefcase, Calendar } from 'lucide-react'

export function Experience({ dict }: { dict: any }) {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {dict.experience.title} <span className="text-gradient">{dict.experience.titleProfessional}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {dict.experience.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-slate-800 md:left-1/2 md:-ml-[1px]" />

          <div className="space-y-12">
            {dict.experienceList.map((exp: any, index: number) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 z-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className={`w-3 h-3 rounded-full ${
                    exp.type === 'dev' ? 'bg-dev' : 
                    exp.type === 'data' ? 'bg-data' : 
                    'bg-white'
                  }`} />
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <Card 
                    className="p-6 relative group hover:-translate-y-1 transition-transform duration-300"
                    glow={exp.type}
                  >
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-slate-50 group-hover:text-gradient transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {/* Currently using generic stack, could be specific if added to data */}
                       <span className="text-xs px-2 py-1 rounded bg-slate-800/50 text-slate-500 border border-slate-800">
                        {exp.type === 'dev' ? 'Development' : exp.type === 'data' ? 'Analytics' : 'Hybrid'}
                       </span>
                    </div>
                  </Card>
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
