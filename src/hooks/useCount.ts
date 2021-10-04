import { useRef, useEffect } from "react";
import { UseCountReturnType, UseCountOptionsType } from "src/types";

const useCount = (options: UseCountOptionsType): UseCountReturnType => {
	const { start = 0, duration = 700, end = 0 } = options;
	const element = useRef<HTMLElement>();
	const stepTime = Math.abs(Math.floor(duration / (end - start)));

	useEffect(() => {
		let curNumber = start;
		const counter = setInterval(() => {
			curNumber++;

			if (element.current) {
				element.current.innerHTML = String(curNumber);
			}

			if (curNumber === end) {
				clearInterval(counter);
			}
		}, stepTime);
	}, [end, start, stepTime, duration]);

	return {
		ref: element,
	};
};

export default useCount;
