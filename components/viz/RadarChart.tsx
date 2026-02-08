'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { Skill } from '@/types'

interface SkillRadarChartProps {
  data: Skill[]
  className?: string
}

export function SkillRadarChart({ data, className }: SkillRadarChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid 
            stroke="rgba(148, 163, 184, 0.2)" 
            strokeDasharray="3 3"
          />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ 
              fill: '#94a3b8', 
              fontSize: 12,
              fontWeight: 500 
            }}
            tickLine={false}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fill: '#64748b', fontSize: 10 }}
            tickCount={5}
            axisLine={false}
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as Skill
                return (
                  <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-2 shadow-xl">
                    <p className="text-sm font-medium text-slate-200">{data.name}</p>
                    <p className="text-lg font-bold text-gradient">{data.value}%</p>
                  </div>
                )
              }
              return null
            }}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="url(#skillGradient)"
            fill="url(#skillGradientFill)"
            fillOpacity={0.4}
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="skillGradientFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
