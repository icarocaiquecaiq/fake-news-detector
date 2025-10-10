import { ThemeProvider } from "@/components/theme-provider";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
