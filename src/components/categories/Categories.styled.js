import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

export const CategoryContainer = styled.div`
  position: relative;
  flex: 1;
  margin: 5px;
  height: 70vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 40px;
  color: white;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  font-weight: 700;
  cursor: pointer;
`;
