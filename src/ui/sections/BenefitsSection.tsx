import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { ClipPathTitle } from "../components";

const BenefitsSection = () => {
	const isMobile = useMediaQuery({
		query: "(max-width: 768px)",
	});

	useGSAP(() => {
		if (!isMobile) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".vd-pin-section",
					start: "-15% top",
					end: "200% top",
					scrub: 1.5,
					pin: true,
				},
			});

			tl.to(".video-box", {
				clipPath: "circle(100% at 50% 50%)",
				ease: "power1.inOut",
			});
		}

		const revealTl = gsap.timeline({
			delay: 1,
			scrollTrigger: {
				trigger: ".benefit-section",
				start: "top 60%",
				end: "top top",
				scrub: 1.5,
			},
		});

		revealTl
			.to(".benefit-section .first-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			})
			.to(".benefit-section .second-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			})
			.to(".benefit-section .third-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			})
			.to(".benefit-section .fourth-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			});
	});
	return (
		<section className="benefit-section">
			<div className="container mx-auto pt-20">
				<div className="col-center">
					<h2>
						Unlock the Advantages: <br />
						Explore the Key Benefits of Choosing SPYLT
					</h2>

					<ul className="mt-20 col-center">
						<li>
							<ClipPathTitle
								title={"Shelf stable"}
								color={"#faeade"}
								bg={"#c88e64"}
								className={"first-title"}
								borderColor={"#222123"}
							/>
						</li>
						<li>
							<ClipPathTitle
								title={"Protein + Caffeine"}
								color={"#222123"}
								bg={"#faeade"}
								className={"second-title"}
								borderColor={"#222123"}
							/>
						</li>
						<li>
							<ClipPathTitle
								title={"Infinitely recyclable"}
								color={"#faeade"}
								bg={"#7F3B2D"}
								className={"third-title"}
								borderColor={"#222123"}
							/>
						</li>
						<li>
							<ClipPathTitle
								title={"Lactose free"}
								color={"#2E2D2F"}
								bg={"#FED775"}
								className={"fourth-title"}
								borderColor={"#222123"}
							/>
						</li>
					</ul>

					<div className="md:mt-0 mt-10">
						<p>And much more ...</p>
					</div>
				</div>
			</div>

			<div className="relative overlay-box">
				<div className="vd-pin-section">
					<div
						style={{
							clipPath: isMobile
								? "circle(100% at 50% 50%)"
								: "circle(6% at 50% 50%)",
						}}
						className="size-full video-box"
					>
						<video
							src="/videos/pin-video.mp4"
							playsInline
							muted
							loop
							autoPlay
						/>

						<div className="abs-center md:scale-100 scale-200">
							<Image
								src="/images/circle-text.svg"
								width={151}
								height={151}
								alt=""
								className="spin-circle"
							/>
							<div className="play-btn">
								<Image
									width={25}
									height={28}
									src="/images/play.svg"
									alt="Play"
									className="size-[3vw] ml-[.5vw]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
