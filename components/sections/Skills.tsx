'use client'

import { motion } from 'framer-motion'
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar,
  Tooltip
} from 'recharts'

export function Skills({ dict }: { dict: any }) {
  // Custom tooltip for the radar chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-800 p-2 rounded shadow-xl">
          <p className="text-slate-200 font-bold">{label}</p>
          <p className="text-cyan-400 text-sm">
            Level: {payload[0].value}%
          </p>
        </div>
      )
    }
    return null
  }

  const devStack = dict.techStack.dev
  const dataStack = dict.techStack.data

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {dict.skills.title} <span className="text-gradient">{dict.skills.titleSet}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {dict.skills.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dict.skillsList}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis 
                  dataKey="name" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                />
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fill="#06b6d4"
                  fillOpacity={0.3}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Tech Stacks */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-dev flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-dev" />
                {dict.skills.devStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {devStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:border-dev/50 hover:text-dev transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 text-data flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-data" />
                {dict.skills.dataStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {dataStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:border-data/50 hover:text-data transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
