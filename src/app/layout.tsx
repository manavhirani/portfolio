import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="p-12 flex-col gap-10 flex">
            <NavBar />
            <Separator className="" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
