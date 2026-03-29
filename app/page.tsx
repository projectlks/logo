import Image from "next/image";

type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

type GalleryCard = ImageAsset & {
  wrapperClassName: string;
};

const BLACK_CARD_CLASS =
  "bg-black rounded-[28px] aspect-square overflow-hidden";
const WHITE_CARD_CLASS =
  "bg-white border border-gray-300 flex justify-center items-center rounded-[28px] aspect-square overflow-hidden";
const UNOPTIMIZED_IMAGE_SRCS = new Set(["/0.gif", "/4.png", "/6.gif"]);
const EAGER_IMAGE_SRCS = new Set(["/1.png"]);

const createGalleryCard = (
  src: string,
  {
    width = 700,
    height = 700,
    wrapperClassName = BLACK_CARD_CLASS,
  }: Partial<GalleryCard> = {},
): GalleryCard => ({
  src,
  width,
  height,
  wrapperClassName,
});

const PRIMARY_GALLERY_CARDS: GalleryCard[] = [
  createGalleryCard("/1.png"),
  createGalleryCard("/2.png"),
  createGalleryCard("/3.png"),
  createGalleryCard("/4.png"),
  createGalleryCard("/5.png"),
  createGalleryCard("/6.gif", {
    width: 200,
    height: 200,
    wrapperClassName: WHITE_CARD_CLASS,
  }),
  createGalleryCard("/8.png"),
  createGalleryCard("/9.png"),
  createGalleryCard("/10.png"),
];

const SECONDARY_GALLERY_CARDS: GalleryCard[] = [
  createGalleryCard("/11.png"),
  createGalleryCard("/12.png"),
  createGalleryCard("/13.png"),
  createGalleryCard("/14.png"),
];

const WIDE_GALLERY_CARDS: ImageAsset[] = Array.from(
  { length: 19 },
  (_, index) => ({
    src: `/${index + 15}.png`,
    width: 740,
    height: 360,
  }),
);

type SiteImageProps = ImageAsset & {
  className?: string;
  includeRatioData?: boolean;
};

function SiteImage({
  src,
  width,
  height,
  className,
  includeRatioData = false,
}: SiteImageProps) {
  return (
    <Image
      className={className}
      alt=""
      {...(includeRatioData ? { "data-heightwidthratio": "1" } : {})}
      width={width}
      height={height}
      src={src}
      loading={EAGER_IMAGE_SRCS.has(src) ? "eager" : undefined}
      unoptimized={UNOPTIMIZED_IMAGE_SRCS.has(src)}
    />
  );
}

function GalleryImageCard({ card }: { card: GalleryCard }) {
  return (
    <div className={card.wrapperClassName}>
      <SiteImage
        className="block"
        src={card.src}
        width={card.width}
        height={card.height}
        includeRatioData
      />
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white px-4 py-6 pb-10 sm:px-6 sm:py-8 sm:pb-12 md:px-10 md:py-11 md:pb-16">
      <div className="flex justify-between">
        <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full"></span>

        <div className="h-16 flex items-end">
          <span className="w-26 h-10 bg-[#141D23] text-white rounded-full flex items-center justify-center">
            <span>Contact</span>
          </span>
        </div>
      </div>
      <div className="mt-11 grid grid-cols-2  lg:grid-cols-4 gap-10">
        <div className="rounded-[28px] lg:col-span-1 col-span-2 lg:aspect-square">
          <SiteImage
            className="block"
            includeRatioData
            width={88}
            height={88}
            src="/0.gif"
          />
          <div className="mt-16 text-[22px]">
            <p className="font-bold">iconwerk,</p>
            <p className="font-normal leading-tight">
              custom icon design for your next project.
            </p>
          </div>
        </div>
        {PRIMARY_GALLERY_CARDS.map((card) => (
          <GalleryImageCard key={card.src} card={card} />
        ))}
        <div className="lg:aspect-square text-[22px] lg:col-span-1 col-span-2">
          <p className="font-bold">Simple, clear, useful.</p>
          <p className="font-normal leading-tight">
            Using the latest technology to build future-proof systems which also
            speak to the future.
          </p>
        </div>
      </div>
      <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {SECONDARY_GALLERY_CARDS.map((card) => (
          <GalleryImageCard key={card.src} card={card} />
        ))}
      </div>
      <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full my-27.5 "></span>
      <SiteImage
        className="block h-17.5"
        width={300}
        height={200}
        src="/l.svg"
      />
      <div className="min-h-17.5 ">
        <p className=" text-[24px] mt-13 ">
          <span className=" font-semibold">Google, IKEA</span> & you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-18 ">
        <SiteImage
          className="block w-full"
          width={760}
          height={530}
          src="/l1.png"
        />
        <SiteImage
          className="block w-full"
          width={760}
          height={530}
          src="/r1.png"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5 mt-40 ">
        {WIDE_GALLERY_CARDS.map((card) => (
          <div key={card.src} className="w-full rounded-[28px] overflow-hidden">
            <SiteImage
              className="block w-full"
              includeRatioData
              width={card.width}
              height={card.height}
              src={card.src}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-18 ">
        <SiteImage
          className="block w-full"
          width={760}
          height={530}
          src="/l2.png"
        />
        <SiteImage
          className="block w-full"
          width={760}
          height={530}
          src="/r2.png"
        />
      </div>
      <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full my-18 "></span>
      <SiteImage
        className="block w-20"
        width={760}
        height={530}
        src="/w.svg"
      />
      <p className="mt-8 mb-20 text-2xl font-bold">Let’s work together!</p>
      <SiteImage
        className="block rounded-[28px] overflow-hidden"
        width={360}
        height={360}
        src="/p.png"
      />
      <div className="md:w-1/2 w-full  text-[22px]  ">
        <p className="my-6">
          Just send an email. I’d love to join your design team for the next
          project to build great products together!
        </p>

        <p>–Stefan Dziallas</p>
      </div>

      <div className="flex gap-5 h-16 mt-16 mb-36 ">
        <SiteImage
          className="block rounded-[28px] overflow-hidden"
          width={181}
          height={64}
          src="/email.svg"
        />
        <SiteImage
          className="block rounded-[28px] overflow-hidden"
          width={64}
          height={64}
          src="/x.svg"
        />
        <SiteImage
          className="block rounded-[28px] overflow-hidden"
          width={64}
          height={64}
          src="/ig.svg"
        />
      </div>

      <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full mb-18 "></span>

      <SiteImage
        width={80}
        height={80}
        src="/pencil.svg"
      />
      <div className="md:w-1/2 w-full">
        <p className="text-[22px] mt-7.5 mb-1">Smallprint, etc.</p>
        <p className="text-base text-pretty">
          Copyright © iconwerk 1999–2025. All rights reserved. All other
          trademarks are the property of their respective owners. Imprint. If
          actual people, companies, bands, or animals are referred to, it’s in
          the spirit of tribute and free advertising. EU: Intra-Community
          supply. Apply the Reverse-Charge-Procedure. With any collaboration you
          accept the general terms and conditions of iconwerk. While you’re
          reading this, I’m shopping or at the movies.
        </p>
      </div>
    </div>
  );
}
