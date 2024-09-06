import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from "redux/store";

import router from "routes/routes.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="Loading">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
        <Toaster
          expand={true}
          closeButton
          richColors
          duration={2000}
          toastOptions={{
            style: {
              padding: "16px 10px",
            },
          }}
        />
      </Provider>
    </Suspense>
  </StrictMode>
);
