"use client";
import { cards } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const TestimonialsSection = () => {
	const vdRef = useRef<(HTMLVideoElement | null)[]>([]);

	useGSAP(() => {
		/* 	gsap.set(".testimonials-section", {
			marginTop: "-140vh",
		}); */

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".testimonials-section",
				start: "top bottom",
				end: "200% top",
				scrub: true,
			},
		});

		tl.to(".testimonials-section .first-title", {
			xPercent: 70,
		})
			.to(
				".testimonials-section .sec-title",
				{
					xPercent: 25,
				},
				"<"
			)
			.to(
				".testimonials-section .third-title",
				{
					xPercent: -50,
				},
				"<"
			);

		const pinTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".testimonials-section",
				start: "10% top",
				end: "+=500%",
				scrub: 1.5,
				pin: true,
			},
		});

		pinTl.from(".vd-card", {
			yPercent: 150,
			stagger: 0.2,
			ease: "power1.inOut",
		});
	});

	const handlePlay = (index: number) => {
		const video = vdRef.current ? vdRef.current[index] : null;
		if (video) video.play();
	};

	const handlePause = (index: number) => {
		const video = vdRef.current ? vdRef.current[index] : null;
		if (video) video.pause();
	};
	return (
		<section className="testimonials-section pt-[5vw]">
			<h2 className="size-full flex flex-col items-center">
				<span className="text-black first-title block">What&apos;s</span>
				<span className="text-light-brown sec-title block">Everyone</span>
				<span className="text-black third-title block">Talking</span>
			</h2>

			<div className="pin-box">
				{cards.map((card, index) => (
					<div
						key={index}
						className={`vd-card ${card.translation} ${card.rotation}`}
						onMouseEnter={() => handlePlay(index)}
						onMouseLeave={() => handlePause(index)}
					>
						<video
							ref={(el) => {
								vdRef.current[index] = el;
							}}
							src={card.src}
							playsInline
							muted
							loop
							className="size-full object-cover"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialsSection;
