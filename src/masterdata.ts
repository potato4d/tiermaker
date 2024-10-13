import { Deck } from "./types";

export const SAMPLE_DATA = [
  {
    name: 'Tier1',
    decks: [
      { name: '天盃龍', image: '/static/deckimages/tenpai-dragon.png' },
    ],
  },
  {
    name: 'Tier2',
    decks: [
      { name: 'ラビュリンス', image: '/static/deckimages/labrynth.png' },
      { name: 'ライトロード', image: '/static/deckimages/lightsworn.png' },
      { name: '霊獣', image: '/static/deckimages/ritual-beast.png' },
    ],
  },
  {
    name: 'Tier3',
    decks: [
      { name: 'ユベル', image: '/static/deckimages/yubel.png' },
      { name: 'R-ACE', image: '/static/deckimages/r-ace.png' },
    ],
  },
  {
    name: 'Tier4',
    decks: [
      { name: '炎王スネークアイ', image: '/static/deckimages/fireking-snake-eye.png' },
      { name: 'ティアラメンツ', image: '/static/deckimages/tearlaments.png' },
      { name: '粛声', image: '/static/deckimages/voiceless_voice.png' },
    ],
  },
]

export const INITIAL_AVAILABLE_DECKS: Deck[] = [
  { name: 'メタビート', image: '/static/deckimages/metabeat.png' },
  { name: 'センチュリオン', image: '/static/deckimages/centur-ion.png' },
  { name: 'インフェルノイド', image: '/static/deckimages/infernoid.png' },
  { name: '烙印', image: '/static/deckimages/branded.png' },
  { name: 'ヴァリアンツ', image: '/static/deckimages/vaylantz.png' },
  { name: 'スプライト', image: '/static/deckimages/spright.png' },
  { name: '古代の機械', image: '/static/deckimages/ancient-gear.png' },
  { name: '神碑', image: '/static/deckimages/runick.png' },

  { name: '60GS', image: '/static/deckimages/60gs.png' },
  { name: '炎王', image: '/static/deckimages/fireking.jpg' },

  { name: '超重武者', image: '/static/deckimages/superheavy_samurai.png' },
  { name: 'エクソシスター', image: '/static/deckimages/exosister.png' },
  { name: 'ゴストリピュアリィ', image: '/static/deckimages/ghostrick-purrely.png' },
  { name: '覇王魔術師', image: '/static/deckimages/supremeking.png' },

  { name: '＠イグニスター', image: '/static/deckimages/ignister.png' },
  { name: '転生炎獣', image: '/static/deckimages/salamangreat.png' },
  { name: '斬機', image: '/static/deckimages/mathmech.png' },

  { name: 'ピュアリィ', image: '/static/deckimages/purrely.png' },
  { name: 'セフィラ', image: '/static/deckimages/zefra.png' },
  { name: 'クシャトリラ', image: '/static/deckimages/kashtira.png' },
  { name: '十二獣', image: '/static/deckimages/zoodiac.png' },
  { name: 'ホルス', image: '/static/deckimages/horus.png' },

  { name: 'エンディミオン', image: '/static/deckimages/endymion.png' },

  { name: 'その他1', image: '/static/deckimages/others_01.png' },
  { name: 'その他2', image: '/static/deckimages/others_02.png' },
  // { name: 'キマイラ', image: '/static/deckimages/spright.png' },
];
