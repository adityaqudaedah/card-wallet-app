import React from "react";
import dayjs from "dayjs";
import {
  Form,
  Input,
  ColorPicker,
  DatePicker,
  Modal,
  Typography,
  InputNumber,
  FormProps,
  Button,
  Flex,
} from "antd";
import { CardType } from "../card";
import { AggregationColor } from "antd/es/color-picker/color";

type AddCardForm = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setDataCard: React.Dispatch<React.SetStateAction<CardType[]>>;
};

type FieldType = {
  cardHolder: string;
  cardNumber: string;
  cardLimit: number;
  cardColor: AggregationColor;
  cardExpire: Date;
};

const AddCardForm: React.FC<AddCardForm> = (props) => {
  const [form] = Form.useForm();
  const handleResetForm = () => {
    form.resetFields([
      "cardHolder",
      "cardNumber",
      "cardLimit",
      "cardColor",
      "cardExpire",
    ]);
  };
  const handleSubmit: FormProps<FieldType>["onFinish"] = (values) => {
    const newValues = {
      ...values,
      cardExpire: dayjs(values.cardExpire).format("MM/YYYY").toString(),
      cardColor: "#" + values.cardColor.toHex().toString(),
    };
    props.setDataCard((prev: CardType[]) => [...prev, newValues]);
    props.setOpen(false);
    handleResetForm();
  };
  const handleCancel = () => {
    props.setOpen(false);
    form.setFieldsValue(null);
    handleResetForm();
  };

  return (
    <Modal
      open={props.open}
      title={<Typography.Title level={4}>Add New Card</Typography.Title>}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ padding: 6 }}
      >
        <Form.Item
          label="Credit Card Holder"
          name="cardHolder"
          rules={[{ required: true, message: "card holder is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Credit Card Number"
          name="cardNumber"
          rules={[
            { required: true, message: "card number is required" },
            { min: 16, message: "card number must be 16" },
          ]}
        >
          <Input maxLength={16} />
        </Form.Item>
        <Form.Item
          label="Credit Card Spend Limit"
          name="cardLimit"
          rules={[{ required: true, message: "card limit is required" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="cardColor"
          label="Credit Card Color"
          rules={[{ required: true, message: "card color is required!" }]}
        >
          <ColorPicker
            defaultValue="#fffff"
            size="large"
            showText
            format="hex"
          />
        </Form.Item>

        <Form.Item
          name="cardExpire"
          label="Expired At"
          rules={[{ required: true, message: "card expire is required!" }]}
        >
          <DatePicker
            format="DD/MM/YYYY"
            placeholder="dd/mm/yyyy"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Flex justify="flex-end">
            <Button variant="solid" htmlType="submit" color="purple">
              Add
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCardForm;
