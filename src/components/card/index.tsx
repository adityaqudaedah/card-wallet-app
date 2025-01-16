import React from "react";
import { FaNfcSymbol } from "react-icons/fa6";
import { Flex, Typography } from "antd";
import "./index.css";
import { maskStringWithSpaces } from "../../libs/maskString";

const textStyle: React.CSSProperties = {
  color: "white",
  margin: 0,
};

const cardStyle: React.CSSProperties = {
  minWidth: "300px",
  backgroundColor: "salmon",
  borderRadius: "8px",
  padding: "8px",
};

export type CardType = {
  cardHolder: string;
  cardNumber: string;
  cardExpire: string;
  cardColor: string;
  cardLimit: number;
  handleOpenCard?: (cardNumber : string) => void ;
};

const CreditCard: React.FC<CardType> = (props) => {
  return (
    <Flex
      vertical
      gap="small"
      style={{
        ...cardStyle,
        backgroundColor: props.cardColor,
        cursor: "pointer",
      }}
      onClick={() => props.handleOpenCard?.(props.cardNumber) }
    >
      {/* logo */}
      <Flex>
        <FaNfcSymbol style={{ fontSize: "2em", color: "white" }} />
      </Flex>

      {/* info */}
      <Flex vertical>
        <Typography.Title level={5} style={textStyle}>
          {props.cardHolder}
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          {maskStringWithSpaces(props.cardNumber)}
        </Typography.Title>
      </Flex>

      {/* expire */}
      <Flex vertical>
        {/* label */}
        <Typography.Paragraph style={textStyle}>Expiry</Typography.Paragraph>

        {/* date & logo */}
        <Flex justify="space-between">
          <Typography.Title level={5} style={textStyle}>
            {props.cardExpire}
          </Typography.Title>

          {/* master card logo */}
          <div className="mastercard-logo">
            {" "}
            <div className="circle red-circle"></div>{" "}
            <div className="circle orange-circle"></div>{" "}
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreditCard;
