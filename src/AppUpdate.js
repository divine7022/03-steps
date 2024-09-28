import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function AppUpdate() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in the content</p>
        <p>🫰</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
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

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
              <span>😊</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, text, emoji, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
