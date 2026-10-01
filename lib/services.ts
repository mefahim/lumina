export type ServiceDetail = {
  label: string
  value: string
  placeholder?: boolean
}

export type Service = {
  slug: string
  number: string
  name: string
  short: string
  positioning: string
  image: string
  imageAlt: string
  overview: { what: string; who: string; experience: string }
  forWho: string[]
  steps: { title: string; body: string }[]
  details: ServiceDetail[]
  booking: { duration: string; price: string; format: string }
  faqs: { q: string; a: string }[]
  related: string[]
}

// All copy below is placeholder direction, written to demonstrate layout.
// Replace with Nicola's approved service descriptions, durations and fees.
export const services: Service[] = [
  {
    slug: 'counselling',
    number: '01',
    name: 'Counselling',
    short:
      'A confidential, unhurried space to talk through what feels heavy, and to make sense of it at your own pace.',
    positioning:
      'A steady, confidential space to slow down, be heard, and gently understand what you are carrying.',
    image: '/images/room.png',
    imageAlt: 'A calm room with two linen armchairs facing each other in soft morning light',
    overview: {
      what: 'Counselling offers time and space to talk openly with someone who is there solely to listen and understand. Sessions are shaped around you — what you bring, and what you would like to explore.',
      who: 'For anyone navigating a difficult period, a change in circumstances, or simply a sense that something needs attention. You do not need to know exactly what to say before you begin.',
      experience:
        'Sessions are conversational and paced by you. Over time, many people find it easier to notice patterns, name feelings, and find a little more room to breathe.',
    },
    forWho: [
      'You feel overwhelmed and would like space to talk',
      'You are moving through change, loss or uncertainty',
      'You want to understand yourself and your patterns more clearly',
      'You would value a consistent, confidential place to reflect',
    ],
    steps: [
      { title: 'An initial conversation', body: 'A relaxed first contact to see whether working together feels right.' },
      { title: 'Understanding where you are', body: 'Time to share what has brought you here, at whatever pace feels comfortable.' },
      { title: 'Regular sessions', body: 'An ongoing space shaped around what you would like to explore.' },
      { title: 'Reflection', body: 'Pausing to notice what is shifting, and what still needs attention.' },
      { title: 'Next steps', body: 'Deciding together how and when the work comes to a natural close.' },
    ],
    details: [
      { label: 'Duration', value: '[Session length TBC]', placeholder: true },
      { label: 'Format', value: '[In person / online TBC]', placeholder: true },
      { label: 'Fee', value: '[Fee TBC]', placeholder: true },
      { label: 'Location', value: '[Location TBC]', placeholder: true },
      { label: 'Availability', value: '[Availability TBC]', placeholder: true },
    ],
    booking: { duration: '[Length TBC]', price: '[Fee TBC]', format: '[Format TBC]' },
    faqs: [
      { q: 'What happens in a first counselling session?', a: '[Answer to be supplied by Nicola] — typically a chance to share what has brought you here and to ask any questions about how the sessions work.' },
      { q: 'How many sessions will I need?', a: '[Answer to be supplied by Nicola] — this is usually something discussed together and reviewed over time.' },
      { q: 'Is what I share kept confidential?', a: '[Answer to be supplied by Nicola] — including any limits to confidentiality, explained clearly at the start.' },
    ],
    related: ['the-reflective-workbook', 'a-gentle-guide-to-boundaries'],
  },
  {
    slug: 'life-coaching',
    number: '02',
    name: 'Life Coaching',
    short:
      'Forward-focused sessions to clarify what matters, untangle decisions, and move towards the life you want with intention.',
    positioning:
      'Thoughtful, forward-focused support to clarify what matters and move towards it with intention.',
    image: '/images/coaching.png',
    imageAlt: 'An open notebook, brass pen and cup of tea on an oak table by a window',
    overview: {
      what: 'Coaching is a collaborative, future-facing conversation. Together you clarify what you want, what is in the way, and the next meaningful steps.',
      who: 'For people at a crossroads, facing a decision, or wanting to live and work in a way that feels more aligned with who they are.',
      experience:
        'Sessions balance reflection with gentle accountability. You leave with greater clarity and practical next steps that feel realistic.',
    },
    forWho: [
      'You are facing a decision or a transition',
      'You feel stuck and want clarity about your direction',
      'You want to build confidence and follow through',
      'You are ready to focus on what comes next',
    ],
    steps: [
      { title: 'An initial conversation', body: 'Exploring what you are hoping for and whether coaching is the right fit.' },
      { title: 'Clarifying your goals', body: 'Naming what matters most and what success would genuinely feel like.' },
      { title: 'Focused sessions', body: 'Working through obstacles, options and the decisions in front of you.' },
      { title: 'Reflection', body: 'Reviewing progress and adjusting your approach as you learn.' },
      { title: 'Moving forward', body: 'Leaving with clarity, confidence and a way forward that is yours.' },
    ],
    details: [
      { label: 'Duration', value: '[Session length TBC]', placeholder: true },
      { label: 'Format', value: '[In person / online TBC]', placeholder: true },
      { label: 'Fee', value: '[Fee TBC]', placeholder: true },
      { label: 'Packages', value: '[Package options TBC]', placeholder: true },
      { label: 'Availability', value: '[Availability TBC]', placeholder: true },
    ],
    booking: { duration: '[Length TBC]', price: '[Fee TBC]', format: '[Format TBC]' },
    faqs: [
      { q: 'How is coaching different from counselling?', a: '[Answer to be supplied by Nicola] — broadly, coaching tends to focus on the present and future, while counselling often makes more space to explore feelings and past experience.' },
      { q: 'Do I need a clear goal before starting?', a: '[Answer to be supplied by Nicola] — clarifying what you want is often part of the work itself.' },
      { q: 'Are coaching packages available?', a: '[Answer to be supplied by Nicola] — package options and pricing to be confirmed.' },
    ],
    related: ['finding-your-direction', 'weekly-reflection-worksheets'],
  },
  {
    slug: 'introductory-conversation',
    number: '03',
    name: 'Introductory Conversation',
    short:
      'A short, no-pressure first conversation to ask questions and see whether working together feels right for you.',
    positioning:
      'A gentle first step — a chance to ask questions, share a little, and see whether this feels right.',
    image: '/images/conversation.png',
    imageAlt: 'Two hands holding a handmade stoneware mug in warm window light',
    overview: {
      what: 'A brief conversation to get to know each other before committing to sessions. There is no expectation to go into detail.',
      who: 'For anyone who is curious but unsure — about counselling or coaching, about timing, or simply about where to begin.',
      experience:
        'Relaxed and informal. You can ask about the approach, practicalities and what working together might look like.',
    },
    forWho: [
      'You are unsure which kind of support is right',
      'You would like to ask questions before booking',
      'You want to get a feel for working together',
      'You are taking a first step and would like it to be gentle',
    ],
    steps: [
      { title: 'Book a time', body: 'Choose a time that suits you using the booking calendar.' },
      { title: 'A short conversation', body: 'Share as much or as little as you like, and ask anything.' },
      { title: 'Decide in your own time', body: 'There is no pressure to book further sessions on the day.' },
    ],
    details: [
      { label: 'Duration', value: '[Length TBC]', placeholder: true },
      { label: 'Format', value: '[Phone / video TBC]', placeholder: true },
      { label: 'Fee', value: '[Fee TBC]', placeholder: true },
    ],
    booking: { duration: '[Length TBC]', price: '[Fee TBC]', format: '[Phone / video TBC]' },
    faqs: [
      { q: 'Do I have to book sessions afterwards?', a: '[Answer to be supplied by Nicola] — the introductory conversation is designed to help you decide in your own time.' },
      { q: 'What should I prepare?', a: '[Answer to be supplied by Nicola] — nothing in particular; any questions you have are welcome.' },
    ],
    related: ['a-gentle-guide-to-boundaries'],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
