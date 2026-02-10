'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
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
          <div className="h-px bg-border flex-grow" />
        </div>
        <p className="text-muted-foreground max-w-2xl">
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
              className="h-full overflow-hidden flex flex-col group"
              glow={project.tags.includes('ai') ? 'ai' : project.tags.includes('data') ? 'data' : 'dev'}
            >
              {/* Background Image or Gradient */}
              {project.image ? (
                <>
                  <div className="absolute inset-0 z-0">
                    {/* Fallback gradient while image loads or if broken */}
                    <div className="absolute inset-0 bg-slate-900" />
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30 group-hover:from-slate-950/95 group-hover:via-slate-950/80 group-hover:to-slate-950/50 transition-all duration-500" />
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 z-0" />
              )}
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge 
                        key={tag}
                        variant={tag === 'data' ? 'data' : tag === 'dev' ? 'dev' : tag === 'ai' ? 'ai' : 'default'}
                        className="uppercase text-[10px] tracking-wider backdrop-blur-md"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-800/50" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-slate-800/50" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs rounded-md bg-secondary/50 border border-border/50 text-foreground backdrop-blur-sm"
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
