export interface Paper {
  id: number
  title: string
  abstract: string
  url: string
}

export const papers: Paper[] = [
  {
    id: 1,
    title: 'Paper Title One',
    abstract:
      'Insert the full abstract of paper one here. The first three to four lines will be clearly visible. The remainder of the text below will be masked with a gradient fade, giving the impression of more content beneath, which encourages the reader to click through to the full paper.',
    url: 'https://your-paper-url-1.com',
  },
  {
    id: 2,
    title: 'Paper Title Two',
    abstract:
      'Insert the full abstract of paper two here. The first three to four lines will be clearly visible. The remainder of the text below will be masked with a gradient fade, giving the impression of more content beneath, which encourages the reader to click through to the full paper.',
    url: 'https://your-paper-url-2.com',
  },
  {
    id: 3,
    title: 'Paper Title Three',
    abstract:
      'Insert the full abstract of paper three here. The first three to four lines will be clearly visible. The remainder of the text below will be masked with a gradient fade, giving the impression of more content beneath, which encourages the reader to click through to the full paper.',
    url: 'https://your-paper-url-3.com',
  },
]
