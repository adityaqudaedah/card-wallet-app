import { Button, Flex, Typography } from "antd";
import React, { useState } from "react";
import AddCardForm from "./components/add-card";
import CardDetail from "./components/card-detail";
import CreditCard, { CardType } from "./components/card";
import { MdAddCircleOutline } from "react-icons/md";
import CardList from "./components/card-list";

function App() {
  const [isAddCardFormOpen, setIsAddCardFormOpen] = useState(false);
  const [dataCard, setDataCard] = useState<CardType[]>([]);
  const [isDetailCardOpen, setIsDetailCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardType>({
    cardHolder: "",
    cardNumber: "",
    cardColor: "",
    cardExpire: "",
    cardLimit: 0,
  });
  const handleAddCard = () => {
    setIsAddCardFormOpen(true);
  };
  const handleOpenDetailCard = (cardNumber: string) => {
    const currentData = dataCard.filter(
      (card) => card.cardNumber === cardNumber
    );
    setIsDetailCardOpen(true);
    setSelectedCard(currentData[0]);
  };

  return (
    <React.Fragment>
      <Flex
        vertical
        gap="middle"
        style={{ widows: "100vw", padding: 16, backgroundColor: "#edfcfc" }}
      >
        <Flex
          justify="space-between"
          align="center"
          // style={{ border: "1px solid " }}
        >
          <Typography.Title
            level={5}
            // style={textStyle}
            style={{ margin: 0, fontWeight: "bolder" }}
          >
            Cards
          </Typography.Title>

          <Typography.Link
            target="blank"
            style={{ color: "salmon", fontWeight: "bolder" }}
          >
            View All &gt;
          </Typography.Link>
        </Flex>

        <Flex gap="small">
          <Flex>
            <Button
              style={{
                height: "162px",
                width: "160px",
                backgroundColor: "transparent",
              }}
              color="default"
              variant="dashed"
              icon={<MdAddCircleOutline />}
              onClick={handleAddCard}
            >
              Add
            </Button>
          </Flex>

          <Flex gap="small" style={{ width: "100vw", overflowX: "auto" }}>
            {/* <CreditCard /> */}
            <CardList
              cards={dataCard.map((card, index) => (
                <CreditCard
                  {...card}
                  key={index}
                  handleOpenCard={handleOpenDetailCard}
                />
              ))}
            />
          </Flex>
        </Flex>
      </Flex>

      <AddCardForm
        open={isAddCardFormOpen}
        setOpen={setIsAddCardFormOpen}
        setDataCard={setDataCard}
      />

      <CardDetail
        {...selectedCard}
        open={isDetailCardOpen}
        setOpen={setIsDetailCardOpen}
      />
    </React.Fragment>
  );
}

export default App;
