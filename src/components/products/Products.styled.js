import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  padding: 0 25px 25px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease-in-out;
`;

export const ProductContainer = styled.div`
  position: relative;
  flex: 1;
  margin: 5px;
  height: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  color: var(--text-black);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;
