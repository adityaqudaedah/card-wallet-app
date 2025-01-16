import React from "react";
import { Flex, Modal, Typography } from "antd";


const textStyle: React.CSSProperties = {
  margin: 0,
  width: "35%",
};
const flexStyle: React.CSSProperties = {
  paddingLeft: "16px",
};
const hrStyle: React.CSSProperties = {
  border: 0,
  height: "1px",
  backgroundColor: "#e8e2e1",
};

type CardTypeDetail = {
  cardHolder: string;
  cardNumber: string;
  cardExpire: string;
  cardColor: string;
  open: boolean;
  setOpen: (isOpen : boolean)=>void;
};

const CardDetail: React.FC<CardTypeDetail> = (props) => {
  const handleCancel = () => {
    props.setOpen(false);
  };
  return (
    <Modal
      open={props.open}
      title={<Typography.Title level={4}> Card Detail</Typography.Title>}
      cancelText="Cancel"
      onCancel={handleCancel}
      footer={null}
    >
      <Flex vertical gap="large" style={{ padding: "32px 0px 32px 0px" }}>
        <Flex style={flexStyle}>
          <Typography.Title level={5} style={{ ...textStyle, color: "gray" }}>
            Card Holder Name
          </Typography.Title>

          <Typography.Title level={5} style={textStyle}>
            {props.cardHolder}
          </Typography.Title>
        </Flex>

        <hr style={hrStyle} />

        <Flex style={flexStyle}>
          <Typography.Title level={5} style={{ ...textStyle, color: "gray" }}>
            Expred At
          </Typography.Title>

          <Typography.Title level={5} style={textStyle}>
            {props.cardExpire}
          </Typography.Title>
        </Flex>

        <hr style={hrStyle} />

        <Flex align="center" style={flexStyle}>
          <Typography.Title level={5} style={{ ...textStyle, color: "gray" }}>
            Card Color
          </Typography.Title>

          <div
            style={{
              ...textStyle,
              height: "16px",
              backgroundColor: `${props.cardColor}`,
              borderRadius: "4px",
            }}
          ></div>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default CardDetail;
