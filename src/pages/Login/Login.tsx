import Keycloak from "keycloak-js";
import { useEffect, useRef, useState } from "react";

const client = new Keycloak({
  url: 'https://iam.eu.hub-dev.pushgaming.com/auth',
  realm: 'Jackpots',
  clientId: 'Jackpots-client',
});

const Login = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: 'login-required',
      })
      .then((res) => {
        console.log(res);
        setLogin(res);
        // setToken(client.token);
      });
  }, []);
  return <h1>Login</h1>;
};

export default Login;
