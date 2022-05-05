import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface IFeedbackContentProps {
  feedbackType: FeedbackType;
}

const FeedbackContentStep = ({feedbackType}: IFeedbackContentProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]; //feedback types na posição key, que mudou de nome para o tipo FeedbackType
  
  return (
    <>
      <header>
        <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt} />
        <span className="text-xl leading-6">{feedbackTypeInfo.title}</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
};

export default FeedbackContentStep;
