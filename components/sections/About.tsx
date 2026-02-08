'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Code2, Database, Sparkles } from 'lucide-react'

export function About({ dict }: { dict: any }) {
  const highlights = [
    {
      icon: Code2,
      ...dict.highlights.years,
      color: 'dev',
    },
    {
      icon: Database,
      ...dict.highlights.data,
      color: 'data',
    },
    {
      icon: Sparkles,
      ...dict.highlights.projects,
      color: 'hybrid',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {dict.title} <span className="text-gradient">{dict.titleMe}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-dev to-data p-1 animate-glow">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-dev/20 border border-dev/30 text-dev text-sm font-medium"
              >
                Dev
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-data/20 border border-data/30 text-data text-sm font-medium"
              >
                Data
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              {dict.description1Start}{' '}
              <span className="text-dev font-medium">{dict.description1Code}</span>{' '}
              {dict.description1Between}{' '}
              <span className="text-data font-medium">{dict.description1Data}</span>
              {dict.description1End}
            </p>
            <p className="text-slate-400 mb-8">
              {dict.description2}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center" glow={item.color as 'dev' | 'data' | 'none'}>
                    <item.icon className={`h-6 w-6 mx-auto mb-2 ${
                      item.color === 'dev' ? 'text-dev' : 
                      item.color === 'data' ? 'text-data' : 
                      'text-gradient'
                    }`} />
                    <div className="text-2xl font-bold text-slate-50 mb-1">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-400">
                      {item.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
