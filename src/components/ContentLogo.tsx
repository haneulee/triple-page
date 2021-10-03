import { FC } from "react";
import styled from "styled-components";
import constants from "src/constants";
import TripleImg from "src/assets/images/triple@2x.png";

interface StyleProps {
	imgUrl: string;
}

export const ContentLogo: FC = () => {
	return (
		<ContentWrapper imgUrl={TripleImg}>
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
	color: rgba(58, 58, 58, 0.7);
	position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;
`;
