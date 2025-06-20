import React from "react";
import { nutrientsList } from "@/lib/constants";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection: React.FC = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create(".nutrition-title", {
			type: "chars",
		});
		const paragraphSplit = SplitText.create(".nutrition-section p", {
			type: "words, lines",
			linesClass: "paragraph-line",
		});

		const mainTitleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".nutrition-section",
				start: "top center",
				end: "bottom bottom",
				scrub: true,
			},
		});
		mainTitleTl.from(titleSplit.chars, {
			yPercent: 100,
			stagger: 0.02,
			ease: "power2.out",
		});
		const paragraphTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".nutrition-section",
				start: "top center",
				end: "bottom bottom",
				scrub: true,
			},
		});
		paragraphTl.from(paragraphSplit.words, {
			yPercent: 300,
			rotate: 3,
			ease: "power1.inOut",
			duration: 1,
			stagger: 0.01,
		});

		const titleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".nutrition-section",
				start: "top 80%",
				end: "bottom 100%",
				scrub: true,
			},
		});

		titleTl.to(".nutrition-text-scroll", {
			duration: 0.5,
			opacity: 1,
			clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
			ease: "power1.inOut",
		});
	});

	return (
		<section className="nutrition-section">
			<Image
				src="/images/slider-dip.png"
				alt=""
				width={1920}
				height={292}
				className="w-full object-cover"
				aria-hidden="true"
			/>

			<Image
				src="/images/big-img.png"
				alt=""
				width={1920}
				height={984}
				className="big-img"
			/>

			<div className="flex-1 grid grid-cols-1 grid-rows-[1fr_auto] md:px-10 px-5 mt-14 md:mt-0 relative z-10">
				<div className="w-full h-full flex flex-col md:flex-row md:justify-between">
					<div className="relative inline-block md:translate-y-20">
						<h1 className="general-title relative flex flex-col justify-center items-center gap-24">
							<span className="nutrition-title block place-self-start overflow-hidden">
								It still does
							</span>

							<span
								style={{
									clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
								}}
								className="nutrition-text-scroll place-self-start"
							>
								<span className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
									<span className="text-milk-yellow">Body Good</span>
								</span>
							</span>
						</h1>
					</div>

					<div className="flex md:justify-center items-center translate-y-5">
						<div className="md:max-w-xs max-w-md">
							<p className="text-lg md:text-right text-balance font-paragraph">
								Milk contains a wide array of nutrients, including vitamins,
								minerals, and protein, and this is lactose free
							</p>
						</div>
					</div>
				</div>

				<div className="nutrition-box col-span-full">
					<ul className="list-wrapper">
						{nutrientsList.map((nutrient, index) => (
							<li key={index} className="relative flex-1 col-center pr-3">
								<dl className="pl-3">
									<dt className="text-sm md:text-lg font-bold font-paragraph">
										{nutrient.label}
									</dt>
									<dd className="flex flex-col">
										<span className="font-paragraph text-xs">up to</span>
										<span className="text-base md:text-2xl lg:text-4xl tracking-tighter font-bold">
											{nutrient.amount}
										</span>
									</dd>
								</dl>

								{index !== nutrientsList.length - 1 && (
									<div className="spacer-border" />
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default NutritionSection;
