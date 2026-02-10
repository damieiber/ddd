'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Code2, Database, Brain } from 'lucide-react'
import Image from 'next/image'

export function About({ dict }: { dict: any }) {
  const highlights = [
    {
      icon: Code2,
      ...dict.highlights.dev,
      color: 'dev',
    },
    {
      icon: Database,
      ...dict.highlights.data,
      color: 'data',
    },
    {
      icon: Brain,
      ...dict.highlights.ai,
      color: 'ai',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-dev via-data to-ai p-1 animate-glow">
                <div className="relative w-full h-full rounded-2xl bg-card overflow-hidden">
                  <Image
                    src="/Face.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    unoptimized
                  />
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
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -left-6 px-3 py-1.5 rounded-full bg-data/20 border border-data/30 text-data text-sm font-medium"
              >
                Data
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -right-2 px-3 py-1.5 rounded-full bg-ai/20 border border-ai/30 text-ai text-sm font-medium"
              >
                AI
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
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {dict.description1Start}{' '}
              <span className="text-dev font-medium">{dict.description1Code}</span>
              {', '}
              <span className="text-data font-medium">{dict.description1Data}{' '}</span>
              {dict.description1End}
            </p>
            <p className="text-muted-foreground mb-8">
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
                      'text-ai'
                    }`} />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {item.title}
                    </div>
                    <p className="text-xs text-muted-foreground">
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
