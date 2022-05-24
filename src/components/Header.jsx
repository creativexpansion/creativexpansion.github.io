import styled from "styled-components"
import Logo from '../assets/logo.png'
import Separator from "./Separator"

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;

    .row{
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            margin-right: 128px;
        }

        .subtitle {
            color: #707070;
            .main {
                color: #FFFFFF;
            }
        }
    }
`

const Header = () => {
    return <StyledHeader>
        <div className="row">
            <img alt="Creativexpansion Logo" src={Logo} />
            <p className="subtitle"><span className="main">idee innovative</span>, alta capacità creativa e progettuale</p>
        </div>
        <Separator />
    </StyledHeader>
}

export default Header