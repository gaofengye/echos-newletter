import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { Merriweather } from "next/font/google";
import "../globals.css";

export const merriweather = Merriweather({ subsets: ["latin"], weight: "700" });

export default function Layout({ children }) {
  return (
    <MantineProvider>
      <main>{children}</main>
    </MantineProvider>
  )
}