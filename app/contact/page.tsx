import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/site/sections'
import { Eyebrow } from '@/components/site/primitives'

export const metadata = {
  title: 'Contact | Nicola Counselling & Life Coaching',
  description: 'Get in touch with Nicola about counselling, life coaching, or an introductory conversation.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={<>A first step can be <em className="text-primary">small.</em></>}
        intro="If you have a question, or would like to explore whether working together could be a good fit, you are welcome to send a message."
        breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Contact' }]}
      />
      <section className="container-site grid gap-16 pb-24 md:grid-cols-12 md:pb-36">
        <div className="md:col-span-5">
          <div className="border-t border-border pt-5">
            <Eyebrow>Before you write</Eyebrow>
            <div className="mt-8 space-y-8 text-muted-foreground">
              <p className="leading-relaxed">You can share as much or as little as feels comfortable. It is enough to tell me what kind of support you are looking for and how you would prefer to be contacted.</p>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a href="mailto:hello@nicolacounselling.co.uk" className="link-underline mt-2 inline-block">hello@nicolacounselling.co.uk</a>
              </div>
              <div>
                <p className="font-medium text-foreground">Prefer to book?</p>
                <Link href="/booking" className="link-underline mt-2 inline-block">Book an introductory conversation</Link>
              </div>
            </div>
          </div>
        </div>
        <form className="space-y-7 md:col-span-6 md:col-start-7" action="mailto:hello@nicolacounselling.co.uk" method="post" encType="text/plain">
          <div className="grid gap-7 sm:grid-cols-2">
            <label className="grid gap-2 text-sm"><span>Your name</span><input required name="name" type="text" autoComplete="name" className="h-12 border-0 border-b border-border bg-transparent px-0 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" placeholder="Name" /></label>
            <label className="grid gap-2 text-sm"><span>Email address</span><input required name="email" type="email" autoComplete="email" className="h-12 border-0 border-b border-border bg-transparent px-0 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" placeholder="you@example.com" /></label>
          </div>
          <label className="grid gap-2 text-sm"><span>What would you like to talk about?</span><textarea required name="message" rows={7} className="resize-y border-0 border-b border-border bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" placeholder="A little about what brings you here..." /></label>
          <p className="text-xs leading-relaxed text-muted-foreground">Please do not include anything you would not want to share by email. I will usually respond within two working days.</p>
          <Button type="submit" size="lg">Send message</Button>
        </form>
      </section>
    </main>
  )
}
