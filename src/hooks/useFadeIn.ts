import { useRef, useEffect } from "react";
import { DirectionType, UseFadeInOptionsType, UseFadeInReturnType } from "src/types";


const useFadeIn = (options: UseFadeInOptionsType): UseFadeInReturnType => {
	const { direction = "up", duration = 0.7, delay = 0 } = options;
	const element = useRef<HTMLElement>();

	const handleDirection = (name: DirectionType) => {
		switch (name) {
			case "up":
				return "translate3d(0, 10px, 0)";
			case "down":
				return "translate3d(0, -10px, 0)";
			case "left":
				return "translate3d(10px, 0, 0)";
			case "right":
				return "translate3d(-10px, 0, 0)";
			default:
				return "";
		}
	};

	useEffect(() => {
		if (element.current) {
			const { current } = element;
			current.style.transitionProperty = "all";
			current.style.transitionDuration = `${duration}s`;
			current.style.transitionTimingFunction = "ease-in-out";
			current.style.transitionDelay = `${delay}s`;
			current.style.opacity = "1";
			current.style.transform = "translate3d(0, 0, 0)";
		}
	}, [delay, duration]);

	return {
		ref: element,
		style: { opacity: "0", transform: handleDirection(direction) },
	};
};

export default useFadeIn;
