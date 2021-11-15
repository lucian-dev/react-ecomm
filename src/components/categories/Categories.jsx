import { CategoriesContainer } from "./Categories.styled";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
