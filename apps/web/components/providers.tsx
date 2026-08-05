import { TooltipProvider } from "@ph/ui/client";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TooltipProvider delayDuration={80}>{children}</TooltipProvider>;
};

export { Providers };
