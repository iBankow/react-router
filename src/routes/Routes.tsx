import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { App } from "../App";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { RequireAuth } from "./requiredAuth";

export const Routes = () => (
  <ChakraProvider theme={theme}>
    <ReactRoutes>
      <Route path="login" element={<Login />} />
      <Route
        path="about"
        element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }
      />
      <Route
        path="*"
        element={
          <RequireAuth>
            <App />
          </RequireAuth>
        }
      />
    </ReactRoutes>
  </ChakraProvider>
);
