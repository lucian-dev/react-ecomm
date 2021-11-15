import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  width: 100vw;
  height: 100vh;
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

const Button = styled.button`
  width: 40%;
  padding: 25px;
  margin-top: 25px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;

const Link = styled.a`
  display: inline-block;
  width: 100%;
  font-size: 1.2rem;
  margin: 15px 0;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Create</Button>
          <Link href="#">Remember password</Link>
          <Link href="#">Create account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
