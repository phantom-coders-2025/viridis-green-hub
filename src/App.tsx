import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CarbonCalculator from "./pages/CarbonCalculator";
import SustainabilityScorePage from "./pages/SustainabilityScorePage";
import DataImport from "./pages/DataImport";
import AIInsights from "./pages/AIInsights";
import PeerComparison from "./pages/PeerComparison";
import ComplianceReports from "./pages/ComplianceReports";
import Gamification from "./pages/Gamification";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calculator" element={<CarbonCalculator />} />
            <Route path="/score" element={<SustainabilityScorePage />} />
            <Route path="/import" element={<DataImport />} />
            <Route path="/insights" element={<AIInsights />} />
            <Route path="/comparison" element={<PeerComparison />} />
            <Route path="/compliance" element={<ComplianceReports />} />
            <Route path="/gamification" element={<Gamification />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
