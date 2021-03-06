import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import WidgetForm from "../WidgetForm";

const App = () => {
  return (
    <>
      <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md-right-8">
        <Popover.Panel className="text-white">
          <WidgetForm />
        </Popover.Panel>

        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group hover:bg-brand-300 transition-colors">
          <ChatTeardropDots className="w-6 h-6" />

          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2"></span>
            Feedback
          </span>
        </Popover.Button>
      </Popover>
    </>
  );
};

export default App;
