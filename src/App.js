import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Jonas" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // step = step + 1; ( we can't be done in this way)
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1); //here s refers to the step variable
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);

    // BAD PRACTICE
    // test.name = "Fred"
    // setTest({ name: "Fred" });
  }
  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && ( // Conditional Rendring
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
