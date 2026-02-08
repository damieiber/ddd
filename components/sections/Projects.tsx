'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Code2, Database, Layout } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Projects({ dict }: { dict: any }) {
  // Projects data now comes from dictionary for localization

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {dict.projects.title} <span className="text-gradient">{dict.projects.titleHighlight}</span>
          </h2>
          <div className="h-px bg-slate-800 flex-grow" />
        </div>
        <p className="text-slate-400 max-w-2xl">
          {dict.projects.description}
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {dict.projectsList.map((project: any, index: number) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative ${
              project.size === 'lg' ? 'md:col-span-2' : 
              project.size === 'md' ? 'md:col-span-1' : ''
            }`}
          >
            <Card 
              className="h-full overflow-hidden flex flex-col"
              glow={project.tags.includes('hybrid') ? 'hybrid' : project.tags.includes('data') ? 'data' : 'dev'}
            >
              {/* Background with noise/gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 z-0" />
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge 
                        key={tag}
                        variant={tag === 'data' ? 'data' : tag === 'dev' ? 'dev' : tag === 'hybrid' ? 'hybrid' : 'default'}
                        className="uppercase text-[10px] tracking-wider"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Data Metric */}
                  <div className="mb-6 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                    <p className="text-xs text-slate-500 uppercase font-mono mb-1">
                      Key Metric
                    </p>
                    <p className="text-lg font-bold text-gradient">
                      {project.dataMetric}
                    </p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
