'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  onOpenCommandPalette: () => void
  dict: any
  lang: Locale
}

export function Header({ onOpenCommandPalette, dict, lang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: dict.home, href: '#hero' },
    { name: dict.projects, href: '#projects' },
    { name: dict.skills, href: '#skills' },
    { name: dict.experience, href: '#experience' },
    { name: dict.about, href: '#about' },
    { name: dict.contact, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Language Switcher Logic
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-bold text-gradient"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
          >
            DE.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-slate-50 transition-colors rounded-lg hover:bg-slate-800/50"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <Link
              href={redirectedPathName(lang === 'es' ? 'en' : 'es')}
              className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-slate-50 transition-colors"
              aria-label="Cambiar idioma"
            >
              <span className="text-xs font-bold">{lang === 'es' ? 'EN' : 'ES'}</span>
            </Link>

            {/* Command Palette Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onOpenCommandPalette}
              className="hidden sm:flex"
              aria-label="Abrir paleta de comandos"
            >
              <Command className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-slate-400 hover:text-slate-50 hover:bg-slate-800/50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
