//! HERE WE NEED TO CREATE A "DARK-LIGHT MODE" WHICH WE CAN ALSO CREATE USING USECONTEXT HOOK:

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(); //Creating a Context first.

// Defining the Main Component, that shares the data to another Component...
export const ThemeProvider = ({ children }) => {
  //! HERE INSIDE THE COMPONENT WE DEFINES THE VALUES, WHICH WE WNAT TO PASS, [HERE WE CAN ALSO PASS 'STATES']. AS HERE WE NEED TO MANAGE STATE , SO WE USE USESTATE HOOK, THAT DYNAMICALLY CHANGES TO THE UI.

  const [theme, setTheme] = useState("dark"); //THIS IS THE DATA, WHICH OTHER COMPONENTS GETS.

  //WE CAN ALSO DEFIEN THE METHODS ALSO, AS ITS PASSES TO THE CHILD COMPONENT.
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//! HERE ON THE SAME PAGE, WE CAN DEFINE THE USECONTEXT HOOK TO ACCESS THE DATA FROM THE PROVIDER COMPONENT:
export const DarkLight = () => {
  const { theme, handleTheme } = useContext(ThemeContext); //DEFINING THE USECONTEXT HERE
  return (
    <div className={ `flex flex-col gap-2 justify-center items-center h-screen w-screen      ${theme === "dark" ? "bg-black" : "bg-white"}`  }>
      <h1 className= { `text-4xl uppercase     ${theme === "dark" ? "text-white": ""}  ` }>   Dark Light Mode Website </h1>
      <h4 className= { `text-center text-gray-800 uppercase    ${theme === "dark" ? "text-white" : " " } `}> Hello ! Vivek Chaurasiya... </h4>
      <button onClick={handleTheme} className={`border-2 p-2 flex justify-center item-center rounded-2xl cursor-pointer  ${theme === "dark" ? "text-white ": ""} `} >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
