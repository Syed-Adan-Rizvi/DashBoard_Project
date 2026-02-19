import "./globals.css";
import DashboardLayout from "@/components/dasboardlayout/DashboardLayout"; // Naya component import karein

export const metadata = {
  title: "LookCheck Dashboard",
  description: "Dashboard layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Sara logic ab DashboardLayout handle karega */}
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}