import Header from "./components/Login/Header";
import { LoginProvider } from "./contexts/LoginContext";

const App = () => {
  return (
    <LoginProvider>
      <div className="container">
        <Header />
      </div>
    </LoginProvider>
  );
};

export default App;
