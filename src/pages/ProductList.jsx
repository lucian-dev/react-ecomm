import styled from "styled-components";
import {
  Announcement,
  Footer,
  Navbar,
  Newsletter,
  Products,
} from "../components";

const Container = styled.div``;

const Title = styled.h2`
  margin: 25px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 25px;
`;

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-right: 25px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 25px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Tshirts</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
