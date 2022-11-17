import { Button, Drawer } from "antd";
import React, { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";

const Scanner = ({ isModalOpen, handleCancel }) => {
	//   const [isModalOpen, setIsModalOpen] = useState(true);
	const [data, setData] = useState(null);

	//   const handleCancel = () => {
	//     setIsModalOpen(false);
	//   };
	const previewStyle = {
		height: 240,
		width: 320,
	};

	const onScan = (d) => {
		if (d !== null && data === null) {
			setData(d);
		}
	};

	useEffect(() => {
		if (data && data.text) {
			window.open(data.text, "_self");
		}
	}, [data]);

	return (
		<Drawer
			title="Scan QR Code"
			placement="right"
			onClose={handleCancel}
			open={isModalOpen}
			width={"100%"}
		>
			<QrReader
				delay={100}
				style={previewStyle}
				onError={(err) => {
					console.log(err);
				}}
				onScan={onScan}
			/>
		</Drawer>
	);
};

export default Scanner;
