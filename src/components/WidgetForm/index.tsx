import React, { useState } from "react";

import CloseButton from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

//Objeto com objetos? 
const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OHTER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

// Object.entries(feedbacktypes) =>

/**
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['THOUGHT', {...}]
 * ]
 */

type FeedbackType = keyof typeof feedbackTypes; //Criando uma tipagem que vai receber a chave do tipo de feedbackTypes (objeto)

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <>
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <header>
          <span className="text-xl leading-6">Deixe seu feedback!</span>
          <CloseButton />
        </header>

        {!feedbackType ? (
          <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => { //destructuring de um array com key e value
            return (
              <button
                  key={key}
                  className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                  onClick={() => setFeedbackType(key as FeedbackType)} //Inferindo o tipo da key
                  type="button"
                >

                <img src={value.image.src} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
        ) : (
          <p>Hello World!</p>
        )}

        <footer className="text-xs text-neutral-400">
          Feito com ♥ pelo{" "}
          <a
            href="https://www.github.com/JefteMedeiros"
            target="_blank"
            className="underline underline-offset-2"
          >
            Jefté
          </a>
        </footer>
      </div>
    </>
  );
};

export default WidgetForm;
