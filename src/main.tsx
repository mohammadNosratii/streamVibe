import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { defaultTanstackQueryOptions } from "./configs/tanstackQuery.ts";

const queryClient = new QueryClient({
  defaultOptions: defaultTanstackQueryOptions,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
      >
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster
            toastOptions={{
              className:
                "font-manropeMedium !bg-mailLight dark:!bg-mainDark !text-black dark:!text-white",
            }}
            reverseOrder={true}
          />
        </QueryClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);
