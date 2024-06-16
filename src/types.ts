export type Deck = {
  name: string;
  image: string; // 代表画像のURL
}

export type Tier = {
  name: string;
  decks: Deck[];
}
