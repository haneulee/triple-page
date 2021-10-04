import { FC } from "react";
import styled from "styled-components";
import constants from "src/constants";
import TripleImg from "src/assets/images/triple@2x.png";
import useFadeIn from "src/hooks/useFadeIn";

interface StyleProps {
	imgUrl: string;
}

export const ContentLogo: FC = () => {
	const animationInfo = useFadeIn({
		direction: "up",
		duration: 0.7,
		delay: 0,
	});
	return (
		<ContentWrapper imgUrl={TripleImg} {...animationInfo}>
			{constants.contentLogoText}
		</ContentWrapper>
	);
};

const ContentWrapper = styled.div<StyleProps>`
	box-sizing: border-box;
	background-image: url(${(props) => props.imgUrl});
	background-repeat: no-repeat;
	text-align: center;
	font-family: sans-serif;
	color: ${(props) => props.theme.color.Iridium2};
	position: absolute;
	top: 150px;
	width: 400px;
	height: 338px;
	background-size: 400px 338px;
	padding-top: 280px;
	font-size: 15px;
`;
