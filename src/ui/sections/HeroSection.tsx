"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const HeroSection: React.FC = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", { type: "chars" });

    const textTimeline = gsap.timeline({
      delay: 1,
    });

    textTimeline
      .to(".hero-content", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02 /* delay between each char */,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "3% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroSectionTimeline.to(".hero-container", {
      rotate: 5,
      scale: 0.95,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="bg-main-bg">
      <div className="hero-container" suppressHydrationWarning={true}>
        <img
          src="/images/hero-bg.png"
          className="absolute bottom-40 size-full object-cover lg:hidden"
        />
        <img
          src="/images/hero-img.png"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto lg:hidden"
        />

        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />

        {/*  <Image
          src={"/images/static-img.png"}
          alt=""
          width={370}
          height={410}
          className="w-full h-full object-cover object-top absolute bottom-0 left-1/2 -translate-x-1/2 scale-100 md:scale-150"
        /> */}

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking delicious</h1>
          </div>
          <div
            className="hero-text-scroll"
            style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          >
            <div className="hero-subtitle">
              <p>Protein + Coffeine</p>
            </div>
          </div>

          <p className="hero-description">
            Live your life to the fullest witn SPYLT: Shatter boredom and
            embrace your inner kid with every deliciously smooth chug
          </p>

          <div>
            <button className="hero-button">Chug a SPYLT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
