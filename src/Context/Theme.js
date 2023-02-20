import { createContext, useState } from "react";

const Theme = createContext();


const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState("light");

    const handleTheme = (value) => {
        if (value === "light") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }

    const data = {theme,handleTheme};

    return(
        <Theme.Provider value={data}>{children}</Theme.Provider>
    )
}

export {ThemeProvider};
export default Theme;