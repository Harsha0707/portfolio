import { IoPartlySunny } from "react-icons/io5";
import { useDarkMode } from "../context/DarkModeContext";
import { FaCloudMoon } from "react-icons/fa";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button class="toggle-btn" onClick={toggleDarkMode}>
      {isDarkMode ? <IoPartlySunny /> : <FaCloudMoon />}
    </button>
  );
}

export default DarkModeToggle;
