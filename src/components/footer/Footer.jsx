import {
  FooterContainer,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  ContactItemLink,
} from "./Footer.styled";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <FooterContainer>
      <Left>
        <Logo>Yabu.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          dolore eius iure obcaecati iusto! Vero.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999" href="#">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f" href="#">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="e60023" href="#">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Link One</ListItem>
          <ListItem>Link Ones</ListItem>
          <ListItem>Link Oneasdas</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <Room />
          Lorem ipsum dolor sit amet consectetur.
        </ContactItem>
        <ContactItem>
          <Phone />
          <ContactItemLink href="#">+44 0733.333.333</ContactItemLink>
        </ContactItem>
        <ContactItem>
          <Email />
          <ContactItemLink href="#">office@website.com</ContactItemLink>
        </ContactItem>
      </Right>
    </FooterContainer>
  );
};

export default Footer;
