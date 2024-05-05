import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { countReducer } from "./reducer/countReducer";
import { ThemeContext } from "./context/ThemeContext";
import { Button } from "./components/Button/Button";
import { Heading } from "./components/Heading/Heading";

let initialValue = 0;
function App() {
  const [count, dispatch] = useReducer(countReducer, initialValue);
  const [theme, setTheme] = useState("dark");

  const increaseCount = () => {
    dispatch({
      type: "INCREMENT",
      diff: 2,
    });
  };

  const decreaseCount = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const changeTheme = () => {
    if(theme === "dark"){
      setTheme("light")
    } 
    else{
      setTheme("dark")
    }
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div style={{textAlign: "right"}}>
          <Button onClick={changeTheme} buttonText='Change Theme'/>
        </div>
        <div className={`div--${theme}`}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        {/* <Heading className={`text--${theme}`}>Vite + React</h1> */}
        <Heading>Vite + React</Heading>
        <div className={`card div--${theme}`}>
          <Button buttonText={`count is ${count}`} />
          <Button onClick={increaseCount} buttonText="Increment" />
          <Button onClick={decreaseCount} buttonText="Decrement" />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className={`read-the-docs text--${theme}`}>
          Click on the Vite and React logos to learn mo
        </p>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
