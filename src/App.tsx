
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Slide_02_JointSelect from "./pages/Slide_02_JointSelect";
import Slide_03_ZipCodeEntry from "./pages/Slide_03_ZipCodeEntry";
import Slide_04_FindingProviderPopup from "./pages/Slide_04_FindingProviderPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/slide_02_jointselect" element={<Slide_02_JointSelect />} />
          <Route path="/slide_03_zipcodeentry" element={<Slide_03_ZipCodeEntry />} />
          <Route path="/slide_04_findingproviderpopup" element={<Slide_04_FindingProviderPopup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
