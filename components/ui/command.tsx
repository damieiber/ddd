'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-xl bg-slate-900/95 backdrop-blur-xl text-slate-50',
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-slate-800 px-4" cmdk-input-wrapper="">
    <Search className="mr-3 h-4 w-4 shrink-0 text-slate-400" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden p-2', className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm text-slate-500"
    {...props}
  />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden py-2 text-slate-50 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500',
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-sm outline-none aria-selected:bg-slate-800 aria-selected:text-slate-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-slate-800/50 transition-colors',
      className
    )}
    {...props}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-slate-800', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-slate-500',
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

// Command Palette Dialog
interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dict: any
  navDict: any
}

export function CommandPalette({ open, onOpenChange, dict, navDict }: CommandPaletteProps) {
  const sections = [
    { name: navDict.home, href: '#hero', icon: '🏠' },
    { name: navDict.projects, href: '#projects', icon: '📁' },
    { name: navDict.skills, href: '#skills', icon: '⚡' },
    { name: navDict.experience, href: '#experience', icon: '💼' },
    { name: navDict.about, href: '#about', icon: '👤' },
    { name: navDict.contact, href: '#contact', icon: '📧' },
  ]

  const handleSelect = (href: string) => {
    onOpenChange(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
      if (e.key === 'Escape') {
        onOpenChange(false)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      
      {/* Dialog */}
      <div className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-lg p-4">
        <Command className="border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between px-4 pt-2">
            <span className="text-xs text-slate-500">Navigation</span>
            <button 
              onClick={() => onOpenChange(false)}
              className="p-1 rounded hover:bg-slate-800 transition-colors"
              aria-label={dict.actions.close}
            >
              <X className="h-4 w-4 text-slate-500" />
            </button>
          </div>
          <CommandInput placeholder={dict.placeholder} />
          <CommandList>
            <CommandEmpty>{dict.noResults}</CommandEmpty>
            <CommandGroup heading={dict.sections}>
              {sections.map((section) => (
                <CommandItem
                  key={section.href}
                  onSelect={() => handleSelect(section.href)}
                  value={section.name} // Important for search filtering
                >
                  <span className="mr-3">{section.icon}</span>
                  <span>{section.name}</span>
                  <CommandShortcut>↵</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <div className="border-t border-slate-800 px-4 py-2">
            <p className="text-xs text-slate-500">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-xs">↑↓</kbd>
              <span className="mx-2">{dict.actions.navigate}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-xs">↵</kbd>
              <span className="mx-2">{dict.actions.select}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-xs">esc</kbd>
              <span className="ml-2">{dict.actions.close}</span>
            </p>
          </div>
        </Command>
      </div>
    </div>
  )
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}
