import { Toaster } from "react-hot-toast";

import Header from "./ui/Header";
import Main from "./ui/Main";
import Footer from "./ui/Footer";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--dark-text-color)",
            color: "var(--color-primary)",
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
