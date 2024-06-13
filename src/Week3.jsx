import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import "./reset.css";
import router from "./routes/router";

const queryClient = new QueryClient();
export default function Week3() {
  return (
    <div
      id="Week3"
      className="w-full h-full min-h-[100vh] bg-[#8aa6a3] box-border"
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </div>
  );
}
