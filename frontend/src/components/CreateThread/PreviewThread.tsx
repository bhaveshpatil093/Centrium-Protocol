// import React from 'react'
import { Context } from "@/Contexts/Context";
import { useContext } from "react";
import DOMpurify from "dompurify";
import profpic from "../../assets/rizzking.svg";
import { Dot } from "lucide-react";
function PreviewThread() {
  const useSafeContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useSafeContext must be used within a ContextProvider");
    }
    return context;
  };
  const { post, title } = useSafeContext();
  const safepost = DOMpurify.sanitize(post);
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="font-semibold text-5xl mb-4 px-3 break-words">{title}</h1>
      <div className="flex gap-3 px-3 items-center">
        <div>
          <img src={profpic} alt="" />
        </div>
        <div className="flex flex-col justify-between gap-3">
          <div className="flex gap-3 items-center">
            <span className="font-sofia pr-4 border-r-2 border-slate-400">The Rizz King</span>
            <span className="py-1 px-3 bg-slate-300 rounded-xl text-sm">walletAddy</span>
          </div>
          <div className="flex gap-1 text-sm items-center font-sofia">
            <span>31 July 2024</span>
            <Dot />
            <span>4 minute read</span>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "4px",
          backgroundColor: "#fff",
        }}
        className="w-full"
        dangerouslySetInnerHTML={{ __html: safepost }}
      />
    </div>
  );
}

export default PreviewThread;
