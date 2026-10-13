import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageSwitcher } from "./i18n";

function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </div>
  );
}

export default App;
