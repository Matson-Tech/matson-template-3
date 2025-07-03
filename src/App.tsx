import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeddingProvider } from "@/contexts/WeddingProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AllWishes from "./pages/AllWishes";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <WeddingProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/wishes" element={<AllWishes />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </WeddingProvider>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
