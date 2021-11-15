import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 25px;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 15px 10px 0 0;
  padding: 15px;
`;

const Agreement = styled.span`
  font-size: 1.2rem;
  margin: 15px 0;
`;

const Button = styled.button`
  width: 40%;
  padding: 25px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
