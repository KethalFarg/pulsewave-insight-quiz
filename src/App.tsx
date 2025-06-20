
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
import Slide_05_ProviderLoadingPopup from "./pages/Slide_05_ProviderLoadingPopup";
import Slide_06_Info_Over1Million from "./pages/Slide_06_Info_Over1Million";
import Slide_07_AgeRange_male from "./pages/Slide_07_AgeRange_male";
import Slide_07_AgeRange_female from "./pages/Slide_07_AgeRange_female";
import Slide_08_Info_EliteInstitutions from "./pages/Slide_08_Info_EliteInstitutions";

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
          <Route path="/slide_05_providerloadingpopup" element={<Slide_05_ProviderLoadingPopup />} />
          <Route path="/slide_06_info_over1million" element={<Slide_06_Info_Over1Million />} />
          <Route path="/slide_07_agerange_male" element={<Slide_07_AgeRange_male />} />
          <Route path="/slide_07_agerange_female" element={<Slide_07_AgeRange_female />} />
          <Route path="/slide_08_info_eliteinstitutions" element={<Slide_08_Info_EliteInstitutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
