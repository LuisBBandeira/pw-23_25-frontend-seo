import BasicAnimation from "../../components/animations/Slide";
import SpringBasica from "@/components/animations/Spring";
import HoverBasica from "@/components/animations/Hover";
import ListaBasica from "@/components/animations/Lista";
import ScrollAnimation from "@/components/animations/Scroll";

const AnimationsPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <BasicAnimation />
        <SpringBasica/>
        <HoverBasica/>
        <ListaBasica/>
      </div>
      <ScrollAnimation/>
    </>
  );
};

export default AnimationsPage;