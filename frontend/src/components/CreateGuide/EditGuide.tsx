// import Editor from "../Editor/Editor";
import { motion } from "motion/react";
import Step from "./Step";
import { Plus } from "lucide-react";
import { useContext } from "react";
import { Context } from "@/Contexts/Context";

function EditThread() {
  const useSafeContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useSafeContext must be used within a ContextProvider");
    }
    return context;
  };
  const { guideTitle, setGuideTitle, steps ,setSteps, guideDesc,setGuideDesc} = useSafeContext();
  const addStep = () => {
    setSteps((prev) => {
      return [...prev,[prev.length + 1, ""]];
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="w-full relative"
    >
      <textarea
        className="text-5xl font-semibold w-full px-6 mb-4"
        placeholder="Title..."
        rows={3}
        value={guideTitle}
        onChange={(e) => setGuideTitle(e.target.value)}
      ></textarea>
      <div className="flex flex-col mb-14 ml-6 w-full">
        <label htmlFor="guideDesc" className="text-slate-400 text-base">
          Guide Description
        </label>
        <textarea
          id="guideDesc"
          className="w-4/5 border-b border-slate-300  py-1 px-3"
          value={guideDesc}
          onChange={(e) => setGuideDesc(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-center flex-col border-t-2 border-slate-300 pt-5">
        {steps.map((_step, index) => (
          <Step key={index} number={index + 1} />
        ))}
      </div>
      <div
        onClick={addStep}
        className=" sticky bottom-0 w-4/5 mx-auto rounded-md p-2 cursor-pointer hover:bg-slate-300 bg-slate-50 flex justify-center gap-2 border border-[#3800A7] mb-4 items-center"
      >
        <div className="rounded-sm border border-black px-1">
          <Plus className="w-4 " />
        </div>
        <p className="text-sm">Add Step</p>
      </div>
    </motion.div>
  );
}

// const steps: number[] = [1, 2];

export default EditThread;
