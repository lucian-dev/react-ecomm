import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px 25px;
  background-color: #f5f5f5;
`;

export const Title = styled.h3`
  font-size: 6rem;
  margin-bottom: 25px;
`;

export const Desc = styled.div`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 25px;
`;

export const InputContainer = styled.div`
  width: 50%;
  max-width: 400px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 4;
  padding: 15px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
