import { LoginProvider } from "./contexts/LoginContext";
import { RouteProvider } from "./contexts/RouterContext";

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
