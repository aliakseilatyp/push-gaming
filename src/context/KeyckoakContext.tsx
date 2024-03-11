import React, { createContext, useState, useEffect, useRef } from 'react';

// KEYCLOACK
import Keycloak from 'keycloak-js';

export const KeycloackContext = createContext<{
  keycloackValue: Keycloak | null;
  authenticated: boolean;
  logout: () => void;
}>({ keycloackValue: null, authenticated: false, logout: () => {} });

const client = new Keycloak({
  url: 'https://iam.eu.hub-dev.pushgaming.com/auth',
  realm: 'Jackpots',
  clientId: 'jackpots-client',
});

export const KeycloackContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [keycloackValue, setKeycloackValue] = useState<Keycloak | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    client
      .init({
        onLoad: 'login-required',
      })
      .then((res) => {
        console.log(client);
        setKeycloackValue(client);
        setAuthenticated(res);
      });
  }, []);

  const logout = () => {
    setKeycloackValue(null);
    setAuthenticated(false);
    client.logout();
  };

  return (
    <KeycloackContext.Provider
      value={{
        keycloackValue,
        authenticated,
        logout,
      }}
    >
      {children}
    </KeycloackContext.Provider>
  );
};
