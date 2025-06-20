import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { flavorsList } from "@/lib/constants";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const FlavorsSection: React.FC = () => {
	const isSmallScreen = useMediaQuery({
		query: "(max-width: 1024px)",
	});
	useGSAP(() => {
		const firstTextSplit = SplitText.create(".first-text-split span", {
			type: "chars",
		});
		const secondTextSplit = SplitText.create(".second-text-split span", {
			type: "chars",
		});

		gsap.from(firstTextSplit.chars, {
			yPercent: 200,
			stagger: 0.02,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".flavor-section",
				start: "top 30%",
			},
		});

		gsap.to(".flavor-text-scroll", {
			duration: 1,
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			scrollTrigger: {
				trigger: ".flavor-section",
				start: "top 10%",
			},
		});

		gsap.from(secondTextSplit.chars, {
			yPercent: 200,
			stagger: 0.02,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".flavor-section",
				start: "top 1%",
			},
		});

		const flavors = document.querySelector(".flavors");

		if (flavors) {
			const scrollAmount = flavors?.scrollWidth - window.innerWidth;

			if (!isSmallScreen) {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".flavor-section",
						start: "2% top",
						end: `+=${flavors.scrollWidth + window.innerWidth / 2}`,
						scrub: true,
						pin: true,
						pinSpacing: true, // ensures spacing after pin
					},
				});

				tl.to(".flavor-section", {
					x: `-${scrollAmount + window.innerWidth / 1.5}`,
					ease: "power1.inOut",
				});

				/* title effect when horizontal scroll starts */
				const titleTl = gsap.timeline({
					scrollTrigger: {
						trigger: ".flavor-section",
						start: "top top",
						end: "bottom 80%",
						scrub: true,
					},
				});

				titleTl
					.to(".first-text-split", {
						xPercent: -30,
						ease: "power1.inOut",
					})
					.to(
						".flavor-text-scroll",
						{
							xPercent: -22,
							ease: "power1.inOut",
						},
						"<" //will happen at the same time as first title animation
					)
					.to(
						".second-text-split",
						{
							xPercent: -10,
							ease: "power1.inOut",
						},
						"<" //will happen at the same time as first title animation
					);
			} else {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".flavor-section",
						start: "2% top",
						end: `+=${scrollAmount}`,
						scrub: true,
						pin: true,
						pinSpacing: true, // ensures spacing after pin
					},
				});

				tl.to(".flavors", {
					x: `-${scrollAmount}`,
					ease: "power1.inOut",
				});
			}
		}
	});

	return (
		<section className="flavor-section">
			<div className="h-full flex lg:flex-row flex-col relative">
				{/* title */}
				<div className="w-full lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
					<h2 className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-20">
						<span className="overflow-hidden 2xl:py-0 py-3 first-text-split">
							<span>We have 6</span>
						</span>

						<span
							style={{
								clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
							}}
							className="flavor-text-scroll block"
						>
							<span className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3 block">
								<span className="text-milk">freaking</span>
							</span>
						</span>

						<span className="overflow-hidden 2xl:py-0 py-3 second-text-split">
							<span>delicious flavors</span>
						</span>
					</h2>
				</div>
				<div className="h-full relative z-50">
					<div className="slider-wrapper">
						<ul className="flavors pr-32 md:pl-10 md:pr-40 lg:pr-0">
							{flavorsList.map((flavor) => (
								<li
									key={flavor.name}
									className={`relative z-30 lg:w-[50vw] w-[80vw] lg:h-[70vh] md:h-[50vh] h-80 flex-none ${flavor.rotation} flex`}
								>
									<article className="flex-1 grid grid-rows-[1fr_auto]">
										{/*  <div className="col-start-1 col-end-2 row-start-2 row-end-3 relative"></div> */}
										<Image
											src={`/images/${flavor.color}-bg.svg`}
											alt=""
											width={1024}
											height={677}
											className="col-start-1 col-end-2 row-start-1 row-end-3 w-full h-full object-cover rounded-2xl"
										/>

										<Image
											src={`/images/${flavor.color}-drink.webp`}
											alt=""
											width={827}
											height={1193}
											className="col-start-1 col-end-2 row-start-1 row-end-3 w-full h-full object-contain"
										/>

										<Image
											src={`/images/${flavor.color}-elements.webp`}
											width={950}
											height={621}
											alt=""
											className="col-start-1 col-end-2 row-start-1 row-end-3 w-full h-full object-contain object-center"
										/>

										<h3 className="col-start-1 col-end-2 row-start-2 row-end-3">
											{flavor.name}
										</h3>
									</article>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FlavorsSection;
