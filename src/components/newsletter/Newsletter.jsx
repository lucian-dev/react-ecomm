import { SendOutlined } from "@material-ui/icons";
import {
  NewsContainer,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./Newsletter.styled";

const Newsletter = () => {
  return (
    <NewsContainer>
      <Title>Newsletter</Title>
      <Desc>Lorem ipsum dolor sit amet consectetur adipisicing.</Desc>
      <InputContainer>
        <Input placeholder="Your e-mail" />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </NewsContainer>
  );
};

export default Newsletter;
