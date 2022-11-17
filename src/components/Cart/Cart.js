import { Button, Divider } from "antd";
import { useMemo } from "react";
import "./Cart.scss"

const Cart = ({ selectedProductIndex, products, advertiserDetails,onRemoveProduct }) => {
  let seletectedProducts = products.filter((item) =>
    selectedProductIndex.includes(item.id)
  );

  const getCartTotal=useMemo(()=>{
    return seletectedProducts.reduce((a, el) =>{
        return  Math.floor(el.mrp) + a
    }, 0);
  },[seletectedProducts])

  return (
    <div className="flex flex-wrap mt-4">
      <div className="bg-[white] p-4 cart-left rounded-xl">
        <div className="font-semibold">
          {advertiserDetails?.contactInfo?.emailId}
        </div>
        <div>{advertiserDetails?.location}</div>
        <Divider />
        {selectedProductIndex.length === 0 && "No items Selected"}
        {seletectedProducts?.map((el) => {
          return (
            <div className="flex items-center mt-4">
              <div className="w-[50%]">{el.name}</div>
              <div>
                <Button onClick={()=>onRemoveProduct(el.id)}>Remove</Button>
              </div>
              <div className="ml-auto">₹{el.mrp}</div>
            </div>
          );
        })}
        <Divider />
      </div>
      {selectedProductIndex.length > 0 && (
        <div className="bg-[white] p-4 ml-4 cart-right rounded-xl">
          <div className="font-semibold">Bill Details</div>
          <ListItem title={'Cart total'} amount={`₹${getCartTotal}`}/>
          <ListItem title={'Discount'} amount={`₹100`}/>
          <Divider/>
          <ListItem title={'Delivery'} amount={'--'}/>
          <Divider/>
          <ListItem title={'To Pay'}  amount={`₹${getCartTotal-100}`}/>
        </div>
      )}
    </div>
  );
};

export default Cart;


const ListItem=({title, amount})=>{
    return(
        <div className="flex justify-between mt-3">
            <div>{title}</div>
            <div>{amount}</div>
        </div>
    )
}