import styled from "styled-components"

const StyledSeparator = styled.div`
    display: flex;
    flex-direction: column;
    background: #333333;
    box-shadow: inset 0 2px 0 0 #1B1B1B;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    margin: 30px 0;
`

const Separator = () => <StyledSeparator/>

export default Separator