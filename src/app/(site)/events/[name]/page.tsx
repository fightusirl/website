import { Header } from "@/components/section/header/Header";
import { HeroBanner } from "@/components/section/hero/HeroBanner";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export default async function Event({ params }: { params: { name: string } }) {
  const { name } = await params;
  return (
    <div className="justify-items-center">
      <div className="max-w-5xl w-full px-4">
        <Header />
        <HeroBanner backgroundImage="/banner.png" />
        <div className="mt-8">
          <Heading>{name + " – The Ultimate Beer-Bong Olympics"}</Heading>
          <Text>Event</Text>
          <Button href="https://www.youtube.com/@FightUsIRL" ariaLabel="Youtube">
            Watch highlights
          </Button>
        </div>
      </div>
    </div>
  );
}
