import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const MessageSection = () => {
	useGSAP(() => {
		const firstMsgSplit = SplitText.create(".first-message", {
			type: "words",
		});
		const secMsgSplit = SplitText.create(".second-message", {
			type: "words",
		});
		const paragraphSplit = SplitText.create(".message-content p", {
			type: "words, lines",
			linesClass: "paragraph-line",
		});

		/* gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content",
        start: "top top",
        scrub: true,
        markers: true,
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 0.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    }); */

		// Main timeline for controlling order
		const mainTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".message-content",
				start: "top center",
				end: "bottom center",
				scrub: true,
			},
		});

		// Animate first-message words color
		mainTl.to(firstMsgSplit.words, {
			color: "#faeade",
			ease: "power1.in",
			stagger: 1,
		});

		// Quickly reveal msg-text-scroll after first-message completes
		mainTl.to(
			".msg-text-scroll",
			{
				duration: 0.75,
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				ease: "circ.inOut",
			},
			"+=0.1" // small delay after first animation
		);

		// Animate second-message words color AFTER msg-text-scroll reveal
		mainTl.to(secMsgSplit.words, {
			color: "#faeade",
			ease: "power1.in",
			stagger: 1,
		});

		const paragraphTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".second-message",
				start: "-300% top",
				scrub: true,
			},
		});
		paragraphTl.from(paragraphSplit.words, {
			yPercent: 300,
			rotate: 3,
			ease: "power1.inOut",
			duration: 0.5,
			stagger: 0.01,
		});
	});

	return (
		<section className="message-content">
			<div className="container mx-auto flex-center py-28 relative">
				<div className="w-full h-full">
					<h2 className="msg-wrapper">
						<span className="first-message">
							Stir up your fearless past and
						</span>

						<div
							style={{
								clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
							}}
							className="msg-text-scroll"
						>
							<div className="bg-light-brown md:pb-5 pb-3 px-5">
								<span className="text-red-brown">Fuel Up</span>
							</div>
						</div>

						<span className="second-message">
							your future with every gulp of Perfect Protein
						</span>
					</h2>

					<div className="flex-center md:mt-20 mt-10">
						<div className="max-w-md px-10 flex-center overflow-hidden">
							<p>
								Rev up your rebel spirit and feed the adventure of life with
								SPYLT, where you’re one chug away from epic nostalgia and
								fearless fun.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MessageSection;
