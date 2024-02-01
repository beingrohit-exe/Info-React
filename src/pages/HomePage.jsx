// import '../styles/HomePage.css'

import styled from "styled-components"
import {useNavigate} from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    // <div className="main-div">HomePage</div>
    <Wrapper>
      <NavbarWrapper>
        <ButtonDiv onClick={()=> navigate('/about')}>About</ButtonDiv>
      </NavbarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: #272727;
  user-select: none;
`;

const NavbarWrapper = styled.nav`
  height: 72px;
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  font-size: 25px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  }

  &:active {
    color: rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  }
`;

export default HomePage