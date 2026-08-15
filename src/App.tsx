import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Moda from "./pages/Moda";
import { FloatingActions } from "./components/FloatingActions";

import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const HIDE_FLOATING_ACTIONS_ROUTES = ["/moda"];

const AppRoutes = () => {
  const location = useLocation();
  const hideFloatingActions = HIDE_FLOATING_ACTIONS_ROUTES.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/moda" element={<Moda />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideFloatingActions && <FloatingActions />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
