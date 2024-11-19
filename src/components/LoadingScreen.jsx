import React, { useEffect, useRef } from "react";

const LoadingScreen = ({ onComplete }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const anim = [
      { t: "{ }", ms: 200 },
      { t: "{_}", ms: 200 },
      { t: "{ }", ms: 200 },
      { t: "{_}", ms: 200 },
      { t: "{I_}", ms: 100 },
      { t: "{IT_}", ms: 100 },
      { t: "{IT _}", ms: 100 },
      { t: "{IT S_}", ms: 100 },
      { t: "{IT SE_}", ms: 100 },
      { t: "{IT SER_}", ms: 100 },
      { t: "{IT SERV_}", ms: 100 },
      { t: "{IT SERVI_}", ms: 100 },
      { t: "{IT SERVIC_}", ms: 100 },
      { t: "{IT SERVICE_}", ms: 100 },
      { t: "{IT SERVICES_}", ms: 100 },
      { t: "{IT SERVICES }", ms: 200 },
      { t: "{IT SERVICES_}", ms: 200 },
      { t: "{IT SERVICES }", ms: 200 },
      { t: "{IT SERVICES_}", ms: 200 },
      { t: "{IT SERVICES}", ms: 200 },
      { t: "{IT SERVICES}", ms: 200 },
    ];

    let i = 0;

    const update = () => {
      if (headerRef.current) {
        const step = anim[i];
        headerRef.current.innerText = step.t;
        i++;

        if (i < anim.length) {
          setTimeout(update, step.ms);
        } else {
          onComplete(); // Signal that the animation is complete
        }
      }
    };

    update();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-yellow-400 text-4xl">
      <h1 ref={headerRef}></h1>
    </div>
  );
};

export default LoadingScreen;