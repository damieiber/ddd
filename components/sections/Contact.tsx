'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/damieiber',
    color: 'hover:text-slate-50',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/damian-eiberman-72792813/',
    color: 'hover:text-[#0A66C2]',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/Dami_Eiber',
    color: 'hover:text-[#1DA1F2]',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:damieiber@gmail.com',
    color: 'hover:text-dev',
  },
]

export function Contact({ dict }: { dict: any }) {
  const serviceCards = [
    {
      ...dict.services.freelance,
      color: 'dev',
      titleColor: 'text-dev',
    },
    {
      ...dict.services.consulting,
      color: 'data',
      titleColor: 'text-data',
    },
    {
      ...dict.services.collab,
      color: 'none',
      titleColor: 'text-slate-300',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
             {dict.title} <span className="text-gradient">{dict.titleTogether}</span>{dict.titleQuestion}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full border-gradient">
              <h3 className="text-xl font-semibold mb-4 text-slate-50">
                {dict.cardTitle}
              </h3>
              <p className="text-slate-400 mb-6">
                {dict.cardDesc}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-colors ${link.color}`}
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>

              {/* Email CTA */}
              <Button size="lg" className="w-full group" asChild>
                <a href="mailto:damieiber@gmail.com">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {dict.emailCta}
                </a>
              </Button>
            </Card>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {serviceCards.map((service, index) => (
              <Card key={index} className="p-6" glow={service.color as any}>
                <h4 className={`text-sm font-medium ${service.titleColor} mb-2`}>
                  {service.title}
                </h4>
                <p className={service.color === 'none' ? 'text-slate-400' : 'text-slate-300'}>
                  {service.desc}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-sm text-slate-500">
            {dict.footer.designed}{' '}
            <span className="text-dev">♥</span> using{' '}
            <span className="text-slate-400">Next.js</span>,{' '}
            <span className="text-slate-400">TypeScript</span> &{' '}
            <span className="text-slate-400">Tailwind CSS</span>
          </p>
          <p className="text-xs text-slate-600 mt-2">
            © {new Date().getFullYear()} Dami Eiberman. {dict.footer.rights}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
