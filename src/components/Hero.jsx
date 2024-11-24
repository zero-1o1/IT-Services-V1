import { HERO_CONTENT } from "../constants";
import "./Hero.css"; // Import custom CSS for terminal glow effect

const Hero = () => {
  return (
    <div className="bg-TermDrkBrn">
      <section className="max-w-7xl mx-auto border-b-2 border-b-black">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold terminal-glow">
            {HERO_CONTENT.title}
          </h1>
          <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter terminal-glow">
            {HERO_CONTENT.subtitle}
          </p>
          <img
            src={HERO_CONTENT.Image}
            className="w-full h-[65vh] object-cover rounded-2xl p-2"
            alt="Hero"
          />
        </div>
      </section>
    </div>
  );
};
export default Hero