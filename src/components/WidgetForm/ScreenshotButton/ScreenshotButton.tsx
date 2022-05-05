import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import Loading from "../../Loading/Loading";

interface IScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

const ScreenshotButton: React.FC<IScreenshotButtonProps> = ({
  onScreenshotTook,
  screenshot,
}) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!); //a exclamação força a inserção
    const base64image = canvas.toDataURL("image/png"); //tira print da página e converte para o formato base64

    onScreenshotTook(base64image); //Seta os dados da imagem no estado e envia para o outro componente
    setIsTakingScreenshot(false);
  }

  // Posso colocar retornos condicionais na em qualquer componente

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{ //Inserindo objeto 
          backgroundImage: `url(${screenshot})`, //estilo de css que define o background image como a imagem que tiramos na screenshot
          backgroundPosition: 'right-bottom',
          backgroundSize: 180 //CSS Apenas para
        }}
      >
        <Trash weight="fill"/>
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      >
        {/* Animação de loading enquanto a screenshot é tirada */}
        {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
      </button>
    </>
  );
};

export default ScreenshotButton;
