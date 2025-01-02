import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import Home from "./pages/Home";
import NotFound from "./components/not-found";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<SignIn />} />
      <Route
        path="/home"
        element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
