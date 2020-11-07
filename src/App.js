import "./App.css";
import { UseWalletProvider } from "use-wallet";
import { BrowserRouter } from "react-router-dom";
import ROUTES, { RenderRoutes } from "./helpers/routes";

function App() {
  return (
    <BrowserRouter>
      <UseWalletProvider
        connectors={{
          walletconnect: { rpcUrl: "https://mainnet.eth.aragon.network/" },
        }}
      >
        <div className="App">
          <header className="App-header">
            <RenderRoutes routes={ROUTES} />
          </header>
        </div>
      </UseWalletProvider>
    </BrowserRouter>
  );
}

export default App;
