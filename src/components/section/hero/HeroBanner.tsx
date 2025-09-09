import Image from "next/image";

interface HeroBannerProps {
  backgroundImage?: string;
  className?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ backgroundImage, className = "" }) => {
  return (
    <section className={`relative h-96 w-full flex items-center justify-center ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover object-bottom rounded-2xl shadow-[4px_4px_0_rgba(0,0,0,1)]"
            priority
          />
        </div>
      )}
    </section>
  );
};
