import styled from "styled-components";

export const Navigation = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  svg {
    color: gray;
  }
`;

export const Input = styled.input`
  border: none;
  appearance: none;
  outline: none;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: 700;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 25px;
`;
