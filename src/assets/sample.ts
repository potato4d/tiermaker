import { Deck } from "../types";

export const SAMPLE_DATA = [
  {
    name: 'Tier1',
    decks: [
      { name: 'R-ACE', image: '/static/deckimages/r-ace.png' },
      { name: '炎王', image: '/static/deckimages/fireking.jpg' },
      { name: 'スネークアイ', image: '/static/deckimages/snake-eye.png' },
      { name: '炎王スネークアイ', image: '/static/deckimages/fireking-snake-eye.png' },
    ],
  },
  {
    name: 'Tier2',
    decks: [
      { name: 'スプライト', image: '/static/deckimages/spright.png' },
      { name: 'ティアラメンツ', image: '/static/deckimages/tearlaments.png' },
      { name: '超重武者', image: '/static/deckimages/superheavy_samurai.png' },
      { name: 'エクソシスター', image: '/static/deckimages/exosister.png' },
      { name: 'ゴストリピュアリィ', image: '/static/deckimages/ghostrick-purrely.png' },
      { name: '覇王魔術師', image: '/static/deckimages/supremeking.png' },
    ],
  },
  {
    name: 'Tier3',
    decks: [
      { name: '60GS', image: '/static/deckimages/60gs.png' },
      { name: '＠イグニスター', image: '/static/deckimages/ignister.png' },
      { name: '転生炎獣', image: '/static/deckimages/salamangreat.png' },
      { name: '斬機', image: '/static/deckimages/mathmech.png' },
      { name: 'ラビュリンス', image: '/static/deckimages/labrynth.png' },
    ],
  },
  {
    name: 'Tier4',
    decks: [
      { name: 'ピュアリィ', image: '/static/deckimages/purrely.png' },
      { name: '破械', image: '/static/deckimages/unchained.png' },
      { name: '烙印', image: '/static/deckimages/branded.png' },
      { name: '十二獣', image: '/static/deckimages/zoodiac.png' },
      { name: 'クシャトリラ', image: '/static/deckimages/kashtira.png' },
      { name: 'ホルス', image: '/static/deckimages/horus.png' },
      { name: 'メタビート', image: '/static/deckimages/metabeat.png' },
    ],
  },
]

export const INITIAL_AVAILABLE_DECKS: Deck[] = [
  // { name: 'セフィラ', image: '/static/deckimages/zefra.png' },
  // { name: 'キマイラ', image: '/static/deckimages/spright.png' },
];
