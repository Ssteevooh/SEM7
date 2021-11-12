import { LoginProvider } from "./Contexts/LoginContext";
import { RouteProvider } from "./Contexts/RouterContext";

const App = () => {
  return (
    <LoginProvider>
      <div className="container">
        <RouteProvider />
      </div>
    </LoginProvider>
  );
};

export default App;
