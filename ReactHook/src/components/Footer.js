import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)
console.log(useContext(ThemeContext))
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <footer className="footer" style={{
      backgroundColor: isDark ? 'black' : 'white',
    }}>
      <button className="button" onClick={toggleTheme}>Dark Mode</button>
    </footer>
  )
}

export default Footer;