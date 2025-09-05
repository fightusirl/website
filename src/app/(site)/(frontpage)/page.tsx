import { Header } from "@/components/section/header/Header";
import { Sticker } from "@/components/section/sticker/Sticker";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen items-center justify-items-center pb-10 gap-16 bg-[radial-gradient(circle_at_top_left,_#C1D26C33,_transparent_50%),radial-gradient(circle_at_bottom_right,_#FF6FB533,_transparent_50%),linear-gradient(to_bottom_right,_#FDFBF7,_#EAEAEA)]">
      <Header />
      <section className="h-[calc(100vh-7rem)] mb-[-7rem] flex flex-col items-center justify-center leading-[1]">
        <div className="flex flex-row gap-8">
          <span className="font-bubble block text-[124px] text-center">Welcome to</span>
          <Image
            src="/kaj.svg"
            alt="FightUsIRL logo"
            width={124}
            height={124}
            priority
          />
        </div>
        <span className="font-bubble block text-[124px] text-center">FightUsIRL</span>
      <Link href="/bongurrence">
      <Sticker />
      </Link>
      </section>
      {/* <footer className="flex items-center justify-center" ></footer> */}
    </div> 
  );
}