
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/Confirmation";
import LoadingPage from "./pages/LoadingPage";
import AdminPanel from "./pages/AdminPanel";
import Index from "./pages/Index";
import PlanoMensal from "./pages/PlanoMensal";
const queryClient = new QueryClient();
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Obrigado from "./pages/Obrigado";




const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/salvando" element={<LoadingPage />} />
          <Route path="/confirmacao" element={<Confirmation />} />
          <Route path="/plano-mensal" element={<PlanoMensal />} />
          <Route path="/admin" element={<AdminPanel />} /> 
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
