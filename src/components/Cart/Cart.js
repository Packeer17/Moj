import { Button, Divider, Modal } from "antd";
import { useMemo, useState } from "react";
import "./Cart.scss";

const Cart = ({
	selectedProductIndex,
	products,
	advertiserDetails,
	onRemoveProduct,
	setRoute,
	setSelectedProductIndex,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	let seletectedProducts = products.filter((item) =>
		selectedProductIndex.includes(item.id)
	);

	const getCartTotal = useMemo(() => {
		return seletectedProducts.reduce((a, el) => {
			return Math.floor(el.mrp) + a;
		}, 0);
	}, [seletectedProducts]);

	const handleOk = () => {
		setSelectedProductIndex([]);
		setRoute(`/`);
	};

	return (
		<div className="flex flex-wrap mt-4">
			<div className="bg-[white] p-4 cart-left rounded-xl">
				<div className="font-semibold">
					{advertiserDetails?.businessName}
				</div>
				<div>{advertiserDetails?.location}</div>
				<Divider />
				{selectedProductIndex.length === 0 && "No items Selected"}
				{seletectedProducts?.map((el) => {
					return (
						<div className="flex items-center mt-4">
							<div className="w-[50%]">{el.name}</div>
							<div>
								<Button onClick={() => onRemoveProduct(el.id)}>
									Remove
								</Button>
							</div>
							<div className="ml-auto">₹{el.mrp}</div>
						</div>
					);
				})}
				<Divider />
			</div>
			{selectedProductIndex.length > 0 && (
				<div className="cart-right ml-4 ">
					<div className="bg-[white] rounded-xl  p-4">
						<div className="font-semibold">Bill Details</div>
						<ListItem
							title={"Cart total"}
							amount={`₹${getCartTotal}`}
						/>
						<ListItem title={"Discount"} amount={`₹100`} />
						<Divider />
						<ListItem title={"Delivery"} amount={"--"} />
						<Divider />
						<ListItem
							title={"To Pay"}
							amount={`₹${getCartTotal - 100}`}
						/>
						<Button
							type="primary"
							block
							className="mt-4"
							onClick={() => setIsModalOpen(true)}
						>
							Place Order
						</Button>
					</div>
					<div className="mt-4 p-4 bg-[white] rounded-xl">
						<div className="font-semibold">Cancellation Policy</div>
						<div>
							Full refund if order is cancelled before
							confirmation
						</div>
						<div>
							No refund if the order is already accepted or
							dispatched
						</div>
						<div>
							For any queries on cancellations, please chat with
							the seller
						</div>
					</div>
				</div>
			)}
			{isModalOpen && (
				<Modal
					open={isModalOpen}
					onOk={handleOk}
					onCancel={() => setIsModalOpen(false)}
				>
					<h1>Order Placed...</h1>
				</Modal>
			)}
		</div>
	);
};

export default Cart;

const ListItem = ({ title, amount }) => {
	return (
		<div className="flex justify-between mt-3">
			<div>{title}</div>
			<div>{amount}</div>
		</div>
	);
};
