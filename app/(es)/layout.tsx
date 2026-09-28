import type { ReactNode } from "react";
import { baseMetadata, RootShell, viewport as baseViewport } from "@/components/root-shell";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
