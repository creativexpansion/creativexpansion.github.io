import styled from "styled-components"
import Header from "./Header"

const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #272727;
    color: #ffffff;
    width: 100%;
    max-width: 800px;
    padding: 43px;
`

const PageContainer = () => {
    return <StyledPageContainer>
        <Header />
    </StyledPageContainer>
}

export default PageContainer