'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../components/ui/dropdown-menu'

type Intent =
  | 'general'
  | 'feedback'
  | 'partnership'
  | 'project'
  | 'other'

const INTENTS: { key: Intent; label: string }[] = [
  { key: 'general',     label: 'General' },
  { key: 'feedback',    label: 'Feedback / bug' },
  { key: 'partnership', label: 'Partnership' },
  { key: 'project',     label: 'Project idea' },
  { key: 'other',       label: 'Other' },
]

const projectCategories = [
  'Breath Games',
  'Karma — Prosocial Journey',
  'WalkXR — Empathy & Perspective-taking',
  'Prosocial Games',
  'Game-Based Therapeutics',
  'Social Therapeutics',
  'Spiritual Therapeutics',
  'Tokenisation for Health',
  'Web3: Building the Metaverse',
  'Aligning Passion & Purpose',
  'Games for Change',
  'Digital Experiences',
  'Arts',
]

const technologyPlatform = [
  'Mobile',
  'Tablet',
  'Console',
  'PC',
  'In-person',
  'Virtual Reality (VR)',
  'Augmented Reality (AR)',
]

export default function ContactUs() {
  const [intent, setIntent] = useState<Intent>('general')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('') 
  const [category, setCategory] = useState<string | null>(null)
  const [platform, setPlatform] = useState<string | null>(null)
  const [links, setLinks] = useState('') 
  const [loading, setLoading] = useState(false)
  const [note, setNote] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  // honeypot anti spammmm
  const [company, setCompany] = useState('')

  const showProjectDetails = intent === 'project' || intent === 'partnership'

  const messageLabel = useMemo(() => {
    switch (intent) {
      case 'feedback':
        return 'Describe the issue (steps, device, links)'
      case 'partnership':
        return 'What kind of collaboration are you exploring?'
      case 'project':
        return 'Describe your concept'
      default:
        return 'How can we help?'
    }
  }, [intent])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setNote(null)
    setError(null)

    if (company.trim().length > 0) {
      setLoading(false)
      setError('Submission blocked.')
      return
    }
    const composed =
      `Intent: ${INTENTS.find(i => i.key === intent)?.label}\n` +
      (category ? `Category: ${category}\n` : '') +
      (platform ? `Platform: ${platform}\n` : '') +
      (links ? `Links: ${links}\n` : '') +
      `\n—\n${message}`

    try {
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: composed, intent, category, platform, links }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Something went wrong !')
      }

      setNote('Thanks! We received your message.')
      setName(''); setEmail(''); setMessage('')
      setCategory(null); setPlatform(null); setLinks('')
      setIntent('general')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#10082e] to-[#0B0816] text-white flex flex-col items-center px-4 py-20 overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <Image
          src="/images/contactLogo.png"
          alt="The Verse logo"
          width={600}
          height={500}
          className="object-contain mt-44 opacity-60"
          priority
        />
      </div>

      <h1 className="text-3xl md:text-5xl mt-24 font-extrabold mb-3 text-center z-10">
        Contact The Verse
      </h1>
      <p className="max-w-3xl text-lg md:text-xl text-center mb-10 z-10 text-white/80">
        Got ideas? Want to build something in The Verse? Let&apos;s work together! Collaboration 
        is key to solving today&apos;s challenges and making an impact. Join us and create something extraordinary.

      </p>

      <form onSubmit={onSubmit} className="w-full max-w-xl space-y-8 z-10">
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* intent */}
        <fieldset>
          <legend className="mb-3 block text-sm font-semibold text-white/90">
            How can we help ?
             <span className="text-red-400"> *</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {INTENTS.map(({ key, label }) => {
              const active = intent === key
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setIntent(key)}
                  aria-pressed={active}
                  className={[
                    'rounded-full border px-4 py-2 text-sm transition',
                    active
                      ? 'bg-gradient-to-r from-indigo-700 to-fuchsia-600 text-white'
                      : 'border-white/30 text-white/80 hover:bg-white/10'
                  ].join(' ')}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* name */}
        <div>
          <label htmlFor="name" className="block text-sm mb-1 text-white/90">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-white bg-transparent py-3 placeholder-white/40 tracking-wide focus:outline-none"
            placeholder="Your name (optional)"
          />
        </div>

        {/* email */}
        <div>
          <label htmlFor="email" className="block text-sm mb-1 text-white/90">
            Email <span className="text-pink-300">*</span>
          </label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-white bg-transparent py-3 placeholder-white/40 tracking-wide focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        {/* message */}
        <div>
          <label htmlFor="message" className="block text-sm mb-1 text-white/90">
            {messageLabel} <span className="text-pink-300">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-b border-white bg-transparent py-3 placeholder-white/40 tracking-wide focus:outline-none"
            placeholder={messageLabel}
          />
        </div>

        {/* Project Category */}
        {showProjectDetails && (
          <div className="space-y-6">
            <div>
              <span className="block text-sm mb-2 text-white/90">Project Category (optional)</span>
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-[#1C1428] flex justify-between items-center rounded-3xl py-3 px-6 w-full text-left text-white focus:outline-none">
                  <span>{category ?? 'Choose a category'}</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1C1428] rounded-3xl p-2 shadow-lg border border-[#2F334D] mt-2 max-h-[300px] overflow-auto">
                  {projectCategories.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      onSelect={() => setCategory(item)}
                      className="text-white rounded-2xl px-4 py-2 hover:bg-[#2F334D] cursor-pointer"
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Technology Platform */}
            <div>
              <span className="block text-sm mb-2 text-white/90">Technology Platform (optional)</span>
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-[#1C1428] flex justify-between items-center rounded-3xl py-3 px-6 w-full text-left text-white focus:outline-none">
                  <span>{platform ?? 'Choose a platform'}</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1C1428] rounded-3xl p-2 shadow-lg border border-[#2F334D] mt-2">
                  {technologyPlatform.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      onSelect={() => setPlatform(item)}
                      className="text-white rounded-2xl px-4 py-2 hover:bg-[#2F334D] cursor-pointer"
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* optional linkkk */}
            <div>
              <label htmlFor="links" className="block text-sm mb-1 text-white/90">Links (optional)</label>
              <input
                id="links"
                type="text"
                value={links}
                onChange={(e) => setLinks(e.target.value)}
                placeholder="Portfolio, doc, deck…"
                className="w-full border-b border-white bg-transparent py-3 placeholder-white/40 tracking-wide focus:outline-none"
              />
            </div>
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#2F334D] text-white rounded-lg px-10 py-2 disabled:opacity-60"
          >
            {loading ? 'Submitting…' : 'Send message'}
          </button>
          <p className="mt-3 text-xs text-white/60">
            We’ll only use your info to respond to this message.
          </p>
        </div>

        {note && <p className="text-green-300 text-sm">{note}</p>}
        {error && <p className="text-red-300 text-sm">{error}</p>}
      </form>
    </div>
  )
}
