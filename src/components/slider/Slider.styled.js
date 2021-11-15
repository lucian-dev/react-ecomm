import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 768px;
  display: flex;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: #${(props) => props.bg};
`;

export const ImageContainer = styled.div`
  flex: 2;
  height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 7rem;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: red;
  }
`;
