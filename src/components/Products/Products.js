import { Button } from "antd";
import "./Products.scss";
import {products} from "../../constants/constants"

const Prodcuts = () => {
  return (
      <>
      {products.map(product=><div className="mt-1"><ProdcutCard product={product}/></div>)}
      </>
  )
};

export default Prodcuts;

const ProdcutCard = (props) => {
  const{title,productDetails,images,sellingPrice} =props.product
  return (
    <div className="flex p-2 products-card border-solid border-2 border-grey-400 bg-[white]">
      <div className="w-[80%]">
        <div className="font-semibold text-base desc title">
         {title}
        </div>
        <div>
          {Math.floor(sellingPrice)} <span className="text-[red]">(51% off)</span>
        </div>
        <div className="desc">
         {
             productDetails
         }
        </div>
      </div>
      <div>
        <div>
          <img
            className="w-[124px] h-[124px] rounded-lg"
            src={images[0]?.url}
          />
        </div>
        <div className="mt-2 flex justify-center ">
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
};
