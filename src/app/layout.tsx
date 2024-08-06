import type { Metadata } from "next";
import ContextProvider from '@/context'
import { archivoBlack, bebasNeue, montserrat, roboto } from "@/config/fonts";

import './../styles/styles.scss'

export const metadata: Metadata = {
  title: "SalesPlayX",
  description: "Automate time tracking with just one click",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`${roboto.variable} ${montserrat.variable} ${bebasNeue.variable} ${archivoBlack.variable}`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html >
  );
}
