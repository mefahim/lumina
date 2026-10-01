export type FaqGroup = {
  id: string
  title: string
  items: { q: string; a: string }[]
}

// Draft answers for layout only. Every answer must be replaced with Nicola's approved wording.
export const faqGroups: FaqGroup[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        q: 'What happens during an initial session?',
        a: '[Draft — to be confirmed by Nicola] The first session is usually a chance to share what has brought you here, talk about what you hope for, and ask any questions about how working together might look.',
      },
      {
        q: 'How do I know which service is right for me?',
        a: '[Draft — to be confirmed by Nicola] If you are unsure, the introductory conversation is a good place to start. You can also read the guidance on the Services page or get in touch with a question.',
      },
      {
        q: 'How long is a session?',
        a: '[Session length to be confirmed by Nicola]',
      },
      {
        q: 'Where do sessions take place?',
        a: '[Location and online options to be confirmed by Nicola]',
      },
    ],
  },
  {
    id: 'booking',
    title: 'Booking',
    items: [
      {
        q: 'How do I book?',
        a: '[Draft — to be confirmed by Nicola] Choose a service on the booking page, select a date and time that suits you, add your details, and confirm. You will receive a confirmation by email.',
      },
      {
        q: 'Can I reschedule?',
        a: '[Rescheduling policy to be confirmed by Nicola]',
      },
      {
        q: 'What is the cancellation policy?',
        a: '[Cancellation policy to be confirmed by Nicola] — see the Booking & Cancellation page once finalised.',
      },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    items: [
      {
        q: 'What type of resources are available?',
        a: '[Draft — to be confirmed by Nicola] Workbooks, guides and worksheets designed to support reflection between or alongside sessions.',
      },
      {
        q: 'Are resources digital?',
        a: '[Format to be confirmed by Nicola]',
      },
      {
        q: 'How do I access my purchase?',
        a: '[Delivery / access method to be confirmed by Nicola]',
      },
    ],
  },
]
