import { Button, ContainerHome, Header, Image } from "./styles";
import logo from '../assets/jadoo-logo.png'

export function Home() {
    return (
        <ContainerHome>
            <Header>
                <Image src={logo} alt="" />
                <Button>Destinations</Button>
                <Button>Hotels</Button>
                <Button>Flights</Button>
                <Button>Bookings</Button>
                <Button>Login</Button>
            </Header>
        </ContainerHome>
    )
}