import { MenuOutlined } from "@ant-design/icons";
import { Col, Row, Image } from "antd";
import "./GridView.scss";
import MaskImage from "../../Image/MaskImage.jpg";
import SareeImage from "../../Image/saree.jpeg";

function GridView({setStepCount}) {
	const onProductClick = () => {
		setStepCount()
	};
	return (
		<div className="grid-view">
			<Row className="container">
				<Col xs={24} className="moj-app">
					<Row className="header">
						<Col className="moj-user">MojUser</Col>
						<Col>
							<MenuOutlined />
						</Col>
					</Row>
					<Row className="user-details">
						<Col>
							<Image
								width={79}
								src="https://cdn.sharechat.com/246f21a5_1659611960466_sc.jpeg"
								className="user-image"
							></Image>
						</Col>
						<Col className="user-handle">
							<div>@aayushah711</div>
							<Row>
								<Col>
									<div>3</div>
									<div className="caption">Followers</div>
								</Col>
								<Col className="user-popularity">
									<div>2</div>
									<div className="caption">Following</div>
								</Col>
								<Col className="user-popularity">
									<div>10</div>
									<div className="caption">Likes</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="caption mt-2">Enter Bio...</Row>
					<Row className="pt-20">
						<Col
							xs={8}
							className="text-sm text-slate-600 pl-2 cursor-pointer"
							onClick={onProductClick}
						>
							<img src={MaskImage} height="auto" alt="product" />
						</Col>
						<Col
							xs={8}
							className="text-sm text-slate-600 pl-2 cursor-pointer"
							onClick={onProductClick}
						>
							<img src={SareeImage} height="auto" alt="product" />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default GridView;
