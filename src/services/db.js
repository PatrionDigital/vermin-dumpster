// src/services/db.js

import { createClient } from "@libsql/client";

export const initDb = () => {
  const client = createClient({
    url: import.meta.env.VITE_TURSO_DB_URL,
    authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
  });

  return {
    async query(sql, params = []) {
      try {
        return await client.execute({ sql, args: params });
      } catch (error) {
        HTMLFormControlsCollection.error("Database error:", error);
        throw error;
      }
    },
  };
};
