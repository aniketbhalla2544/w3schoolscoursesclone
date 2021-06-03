
import { useContext } from 'react';
import 'styles/App.css';
import styled, { ThemeProvider } from 'styled-components';
import 'styled-components/macro';
import Navbar from 'components/Navbar/Navbar';
import Wrapper from 'Layouts/Bootstrap.Layouts/Wrapper';
import Container from 'Layouts/Bootstrap.Layouts/Container';
import Input from 'components/common.styled.components/Inputs';
import StyledButton from 'components/common.styled.components/Buttons';
import LanguageCards from 'components/LanguageCards/LanguageCards';
import { totalFavCoursesContext } from 'context/TotalFavCourses';


const App = () => {

  const [totalFavCourses] = useContext(totalFavCoursesContext);

  return (
    <ThemeProvider theme={theme}>

      <Navbar />

      {/* Search & button */}
      <Wrapper>
        <Container>
          <div className="row mx-0">
            <StyledHomeInput className="col-md-3 homeInput" name="searchText" fs={theme.fontSizes.xl} />
            <StyledHomeButton className="col-md-4 ms-auto">Total favourite courses: {totalFavCourses}</StyledHomeButton>
          </div>
        </Container>
      </Wrapper>

      {/* list of programming cards */}
      <Wrapper>
        <Container>
          <LanguageCards />
        </Container>
      </Wrapper>

    </ThemeProvider>
  );
}

export default App;

const theme = {

  colors: {
    themeGreen: "#04aa6d",
    themeBlue: "rgb(105, 182, 245)",
    themeBlack: "rgb(170, 170, 170)",
  },

  fontSizes: {
    xxl: "1.6rem",
    xl: "1.3rem",
    lg: "1rem",
    md: "0.875rem",
    sm: "0.75rem",
  }
}

const StyledHomeInput = styled(Input).attrs(props => ({
  className: props.className,
  name: props.name,
  fs: props.fs,
}))`

    box-shadow: 0 1.8px 2px ${props => props.theme.colors.themeBlack} inset;
    max-height: 40px;

    &:focus{
      box-shadow: 0 0 6px ${props => props.theme.colors.themeBlue};
    }
`;

const StyledHomeButton = styled(StyledButton)`

    padding: 0.5em 1em;
    border-radius: 2em;
    border: 2px solid ${props => props.theme.colors.themeGreen};
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: bolder;

    :hover{
      box-shadow: 0 0 4px ${props => props.theme.colors.themeGreen};
    }

`;

