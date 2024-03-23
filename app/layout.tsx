import "./globals.css";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} sm:px-5`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <GoogleAnalytics gaId="G-DN983T9MER" />
        </ThemeProvider>
      </body>
    </html>
  );
}
