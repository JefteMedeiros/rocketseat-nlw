import { CircleNotch } from "phosphor-react";

const Loading: React.FC = () => {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden animate-spin">
      {/* Animate spin faz girar qualquer coisa em TW */}
      <CircleNotch weight="bold" className="h-4 w-4" />
    </div>
  );
};

export default Loading;
