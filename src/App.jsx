import React,{useState} from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from 'react-router-dom';

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
   useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  DN
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent&& (<div className='main w-full '>
        <div className='landing w-full h-screen bg-black'>
        <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10  '>
          <nav className=" ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-white text-lg">DHANNITI</span>
        </div>

        {/* Right: Nav Links + Auth */}
        <div className="flex items-center space-x-6 text-white font-medium">
         <Link to="/features" className="hover:text-grey-600">Features</Link>
          <Link to="/pricing" className="hover:text-grey-600">Pricing</Link>
          <Link to="/login" className="hover:text-grey-600">Login</Link>
          <Link to="/signup" className="bg-yellow-400 text-white px-4 py-2 rounded">Signup</Link>
        </div>

      </div>
    </nav>
        </div>
       <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky  w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute  bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
             
               <img
                className="absolute character  p-30 -bottom-[150%] left-2/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./boy.png"
                alt=""
              />
                <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">

            </div>
            </div>
      </div>
      <div className='w-full h-screen flex items-center justify-center  bg-black'>
        <div className='cntnr flex text-white w-full h-[80%] '>
          <div className='leftimg w-1/2 relative h-full'>
            <img className="absolute top-1/2 left-1/2 scale-[0.8] -translate-x-1/2 -translate-y-1/2 "src="./ss.png" alt="" />
          </div>
       <div className='pt-30'>
      <h2 className="text-4xl font-bold mb-6">Why Dhanniti?</h2>
      <ul className="space-y-6 text-lg text-gray-300">
        <li className="flex items-start">
          <span className="text-green-400 text-xl mr-3">✔</span>
          <span><strong>Fast Buy & Sell Execution</strong> — Execute orders in seconds with a simple, responsive interface.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 text-xl mr-3">✔</span>
          <span><strong>Zero Complexity</strong> — No clutter, no noise. Just clean, focused trading.</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 text-xl mr-3">✔</span>
          <span><strong>Flat, Transparent Pricing</strong> — Trade with confidence and no hidden fees.</span>
        </li>
      </ul>
    </div>
        </div>
        
      </div>
      <div className="text-center py-12 bg-black">
  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
    Open a Dhanniti account
  </h2>
  <p className="text-white text-lg mb-6">
    Smart investing made simple — ₹0 investments, flat ₹20 intraday and F&O trades.
  </p>
  <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
    Sign up for free
  </button>
</div>

      
      </div>)}
     
    </>
  )
}

export default App;