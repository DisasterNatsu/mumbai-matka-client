"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent dev tools from opening when CTRL+Shift+I or F12 is pressed
      if (
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
        event.keyCode === 123
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </div>
  );
}
