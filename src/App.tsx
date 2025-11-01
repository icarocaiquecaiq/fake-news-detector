import { ThemeProvider } from "@/components/theme-provider";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.store";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
