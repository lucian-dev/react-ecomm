import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Announcement, Footer, Navbar } from "../components";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 75%;
  margin: 100px auto;
  ${mobile({
    width: "50%",
  })}
`;

const Title = styled.h2`
  font-weight: 500;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
`;

const TopButton = styled.button`
  padding: 2px;
  font-weight: 500;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  border: 1px solid red;
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Amount = styled.div`
  font-size: 2.4rem;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 3rem;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h3`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 15px;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart</TopText>
            <TopText>Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://source.unsplash.com/DZpc4UY8ZtY/900x600" />
                <Details>
                  <ProductName>Product Name</ProductName>
                  <ProductId>Product ID: 22222</ProductId>
                  <ProductColor color="black" />
                  <ProductSize>Size: </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmount>
                <ProductPrice>20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>20$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>10$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>3$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>27$</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
