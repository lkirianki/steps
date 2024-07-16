import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep(s => (s - 1))
    }

  }

  const handleNext = () => {
    if (step < 3) {
      setStep(s => (s + 1))
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            <h3>step {step}:</h3>
          </p> */}

          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>

          <div className="buttons">
            {/* <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>Previous</button> */}
            <Button bgcolor={"#7950f2"} textcolor={"#fff"} onclick={handlePrevious} ><span>👈</span>previous</Button>
            {/* <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext} > Next</button> */}
            <Button bgcolor={"#7950f2"} textcolor={"#fff"} onclick={handleNext} >Next<span>👉</span></Button>
          </div>
        </div >
      )}


    </>
  )
}

function StepMessage({ step, children }) {
  return <div>
    <p className="message">
      <h3>step {step}:</h3>
      {children}
    </p>
  </div>
}

function Button({ textcolor, bgcolor, onclick, children }) {
  return <button style={{ backgroundColor: bgcolor, color: textcolor }} onClick={onclick}>{children}</button>
}

export default App;