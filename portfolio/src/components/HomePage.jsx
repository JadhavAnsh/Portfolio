import { useEffect, useState } from "react";
import backgroundImg from "../assets/img/banner-bg.png";
import headerImg from "../assets/img/header-img.svg";

export const HomePage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "App Developer", "Web Developer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    setDelta(isDeleting ? prev => prev / 2 : delta);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-screen flex items-center bg-cover px-6"
      style={{ 
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-5 text-white">
            <span className="text-lg font-medium tracking-wide">Welcome to my Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi! I'm Ansh Jadhav <br /> <span className="text-cyan-400">{text}</span>
            </h1>
            <p className="text-base md:text-lg max-w-xl">
            Enthused About Creating Unrivaled Webpages and Apps as an Ambitious
            UI Artist and Application Builder.
            </p>
            <button
              onClick={() => console.log('connect')}
              className= " text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2"
            >
              Let’s Connect <i className="bi bi-arrow-right-circle text-white text-2xl"></i>
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-end">
            <img src={headerImg} alt="Header" className="w-[80%] max-w-md animate-fadeIn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;