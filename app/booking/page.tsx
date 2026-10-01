'use client'

import { useState } from 'react'
import { PageHero } from '@/components/site/sections'
import { Button } from '@/components/site/button'

const options = ['Counselling', 'Life coaching', 'Not sure yet']

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <PageHero
        eyebrow="Book a session"
        title={<>A first step, at your <em className="text-primary">own pace.</em></>}
        intro="Choose the kind of support you are looking for and share a little about what brings you here. I will be in touch to arrange a time that works."
        breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Book a session' }]}
      />
      <section className="container-site grid gap-14 pb-24 md:grid-cols-12 md:pb-36">
        <div className="md:col-span-4">
          <p className="eyebrow text-muted-foreground">A gentle beginning</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">Let&apos;s find the right way forward.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">There is no need to have everything figured out before you get in touch. A short note is enough to start the conversation.</p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {submitted ? (
            <div className="border border-border bg-secondary p-8 md:p-12"><p className="eyebrow text-primary">Message received</p><h2 className="display mt-5 text-4xl">Thank you for reaching out.</h2><p className="mt-5 leading-relaxed text-muted-foreground">I&apos;ll read your note and be in touch shortly to find a suitable time.</p><button type="button" onClick={() => setSubmitted(false)} className="link-underline mt-8 text-sm">Send another message</button></div>
          ) : (
            <form className="space-y-8" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
              <div className="grid gap-8 sm:grid-cols-2"><label className="space-y-2 text-sm"><span>Name</span><input required name="name" className="field" /></label><label className="space-y-2 text-sm"><span>Email</span><input required type="email" name="email" className="field" /></label></div>
              <fieldset className="space-y-3"><legend className="text-sm">I&apos;m interested in</legend><div className="flex flex-wrap gap-2">{options.map((option) => <label key={option} className="cursor-pointer"><input required type="radio" name="interest" value={option} className="peer sr-only" /><span className="block rounded-full border border-border px-5 py-3 text-sm transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground">{option}</span></label>)}</div></fieldset>
              <label className="block space-y-2 text-sm"><span>A little about what brings you here</span><textarea required name="message" rows={6} className="field resize-y" /></label>
              <Button type="submit" size="lg" arrow="right">Send enquiry</Button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

