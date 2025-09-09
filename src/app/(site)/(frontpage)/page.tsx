import { Calendar } from "@/components/icons/Calendar";
import { Star } from "@/components/icons/Star";
import { Trophy } from "@/components/icons/Trophy";
import Countdown from "@/components/section/countdown/Countdown";
import { Header } from "@/components/section/header/Header";
import { Sticker } from "@/components/section/sticker/Sticker";
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-items-center">
      <Header />
      <section className="h-[calc(100vh-7rem)] mt-[-3.5rem] flex flex-col items-center justify-center leading-[1] animate-fadein cursor-default">
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
      <Link href="/events/bongurrence">
        <Sticker />
      </Link>
      <div className="flex flex-row divide-brand-blue divide-x-2">
        <div className="px-4">
          <Trophy />
        </div>
        <div className="px-4">
          <Calendar />
        </div>
        <div className="px-4">
          <Star />
        </div>
      </div>
    </div>
  );
}
