import { FC } from "react";
import styled from "styled-components";
import constants from "src/constants";
import useFadeIn from "src/hooks/useFadeIn";
import useCount from "src/hooks/useCount";

export const MetricsContainer: FC = () => {
	let { metricsText, metricsCount } = constants;
	const animationInfo = useFadeIn({
		direction: "up",
		duration: 0.7,
		delay: 0.1,
	});
	const countInfo = [
		useCount({ end: metricsCount[0], duration: 700 }),
		useCount({ end: metricsCount[1], duration: 1500 }),
		useCount({ end: metricsCount[2], duration: 700 }),
	];

	return (
		<MetricWrapper {...animationInfo}>
			{metricsText.map((metric, index) => (
				<MetricsItem key={index}>
					<BoldText>
						<span {...countInfo[index]}>0</span>
						{metric[0]}
					</BoldText>
					{metric[1]}
				</MetricsItem>
			))}
		</MetricWrapper>
	);
};

const MetricWrapper = styled.div`
	margin-left: 623px;
	padding-top: 150px;
`;

const MetricsItem = styled.div`
	font-size: 36px;
	letter-spacing: -1px;
	margin-bottom: 20px;
	color: ${(props) => props.theme.color.Iridium1};
	font-family: sans-serif;
`;

const BoldText = styled.strong`
	font-weight: bold;
`;
