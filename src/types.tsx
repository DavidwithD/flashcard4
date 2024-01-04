export type TCard = {
  id: string;
  quiz: string;
  hint: string;
  answer: string;
  note: string;
  correct: number;
  uncorrect: number;
  rating: number;
};

export type TBook = {
  id: string;
  name: string;
  description: string;
  cards: TCard[];
};
