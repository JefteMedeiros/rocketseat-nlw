import React, { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

//Objeto com objetos?
export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes; //Criando uma tipagem que vai receber a chave do tipo de feedbackTypes (objeto)

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <>
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
        ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackSent={() => setFeedbackSent(true)}
                onFeedbackRestartRequested={handleRestartFeedback}
              />
            )}
          </>
        )}

        {/* Acima, um exemplo de um ternário com mais de uma condição */}

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
