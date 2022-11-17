import { Row, Col, Input, Image, Tooltip } from "antd";
import { SearchOutlined, QrcodeOutlined } from "@ant-design/icons";
import "./MojFeed.scss";
import MojFeedImage from "../../Image/MojFeed.jpg";
import Scanner from "../Scanner/Scanner";
import { useState } from "react";

const MojFeed = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="header h-screen object-contain border-2 overflow-hidden">
			<Row
				align="middle"
				className="bg-black p-3 fixed z-10 w-[366px] header"
			>
				<Col>
					<Input
						placeholder="Search Users, Hashtags"
						prefix={
							<SearchOutlined
								className="site-form-item-icon text-white"
								style={{ color: "white" }}
							/>
						}
					/>
				</Col>
				<Col
					className=" cursor-pointer ml-auto"
					onClick={() => setIsModalOpen(true)}
				>
					<QrcodeOutlined
						style={{
							width: "100%",
							fontSize: "24px",
							color: "gray",
							paddingLeft: "10px",
						}}
					/>
				</Col>
			</Row>
			<Row className=" height-">
				<img
					src={MojFeedImage}
					// height="100%"
					width="466px"
					className="mt-[61px]"
					alt="moj"
				/>
			</Row>
			<Scanner isModalOpen={isModalOpen} />
		</div>
	);
};

export default MojFeed;
