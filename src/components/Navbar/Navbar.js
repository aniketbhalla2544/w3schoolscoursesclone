import { Header, GridContainer, Logo, Nav } from 'components/Navbar/Navbar.elements';

const Navbar = () => {
    return (
        <Header>
            <GridContainer>
                <Logo />
                <Nav>
                    <a href="https://www.w3schools.com/">Back to main site</a>
                    <a href="#">Login</a>
                </Nav>
            </GridContainer>
        </Header>
    )
}

export default Navbar;