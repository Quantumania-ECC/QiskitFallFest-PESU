import { ReactNode } from "react";

type PageBackgroundProps = {
  children: ReactNode;
};

export default function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div
      className="min-h-screen text-gray-900 bg-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/2025/Full_Illustration.png')",
      }}
    >
      <div className="bg-white bg-opacity-80 min-h-screen">
        {children}
      </div>
    </div>
  );
}
