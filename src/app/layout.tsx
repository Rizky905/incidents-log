import "./globals.css";
import { inter } from "@/app/ui/fonts";
import { Sidebar } from "@/layouts/Sidebar";
import Header from "@/layouts/Header";
import NextTopLoader from "nextjs-toploader";
import QueryProvider from "@/components/custom/query-provider";

export const metadata = {
  title: "Sidebar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <NextTopLoader color="#ff1f27" showSpinner={false} />
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <Header />

            {/* <QueryProvider>{children}</QueryProvider> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
