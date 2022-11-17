import { Button } from "antd";
import "./Products.scss";

const Products = ({
  products,
  onAddProduct,
  selectedProductIndex,
  onRemoveProduct,
}) => {
  return (
    <>
      {products?.map((product, index) => (
        <div key={product.id} className="mt-1">
          <ProductCard
            product={product}
            index={index}
            onAddProduct={onAddProduct}
            onRemoveProduct={onRemoveProduct}
            selectedProductIndex={selectedProductIndex}
          />
        </div>
      ))}
    </>
  );
};

export default Products;

const ProductCard = (props) => {
  const { name, desc, imageUrl, mrp } = props.product;
  const { selectedProductIndex, index, onRemoveProduct, onAddProduct } = props;
  const isSelected = selectedProductIndex.includes(index);

  return (
    <div className="flex p-2 products-card border-solid border-2 border-grey-400 bg-[white]">
      <div className="w-[80%]">
        <div className="font-semibold text-base desc title">{name}</div>
        <div>
          {Math.floor(mrp)} <span className="text-[red]">(51% off)</span>
        </div>
        <div className="desc">{desc}</div>
      </div>
      <div>
        <div>
          <img
            className="w-[124px] h-[124px] rounded-lg object-contain"
            src={imageUrl}
          />
        </div>
        <div className="mt-2 flex justify-center ">
          <Button
            type={isSelected ? "primary" : null}
            onClick={() =>
              isSelected ? onRemoveProduct(index) : onAddProduct(index)
            }
          >
            {isSelected ? "Remove" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};
