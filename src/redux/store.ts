import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import authSlice from "./features/auth/authSlice";
import offcanvasSlice from "./features/offcanvas/offcanvasSlice";

//create persistor for storing the state in local storage and rehydrate the state

const persistConfig = {
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice);

// Create a store using the baseApi and authSlice
export const store = configureStore({
  reducer: {
    // Add the baseApi reducer to the store
    [baseApi.reducerPath]: baseApi.reducer,
    // Add the authSlice reducer to the store
    auth: persistedAuthReducer,
    offcanvas : offcanvasSlice
  },
  // Add the baseApi middleware to the store for handling API requests
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const persistor = persistStore(store);
