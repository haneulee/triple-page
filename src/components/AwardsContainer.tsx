import { FC } from "react";
import constants from "src/constants";
import styled from "styled-components";
import PlayStoreImg from "src/assets/images/play-store@2x.png";
import AppStoreImg from "src/assets/images/app-store@2x.png";
import useFadeIn from "src/hooks/useFadeIn";

interface StyleProps {
	imgUrl: string;
}

export const AwardsContainer: FC = () => {
	let { awardsText } = constants;
	const animationInfo = useFadeIn({
		direction: "up",
		duration: 0.7,
		delay: 0.2,
	});

	return (
		<AwardsWrapper {...animationInfo}>
			{awardsText.map((award, index) => (
				<AwardItem
					key={index}
					imgUrl={index === 0 ? PlayStoreImg : AppStoreImg}
				>
					{award[0]}
					<br />
					{award[1]}
				</AwardItem>
			))}
		</AwardsWrapper>
	);
};

const AwardsWrapper = styled.div`
	margin: 50px 0px 140px 623px;
	white-space: nowrap;
`;

const AwardItem = styled.div<StyleProps>`
	background-size: 54px 54px;
	height: 54px;
	padding: 5px 0px 5px 62px;
	font-size: 14px;
	line-height: 22px;
	margin-right: 39px;
	display: inline-block;
	font-family: sans-serif;
	background-image: url(${(props) => props.imgUrl});
	background-position: left top;
	background-repeat: no-repeat;
	color: ${(props) => props.theme.color.Iridium3};
	font-weight: bold;
`;
