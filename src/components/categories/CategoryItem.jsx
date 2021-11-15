import {
  CategoryContainer,
  Image,
  Info,
  Title,
  Button,
} from "./Categories.styled";

const CategoryItem = ({ item }) => {
  return (
    <CategoryContainer>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </CategoryContainer>
  );
};

export default CategoryItem;
