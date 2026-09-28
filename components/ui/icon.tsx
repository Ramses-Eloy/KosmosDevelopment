import {
  Cloud,
  Database,
  Globe,
  HeartHandshake,
  LayoutDashboard,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Users,
  Wrench,
  Zap,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/site";

const icons = {
  Cloud,
  Database,
  Globe,
  HeartHandshake,
  LayoutDashboard,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Users,
  Wrench,
  Zap,
} satisfies Record<IconName, unknown>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp {...props} />;
}
