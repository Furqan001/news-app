/* eslint-disable @next/next/no-sync-scripts */
"use client";

// import { useState } from "react";

import ThemeProvider from "@/theme/Provider";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import IntlRegistry from "@/registry/intl";

import ReactQueryRegistry from "@/registry/ReactQuery";
// import ColorContextProvider from "@/contexts/ColorModeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id=" next">
        <ThemeProvider attribute="class">
          <IntlRegistry>
            <ReactQueryRegistry>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </ReactQueryRegistry>
          </IntlRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
