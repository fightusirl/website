import Countdown from "@/components/section/countdown/Countdown";
import { Header } from "@/components/section/header/Header";
import { Sticker } from "@/components/section/sticker/Sticker";
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen items-center justify-items-center gap-16 bg-[radial-gradient(circle_at_top_left,_#C1D26C33,_transparent_50%),radial-gradient(circle_at_bottom_right,_#FF6FB533,_transparent_50%),linear-gradient(to_bottom_right,_#C1D26C33,_#FF6FB533)]">
      <Header />

      <section className="h-[calc(100vh-7rem)] mt-[-3.5rem] flex flex-col items-center justify-center leading-[1] animate-fadein  cursor-default">
        <div className="flex flex-row gap-8">
          <span className="font-bubble block text-[124px] text-white text-center font-outline-2 text-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Welcome to
          </span>
          <Image src="/kaj.svg" alt="FightUsIRL logo" width={124} height={124} priority />
        </div>
        <span className="font-bubble block text-[124px] font-outline-2 text-shadow-[4px_4px_0_rgba(0,0,0,1)] text-white text-center">
          FightUsIRL
        </span>
        <Text size="lg" className="mt-12 mb-2 font-mono">
          Next event in:
        </Text>
        <Countdown targetDate="2025-09-06T14:00:00" />
      </section>
      <Link href="/bongurrence">
        <Sticker />
      </Link>
      {/* <footer className="flex items-center justify-center" ></footer> */}
    </div>
  );
}
