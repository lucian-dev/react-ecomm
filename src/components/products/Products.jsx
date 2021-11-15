import { popularProducts } from "../../data";
import { ProductsContainer } from "./Products.styled";
import Product from "./Product";

const Products = () => {
  return (
    <ProductsContainer>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
