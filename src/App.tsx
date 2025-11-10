import { ThemeProvider } from "@/components/theme-provider";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.store";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    {<RouterProvider router={router} />}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                    >{`${isOpen ? "Close" : "Open"} the devtools panel`}</button>
                    {isOpen && (
                        <ReactQueryDevtoolsPanel
                            onClose={() => setIsOpen(false)}
                        />
                    )}
                </QueryClientProvider>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
