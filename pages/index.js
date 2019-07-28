import "./style.css";
import { useCallback, useEffect } from "react";
import Typed from "typed.js";
import ReactGA from "react-ga";

export default () => {
  const ref = useCallback(node => {
    if (node !== null) {
      new Typed(node, {
        strings: ["내일 뭐해.", "공찰래?"],
        startDelay: 500,
        typeSpeed: 50,
        backDelay: 2000,
        backSpeed: 90
      });
    }
  }, []);

  useEffect(() => {
    ReactGA.initialize("UA-126573052-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="app">
      <div className="title">
        <h1 ref={ref} />
      </div>
      <div className="links">
        <a href="https://codesandbox.io/u/shallwefootball" target="_blank">
          <img
            id="img-cs"
            src="https://user-images.githubusercontent.com/9348198/47128176-2c67e300-d2cb-11e8-832f-4100871fa355.png"
          />
        </a>
        <a href="https://github.com/shallwefootball" target="_blank">
          <img
            id="img-gh"
            src="https://octodex.github.com/images/daftpunktocat-guy.gif"
          />
        </a>
      </div>
    </div>
  );
};
