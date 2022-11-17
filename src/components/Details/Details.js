import { Row, Col } from "antd";
import { ShopOutlined, HeartFilled, GiftOutlined } from "@ant-design/icons";
import "./Details.scss";

const Details = ({advertiserDetails}) => {
	return (
		<div className="bg-white">
			<Row className="banner"></Row>
			<Row className="border border-slate-300 px-7">
				<Col xs={24}>
					<Row>
						<Col className="shop-icon bg-white border border-slate-300 rounded-xl">
							<ShopOutlined
								style={{
									color: "rgb(181, 42, 107)",
									fontSize: "24px",
								}}
							/>
						</Col>
					</Row>
				</Col>
				<Col xs={24} className="text-2xl font-black">
					{advertiserDetails.businessName}
				</Col>
				<Col xs={24} className="text-sm text-slate-600 py-3">
					<Row align="top" justify="start">
						<HeartFilled
							style={{
								color: "#B52A6B",
								fontSize: "20px",
							}}
						/>

						<Col className="pl-2">{advertiserDetails?.likes} Love this</Col>
						<Col className="pl-2">.</Col>
						<Col className="pl-2">{advertiserDetails?.category}</Col>
					</Row>
				</Col>
				<Col xs={24} className="text-sm text-slate-600">
					<hr />
				</Col>
				<Col xs={24} className="text-sm text-slate-600">
					<Row className="pt-4" align="bottom">
						<Col>
							<GiftOutlined />
						</Col>
						<Col className="pl-2">Delivery accross {advertiserDetails.location}</Col>
					</Row>
					<Row className="py-2" align="bottom">
						<Col>
							<GiftOutlined />
						</Col>
						<Col className="pl-2">Delivery fee will apply</Col>
					</Row>
					<Row className="pb-4" align="bottom">
						<Col>
							<GiftOutlined
								style={{
									fontSize: "14px",
								}}
							/>
						</Col>
						<Col className="pl-2 text-sm">
							All orders will be delivered by {advertiserDetails.businessName}
						</Col>
					</Row>
				</Col>
				<Col xs={24} className="text-sm text-slate-600">
					<hr />
				</Col>
				<Col xs={24}>
					<Row className="our-products text-md font-light text-slate-600 py-3">
						<Col xs="auto">-</Col>
						<Col xs="auto" className="  pl-3">
							O U R
						</Col>{" "}
						<Col xs="auto" className=" pl-3">
							P R O D U C T S
						</Col>
						<Col xs="auto" className=" pl-3">
							-
						</Col>
					</Row>
				</Col>
				<Col xs={24} className="text-sm text-slate-600">
					<hr />
				</Col>
			</Row>
		</div>
	);
};

export default Details;
