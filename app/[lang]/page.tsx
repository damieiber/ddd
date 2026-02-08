import { getDictionary } from '@/lib/get-dictionary'
import { Locale } from '@/i18n-config'
import { ClientLayout } from '@/components/layout/ClientLayout'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <ClientLayout dict={dict} lang={lang}>
      <Hero dict={dict.hero} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <Experience dict={dict} />
      <About dict={dict.about} />
      <Contact dict={dict.contact} />
    </ClientLayout>
  )
}
