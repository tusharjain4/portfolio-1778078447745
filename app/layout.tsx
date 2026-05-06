import type { Metadata } from "next";
import { Manrope, Source_Serif_4, DotGothic16, Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-source-serif-4",
  display: "swap",
});

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dot-gothic-16",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pooja R. Sonar - Software Developer Portfolio",
  description: "Full-stack Software Developer specializing in high-performance real-time systems, MERN stack, and AI-driven web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sourceSerif4.variable} ${dotGothic16.variable} ${archivo.variable} ${archivoNarrow.variable} font-body bg-white text-text`}
      >
        {children}
      </body>
    </html>
  );
}