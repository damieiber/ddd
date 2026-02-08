import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'dev' | 'data' | 'hybrid'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
          variant === 'default' && 'bg-slate-800 text-slate-300',
          variant === 'dev' && 'bg-dev/20 text-dev border border-dev/30',
          variant === 'data' && 'bg-data/20 text-data border border-data/30',
          variant === 'hybrid' && 'bg-gradient-to-r from-dev/20 to-data/20 text-slate-200 border border-slate-700',
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
