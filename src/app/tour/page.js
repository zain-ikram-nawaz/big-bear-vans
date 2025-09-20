import DynamicTour from "../components/DynamicTour/page"

export default function Page() {
  const steps1 = [
    { target: ".step-1", text: "Step 1 text for this page", label: "Wall Panels" },
    { target: ".step-2", text: "Step 2 text for this page", label: "Fridge" },
    { target: ".step-3", text: "Step 3 text for this page", label: "Swivel Table" },
  ];
  const steps2 = [
    { target: ".step-1", text: "Step sczxczczczc", label: "Wall Panels" },
    { target: ".step-2", text: "Step xczczxc2 t", label: "Fridge" },
    { target: ".step-3", text: "Step zxczczcz", label: "Swivel Table" },
  ];
  return (
    <div>
      <h1>Van Customization</h1>

      <DynamicTour steps={steps2} runOnScroll={true} />

      {/* Agar dusre page ya section me alag steps chahiye */}
      {/* <DynamicTour steps={steps2} runOnScroll={false} /> */}
    </div>
  );
}
