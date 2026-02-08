'use client'

import { motion } from 'framer-motion'
import { ArrowDown, FileDown, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero({ dict }: { dict: any }) {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-dev/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-data/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-data animate-pulse" />
          <span className="text-sm text-slate-400">{dict.badge}</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="block text-slate-50">{dict.title1}</span>
          <span className="block text-gradient mt-2">{dict.title2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          {dict.subtitle1} <br/>
          {dict.subtitle2}{' '} 
          <span className="text-dev">{dict.subtitleEscalan}</span> y{' '}
          <span className="text-data">{dict.subtitleGeneranValor}</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="group"
            aria-label="Ver proyectos"
          >
            <FolderOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            {dict.ctaProject}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            asChild
            aria-label="Descargar currículum"
          >
            <a href="/cv.pdf" download>
              <FileDown className="mr-2 h-5 w-5" />
              {dict.ctaCV}
            </a>
          </Button>
        </motion.div>

        {/* Keyboard shortcut hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-sm text-slate-500"
        >
          Presiona{' '}
          <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-400 font-mono text-xs">
            Ctrl+K
          </kbd>{' '}
          {dict.shortcut}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll hacia abajo"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </section>
  )
}
