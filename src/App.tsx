import { FC } from "react";
import styled from "styled-components";
import GlobalStyle from "src/assets/styles/global-styles";
import { AwardsContainer } from "src/components/AwardsContainer";
import { ContentLogo } from "src/components/ContentLogo";
import { MetricsContainer } from "src/components/MetricsContainer";

export const App: FC = () => {
	return (
		<SectionContainer>
			<GlobalStyle />
			<ResponsiveContainer>
				<ContentLogo />
				<MetricsContainer />
				<AwardsContainer />
			</ResponsiveContainer>
		</SectionContainer>
	);
};

export default App;

const SectionContainer = styled.div`
	display: flex;
	min-width: 1200px;
	height: auto;
`;

const ResponsiveContainer = styled.div`
	margin: 0px auto;
`;
