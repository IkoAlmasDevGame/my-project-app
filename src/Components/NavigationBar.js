import {Container, Nav, NavbarBrand} from 'react-bootstrap';
import {Navbar} from 'react-daisyui';

const NavigationBar = () => {
    return(
        <Navbar className='NavBg'>
            <Container>
                <NavbarBrand style={{
                    fontSize : "18px", 
                    textShadow : "2px 0px 0px black", 
                    textShadow : "0px 2px 0px red",
                    textShadow : "0px 0px 2px blue",
                    fontWeight : "400",
                    }}>PUSAT INFORMASI GAME</NavbarBrand>
                        <Nav>
                            <Nav.Link href='#latest' id='new'>CD Terbaru</Nav.Link>
                            <Nav.Link href='#old' id='olds'>CD Terlama</Nav.Link>
                        </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar