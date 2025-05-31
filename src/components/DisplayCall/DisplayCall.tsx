import "./DisplayCall.css";
import { Typewriter } from "react-simple-typewriter";

export default function DisplayCall() {
  return (
    <>
      <main className="displayCallFull">
        <img
          src="/logos/dulaso/logoDulaso.svg"
          className="logo"
          alt="Dulaso logo"
        />
        <div className="typing-container">
          <span className="typing-text">
            <Typewriter
              words={["Vamos crescer ", "Juntos", "Vamos mais Longe", "Juntos"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
      </main>
    </>
  );
}
