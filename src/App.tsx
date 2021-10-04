import { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "src/assets/styles/global-styles";
import { theme } from "src/assets/styles/theme";
import { AwardsContainer } from "src/components/AwardsContainer";
import { ContentLogo } from "src/components/ContentLogo";
import { MetricsContainer } from "src/components/MetricsContainer";

export const App: FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<SectionContainer>
				<GlobalStyle />
				<ResponsiveContainer>
					<ContentLogo />
					<MetricsContainer />
					<AwardsContainer />
				</ResponsiveContainer>
			</SectionContainer>
		</ThemeProvider>
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
