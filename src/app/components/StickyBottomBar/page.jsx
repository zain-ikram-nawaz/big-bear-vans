"use client"
import { FaQuestionCircle, FaShuttleVan } from "react-icons/fa";
import CustomButton from "../Common/Buttons/page";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 z-999 w-full bg-white shadow-md py-3">
      <div className="flex justify-center gap-6">
        <CustomButton
          bgColor="bg-gray-300"
          text="Ask a Question"
          icon={FaQuestionCircle}
        />
        <CustomButton
          bgColor="bg-gray-300"
          text="Van for Sale"
          icon={FaShuttleVan}
        />
      </div>
    </div>
  );
}
