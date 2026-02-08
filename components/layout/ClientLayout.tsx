'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { CommandPalette } from '@/components/ui/command'
import { Locale } from '@/i18n-config'

interface ClientLayoutProps {
  children: React.ReactNode
  dict: any // Type this properly if possible, or use 'any' for now to speed up
  lang: Locale
}

export function ClientLayout({ children, dict, lang }: ClientLayoutProps) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)

  return (
    <>
      <Header 
        dict={dict.nav} 
        lang={lang}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} 
      />
      
      <main>
        {children}
      </main>

      <CommandPalette 
        open={isCommandPaletteOpen} 
        onOpenChange={setIsCommandPaletteOpen}
        dict={dict.command}
        navDict={dict.nav}
      />
    </>
  )
}
