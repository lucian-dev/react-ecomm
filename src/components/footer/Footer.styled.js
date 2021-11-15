import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  padding: 50px 0;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`;

export const Logo = styled.h2`
  font-size: 3.4rem;
`;

export const Desc = styled.p`
  margin: 25px 0;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 0 25px;
`;

export const Title = styled.h3`
  margin-bottom: 25px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 0 25px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  svg {
    margin-right: 10px;
  }
`;

export const ContactItemLink = styled.a`
  display: inline-block;
`;
