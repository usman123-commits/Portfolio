import { Metadata } from "next";
import RedEdgeCaseStudy from "./RedEdgeCaseStudy";

export const metadata: Metadata = {
  title: "RedEdge — Field Service App | Operata",
  description:
    "RedEdge is an offline-first mobile field service app that replaces paper checklists with a structured digital workflow, client sign-off, and auto-generated PDF reports.",
};

export default function RedEdgePage() {
  return <RedEdgeCaseStudy />;
}
