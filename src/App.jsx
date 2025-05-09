import { useState, useEffect } from "react";
import {
  useBackButton,
  useViewport,
  useInitData,
} from "@telegram-apps/sdk-react";
import { init } from "@telegram-apps/sdk-react";
import SolanaProvider from "./contexts/SolanaProvider";
import "./App.css";

// Initialize Telegram SDK
init();

function App() {
  const [isLoading, setIsLoading] = useState();
  const backButton = useBackButton();
  const viewport = useViewport();
  const initData = useInitData();

  useEffect(() => {
    // Setup back button
    backButton.mount();

    // Handle back button click
    const handleBackClick = () => {
      console.log("Back button clicked");
    };
    backButton.on("click", handleBackClick);

    // Clean up effect
    return () => {
      backButton.off("click", handleBackClick);
    };
  }, [backButton]);

  useEffect(() => {
    // Check if SDK is ready
    if (viewport && initData) {
      setIsLoading(false);
    }
  }, [viewport, initData]);

  return (
    <SolanaProvider>
      <div className="app-container">
        <header>
          <h1>Vermin Dumpster</h1>
        </header>
        <main>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <div>
              <p>Connected to Telegram!</p>
              {initData.user && (
                <p>Welcome, {initData.user.username || "User"}</p>
              )}
            </div>
          )}
        </main>
      </div>
    </SolanaProvider>
  );
}

export default App;
