import nlp from "compromise";
import { useState } from "react";
import "./style.css";
import keys from "./keys.json";
const log = console.log;
type tag = {
  ch: string;
  en: string;
};
const littlePrince: string = `Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing.

boa constrictor swallowing an animal
In the book it said: "Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move, and they sleep through the six months that they need for digestion."

I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. It looked something like this:

Drawing Number One
I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them.

But they answered: "Frighten? Why should any one be frightened by a hat?"

My drawing was not a picture of a hat. It was a picture of a boa constrictor digesting an elephant. But since the grown-ups were not able to understand it, I made another drawing: I drew the inside of a boa constrictor, so that the grown-ups could see it clearly. They always need to have things explained. My Drawing Number Two looked like this:

Drawing Number Two
The grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them.

So then I chose another profession, and learned to pilot airplanes. I have flown a little over all parts of the world; and it is true that geography has been very useful to me. At a glance I can distinguish China from Arizona. If one gets lost in the night, such knowledge is valuable.

In the course of this life I have had a great many encounters with a great many people who have been concerned with matters of consequence. I have lived a great deal among grown-ups. I have seen them intimately, close at hand. And that hasn't much improved my opinion of them.

Whenever I met one of them who seemed to me at all clear-sighted, I tried the experiment of showing him my Drawing Number One, which I have always kept. I would try to find out, so, if this was a person of true understanding. But, whoever it was, he, or she, would always say:

"That is a hat."

Then I would never talk to that person about boa constrictors, or primeval forests, or stars. I would bring myself down to his level. I would talk to him about bridge, and golf, and politics, and neckties. And the grown-up would be greatly pleased to have met such a sensible man.`;

export default function NlpTest() {
  const tags: tag[] = keys;
  const [content, setContent] = useState<string>(littlePrince);
  const [selected, setSelected] = useState<Set<string>>(new Set<string>());

  const handleReadClipboard = () => {
    navigator.clipboard.readText().then(setContent);
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    log(e.target.files);
    e.target.files![0].text().then(setContent);
  };
  log(selected);
  return (
    <div>
      <div className="edit-area">
        <div>
          <input type="file" onChange={handleFileSelect} />
          <button onClick={handleReadClipboard}>read from clipboard</button>
        </div>
        <textarea value={content} onChange={handleTextChange}></textarea>
      </div>
      <div className="key_button_container">
        {tags.map((t, i) => (
          <button
            className={`btn btn-light key_button ${
              selected.has(t.en) ? "active" : ""
            }`}
            key={i}
            value={t.ch}
            onClick={() => {
              if (selected.has(t.en)) selected.delete(t.en);
              else selected.add(t.en);
              setSelected(new Set<string>(selected));
            }}
          >
            {t.ch}
          </button>
        ))}
      </div>
      <Display content={content} targetTags={selected} />
    </div>
  );
}
type DisplayProps = {
  content: string;
  targetTags: Set<string>;
};
function Display({ content, targetTags }: DisplayProps) {
  let doc = nlp(content);

  function overlap<T>(one: Set<T>, two: Set<T>) {
    for (let x of [...one]) if (two.has(x)) return true;
    return false;
  }

  return (
    <div className="content">
      {doc.termList().map((l, i) =>
        overlap(l.tags!, targetTags) ? (
          <Blank key={i} text={l.text} />
        ) : (
          <span key={i}>
            {l.text}
            {l.post}
          </span>
        )
      )}
    </div>
  );
}

type Props = { text: string };
function Blank({ text }: Props) {
  const [correct, setCorrect] = useState(false);

  const isCorrect = (value: string) =>
    value.toLowerCase() === text.toLowerCase();

  const check = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCorrect(isCorrect(value));
  };

  return (
    <input
      type="text"
      onChange={check}
      size={text.length}
      className={`blank ${correct}`}
    />
  );
}

function MultiButton({ data }: any) {
  return <div></div>;
}
