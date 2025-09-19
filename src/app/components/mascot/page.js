import Lottie from "lottie-react";
import mascotAnimation from "../public/zain.json";

export default function Mascot() {
  return (
    <div className="w-40 h-40">
      <Lottie animationData={mascotAnimation} loop={true} />
    </div>
  );
}
