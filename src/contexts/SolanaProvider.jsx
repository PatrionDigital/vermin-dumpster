import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Connection, PublicKey } from "@solana/web3.js";
import { createEdgeClient } from "@honeycomb-protocol/edge-client";

const SolanaContext = createContext(null);

export default function SolanaProvider({ children }) {
  const [connection, setConnection] = useState(null);
  const [honeycombClient, setHoneycombClient] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeSolana = async () => {
      try {
        // Initialize Solana connection
        const conn = new Connection(import.meta.env.VITE_SOLANA_RPC_URL);
        setConnection(conn);

        // Initialize Honeycomb client
        const client = createEdgeClient(
          import.meta.env.VITE_HONEYCOMB_API_URL,
          true
        );
        setHoneycombClient(client);

        setLoading(false);
      } catch (error) {
        console.error("Failed to initialize Solana:", error);
        setLoading(false);
      }
    };

    initializeSolana();
  });

  return (
    <SolanaContext.Provider
      value={{ connection, honeycombClient, wallet, setWallet, loading }}
    >
      {children}
    </SolanaContext.Provider>
  );
}

SolanaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SolanaContext };
