import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import KnowledgeSection from "@/components/modules/home/KnowledgeSection";
import WhyDidMediQHappen from "@/components/modules/home/WhyDidMediQHappen";
import WhyMustUseMediQ from "@/components/modules/home/WhyMustUseMediQ";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-20">
      <WhyDidMediQHappen />
      <WhyMustUseMediQ />
      <KnowledgeSection />
    </main>
  );
}
