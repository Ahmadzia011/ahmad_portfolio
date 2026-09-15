import type { Metadata } from "next";
import Dashboard from "./homepage/page";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <Dashboard />;
}
