export type Term = {
  /**
   * Original term in English
   */
  term: string
  /**
   * URL to the term's official documentation
   */
  termURL?: string
  /**
   * Pronunciation of the term with diacritics
   */
  pronunciation?: string
  /**
   * Whether the pronunciation is unopinionated.
   * If there are no official sources, regard the pronunciation as unopinionated.
   */
  unopinionated?: boolean
  hangulNotation: {
    /**
     * Hangul notation of the term
     */
    label: string
    description?: string
    references?: Array<{
      label: string
      url: string
    }>
  }
  /**
   * Korean translation of the term if available
   */
  korean?: {
    term: string
  }
}

export const terms: Array<Term> = [
  {
    term: 'repository',
    hangulNotation: {
      label: '리포지토리',
      references: [
        {
          label: 'AWS',
          url: 'https://aws.amazon.com/ko/what-is/repo/',
        },
        {
          label: 'GitHub Docs',
          url: 'https://docs.github.com/ko/repositories/creating-and-managing-repositories/about-repositories',
        },
        {
          label: 'Atlassian',
          url: 'https://www.atlassian.com/ko/git/tutorials/setting-up-a-repository',
        },
      ],
    },
    korean: {
      term: '저장소',
    },
  },
  {
    term: 'await',
    pronunciation: 'əwéit',
    hangulNotation: {
      label: '어웨이트',
    },
  },
  {
    term: 'async',
    pronunciation: 'eisíŋk',
    hangulNotation: {
      label: '에이싱크',
    },
  },
  {
    term: 'height',
    termURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS/height',
    pronunciation: 'hait',
    hangulNotation: {
      label: '하이트',
    },
    korean: {
      term: '높이',
    },
  },
  {
    term: 'Deno',
    pronunciation: 'ˈdiːnoʊ',
    termURL: 'https://deno.com/',
    hangulNotation: {
      label: '디노',
      references: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/denoland/deno',
        },
        {
          label: 'YouTube',
          url: 'https://www.youtube.com/watch?v=1mQN_e-VB-8',
        },
      ],
    },
  },
  {
    term: 'Zustand',
    termURL: 'https://zustand-demo.pmnd.rs/',
    hangulNotation: {
      label: '주스탠드, 주스탄드, 저스탠드, 저스탄드',
      references: [
        {
          label: 'GitHub Discussions',
          url: 'https://github.com/pmndrs/zustand/discussions/1032',
        },
      ],
    },
    unopinionated: true,
  },
  {
    term: 'Babel',
    termURL: 'https://babeljs.io/',
    hangulNotation: {
      label: '배블',
      references: [
        {
          label: 'X',
          url: 'https://twitter.com/babeljs/status/567383101249056768?lang=en',
        },
      ],
    },
  },
  {
    term: 'Tauri',
    termURL: 'https://tauri.app/',
    unopinionated: true,
    hangulNotation: {
      label: '타워리, 타우리, 타오리(TAO + WRY)',
      references: [
        {
          label: 'GitHub Discussions',
          url: 'https://github.com/tauri-apps/tauri/discussions/6929',
        },
        {
          label: 'YouTube (Tauri)',
          url: 'https://youtu.be/UxTJeEbZX-0?t=585',
        },
      ],
    },
  },
  {
    term: 'Bun',
    termURL: 'https://bun.sh/',
    pronunciation: 'bʌn',
    hangulNotation: {
      label: '번',
    },
  },
  {
    term: 'PostgreSQL',
    termURL: 'https://www.postgresql.org/',
    hangulNotation: {
      label: '포스트그레스큐엘, 포스트그레스',
      references: [
        {
          label: 'PostgreSQL FAQ',
          url: 'https://wiki.postgresql.org/wiki/FAQ#What_is_PostgreSQL.3F_How_is_it_pronounced.3F_What_is_Postgres.3F',
        },
      ],
    },
  },
  {
    term: 'WAI-ARIA',
    termURL: 'https://www.w3.org/TR/wai-aria-1.1/',
    hangulNotation: {
      label: '와이아리아',
      references: [
        {
          label: 'YouTube (Chrome for Developers)',
          url: 'https://www.youtube.com/watch?v=g9Qff0b-lHk',
        },
      ],
    },
  },
  {
    term: 'Gemini',
    termURL: 'https://gemini.google.com/',
    hangulNotation: {
      label: '제미나이',
      references: [
        {
          label: 'Google Korea Blog',
          url: 'https://blog.google/intl/ko-kr/company-news/technology/gemini-kr/',
        },
      ],
    },
  },
  {
    term: 'Vite',
    termURL: 'https://vitejs.dev/',
    pronunciation: 'vit',
    hangulNotation: {
      label: '비트, 뷔트, 비이트, 뷔이트',
      references: [
        {
          label: 'Vite',
          url: 'https://vitejs.dev/guide/#overview',
        },
      ],
    },
  },
  {
    term: 'asterisk',
    pronunciation: 'ǽstərìsk',
    hangulNotation: {
      label: '애스터리스크',
    },
  },
  {
    term: 'execute',
    pronunciation: 'éksikjùːt',
    hangulNotation: {
      label: '엑시큐트, 엑서큐트',
    },
  },
  {
    term: 'exhaustive',
    pronunciation: 'iɡzɔ́ːstiv',
    hangulNotation: {
      label: '익져스티브',
    },
  },
  {
    term: 'imperative',
    pronunciation: 'impérətiv',
    hangulNotation: {
      label: '임페러티브',
    },
  },
  {
    term: 'referer(referrer)',
    termURL:
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer',
    pronunciation: 'rifə́ːrər',
    hangulNotation: {
      label: '리퍼러',
    },
  },
  {
    term: 'Lerna',
    termURL: 'https://lerna.js.org/',
    hangulNotation: {
      label: '러나, 럴나',
    },
  },
  {
    term: 'Preact',
    termURL: 'https://preactjs.com/',
    hangulNotation: {
      label: '프리액트',
      references: [
        {
          label: 'GitHub Discussions',
          url: 'https://github.com/preactjs/preact/discussions/3151',
        },
        {
          label: 'JSConf EU 2017',
          url: 'https://youtu.be/LY6y3HbDVmg?t=95',
        },
      ],
    },
  },
  {
    term: 'tertiary',
    pronunciation: 'tə́ːrʃièri | -ʃəri',
    hangulNotation: {
      label: '털시에리, 털시어리',
    },
  },
]
