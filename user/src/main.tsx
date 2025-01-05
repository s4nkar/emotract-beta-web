import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";

import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;
const publishableKey = VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Key was not found");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="emotract-user-theme">
        <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/">
          <App />
        </ClerkProvider>
      </ThemeProvider>
  </StrictMode>
);
