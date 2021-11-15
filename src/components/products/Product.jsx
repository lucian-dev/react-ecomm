import { ProductContainer, Image, Info, Icon } from "./Products.styled";
import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Product = ({ item }) => {
  return (
    <ProductContainer>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </ProductContainer>
  );
};

export default Product;
