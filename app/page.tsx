import Image from "next/image";

type GalleryCard = {
  src: string;
  width: number;
  height: number;
  wrapperClassName: string;
};
type WideGalleryCard = {
  src: string;
  width: number;
  height: number;
};

const BLACK_CARD_CLASS =
  "bg-black rounded-[28px] aspect-square overflow-hidden";
const WHITE_CARD_CLASS =
  "bg-white border border-gray-300 flex justify-center items-center rounded-[28px] aspect-square overflow-hidden";
const UNOPTIMIZED_IMAGE_SRCS = new Set(["/0.gif", "/4.png", "/6.gif"]);
const EAGER_IMAGE_SRCS = new Set(["/1.png"]);

const GALLERY_CARDS: GalleryCard[] = [
  {
    src: "/1.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/2.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/3.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/4.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/5.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/6.gif",
    width: 200,
    height: 200,
    wrapperClassName: WHITE_CARD_CLASS,
  },
  {
    src: "/8.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/9.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/10.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
];
const GALLERY_CARDS2: GalleryCard[] = [
  {
    src: "/11.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/12.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/13.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
  {
    src: "/14.png",
    width: 700,
    height: 700,
    wrapperClassName: BLACK_CARD_CLASS,
  },
];

const WIDE_GALLERY_CARDS: WideGalleryCard[] = Array.from(
  { length: 19 },
  (_, index) => ({
    src: `/${index + 15}.png`,
    width: 740,
    height: 360,
  }),
);
export default function Page() {
  return (
    <div className="px-10 py-11 pb-16">
      <div className="flex justify-between">
        <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full"></span>

        <div className="h-16 flex items-end">
          <span className="w-26 h-10 bg-[#141D23] text-white rounded-full flex items-center justify-center">
            <span>Contact</span>
          </span>
        </div>
      </div>
      <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="rounded-[28px] lg:col-span-1 col-span-2 lg:aspect-square">
          <Image
            className="block"
            alt=""
            data-heightwidthratio="1"
            width={88}
            height={88}
            src="/0.gif"
            unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/0.gif")}
          />
          <div className="mt-16 text-[22px]">
            <p className="font-bold">iconwerk,</p>
            <p className="font-normal leading-tight">
              custom icon design for your next project.
            </p>
          </div>
        </div>
        {GALLERY_CARDS.map((card) => (
          <div key={card.src} className={card.wrapperClassName}>
            <Image
              className="block"
              alt=""
              data-heightwidthratio="1"
              width={card.width}
              height={card.height}
              src={card.src}
              loading={EAGER_IMAGE_SRCS.has(card.src) ? "eager" : undefined}
              unoptimized={UNOPTIMIZED_IMAGE_SRCS.has(card.src)}
            />
          </div>
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
        {GALLERY_CARDS2.map((card) => (
          <div key={card.src} className={card.wrapperClassName}>
            <Image
              className="block"
              alt=""
              data-heightwidthratio="1"
              width={card.width}
              height={card.height}
              src={card.src}
              loading={EAGER_IMAGE_SRCS.has(card.src) ? "eager" : undefined}
              unoptimized={UNOPTIMIZED_IMAGE_SRCS.has(card.src)}
            />
          </div>
        ))}
      </div>
      <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full my-27.5 "></span>
      <Image
        className="block h-17.5"
        alt=""
        width={300}
        height={200}
        src="/l.svg"
        unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/l.svg")}
      />
      <div className="min-h-17.5 ">
        <p className=" text-[24px] mt-13 ">
          <span className=" font-semibold">Google, IKEA</span> & you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-18 ">
        <Image
          className="block w-full"
          alt=""
          width={760}
          height={530}
          src="/l1.png"
          unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/l1.png")}
        />
        <Image
          className="block w-full"
          alt=""
          width={760}
          height={530}
          src="/r1.png"
          unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/l1.png")}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5 mt-40 ">
        {WIDE_GALLERY_CARDS.map((card) => (
          <div key={card.src} className="w-full rounded-[28px] overflow-hidden">
            <Image
              className="block w-full"
              alt=""
              data-heightwidthratio="1"
              width={card.width}
              height={card.height}
              src={card.src}
              loading={EAGER_IMAGE_SRCS.has(card.src) ? "eager" : undefined}
              unoptimized={UNOPTIMIZED_IMAGE_SRCS.has(card.src)}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-18 ">
        <Image
          className="block w-full"
          alt=""
          width={760}
          height={530}
          src="/l2.png"
          unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/l2.png")}
        />
        <Image
          className="block w-full"
          alt=""
          width={760}
          height={530}
          src="/r2.png"
          unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/r2.png")}
        />
      </div>
      <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full my-18 "></span>
      <Image
        className="block w-20"
        alt=""
        width={760}
        height={530}
        src="/w.svg"
        unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/w.svg")}
      />
      <p className="mt-8 mb-20 text-2xl font-bold">Let’s work together!</p>
      <Image
        className="block rounded-[28px] overflow-hidden"
        alt=""
        width={360}
        height={360}
        src="/p.png"
        unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/p.png")}
      />
      <div className="md:w-1/2 w-full  text-[22px]  ">
        <p className="my-6">
          Just send an email. I’d love to join your design team for the next
          project to build great products together!
        </p>

        <p>–Stefan Dziallas</p>
      </div>

      <div className="flex gap-5 h-16 mt-16 mb-36 ">
        <Image
          className="block rounded-[28px] overflow-hidden"
          alt=""
          width={181}
          height={64}
          src="/email.svg"
          unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/email.svg")}
        />{" "}
        <Image
          className="block rounded-[28px] overflow-hidden"
          alt=""
          width={64}
          height={64}
          src="/x.svg"
          unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/x.svg")}
        />{" "}
        <Image
          className="block rounded-[28px] overflow-hidden"
          alt=""
          width={64}
          height={64}
          src="/ig.svg"
          unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/ig.svg")}
        />
      </div>

      <span className="w-26 h-6 bg-[#A5B2BB] inline-block rounded-full mb-18 "></span>

      <Image
        alt=""
        width={80}
        height={80}
        src="/pencil.svg"
        unoptimized={UNOPTIMIZED_IMAGE_SRCS.has("/pencil.svg")}
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
