import { ReactNode } from "react";
import { AuroraBackground } from "../components/Modules/AuroraBackground/AuroraBackground";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] sm:hidden">
        {children}
      </div>
      <AuroraBackground>{children}</AuroraBackground>
    </>
  );
}
