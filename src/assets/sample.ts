import { Deck } from "../types";

export const SAMPLE_DATA = [
  {
    name: 'Tier1',
    decks: [
      { name: 'R-ACE', image: '/public/static/deckimages/r-ace.png' },
      { name: '炎王', image: '/public/static/deckimages/fireking.jpg' },
      { name: 'スネークアイ', image: '/public/static/deckimages/snake-eye.png' },
      { name: '炎王スネークアイ', image: '/public/static/deckimages/fireking-snake-eye.png' },
    ],
  },
  {
    name: 'Tier2',
    decks: [
      { name: 'スプライト', image: '/public/static/deckimages/spright.png' },
      { name: 'ティアラメンツ', image: '/public/static/deckimages/tearlaments.png' },
      { name: '超重武者', image: '/public/static/deckimages/superheavy_samurai.png' },
      { name: 'エクソシスター', image: '/public/static/deckimages/exosister.png' },
      { name: 'ゴストリピュアリィ', image: '/public/static/deckimages/ghostrick-purrely.png' },
      { name: '覇王魔術師', image: '/public/static/deckimages/supremeking.png' },
    ],
  },
  {
    name: 'Tier3',
    decks: [
      { name: '60GS', image: '/public/static/deckimages/60gs.png' },
      { name: '＠イグニスター', image: '/public/static/deckimages/ignister.png' },
      { name: '転生炎獣', image: '/public/static/deckimages/salamangreat.png' },
      { name: '斬機', image: '/public/static/deckimages/mathmech.png' },
      { name: 'ラビュリンス', image: '/public/static/deckimages/labrynth.png' },
    ],
  },
  {
    name: 'Tier4',
    decks: [
      { name: 'ピュアリィ', image: '/public/static/deckimages/purrely.png' },
      { name: '破械', image: '/public/static/deckimages/unchained.png' },
      { name: '烙印', image: '/public/static/deckimages/branded.png' },
      { name: '十二獣', image: '/public/static/deckimages/zoodiac.png' },
      { name: 'クシャトリラ', image: '/public/static/deckimages/kashtira.png' },
      { name: 'ホルス', image: '/public/static/deckimages/horus.png' },
      { name: 'メタビート', image: '/public/static/deckimages/metabeat.png' },
    ],
  },
]

export const INITIAL_AVAILABLE_DECKS: Deck[] = [
  // { name: 'セフィラ', image: '/public/static/deckimages/zefra.png' },
  // { name: 'キマイラ', image: '/public/static/deckimages/spright.png' },
];
