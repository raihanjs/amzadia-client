import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./Providers/ThemeProvider.jsx";
import CartProvider from "./Providers/CartProviders.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <AuthProviders>
            <RouterProvider router={router}></RouterProvider>
          </AuthProviders>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
