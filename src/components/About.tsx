import MobileRail from "./about/MobileRail";
import DesktopSticky from "./about/DesktopSticky";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 md:scroll-mt-28">
      <MobileRail />
      <DesktopSticky />
    </section>
  );
}
  