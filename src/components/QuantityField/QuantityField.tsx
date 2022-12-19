import { useContext, useEffect, useState } from "react";
import { Field, Title, Wrapper } from ".";
import { ShopContext, ShopDispatchContext } from "../../contexts";
import { cartUpdate } from "../../reducers/shop";
import { DropdownMenu } from "../DropdownMenu";

export const QuantityField = () => {
  const shop = useContext(ShopContext);
  const dispatch = useContext(ShopDispatchContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(shop.cart[0].id);
  const [input, setInput] = useState(`${shop.cart[0].quantity}`);

  useEffect(() => {
    const selectedProduct = shop.cart.find((item) => item.id === selected);

    if (!selectedProduct) {
      setSelected(shop.cart[0].id);
      setInput(`${shop.cart[0].quantity}`);
    } else {
      setInput(`${selectedProduct.quantity}`);
    }
  }, [shop.cart, selected]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (newId: number) => {
    setSelected(newId);
  };

  const handleChange = (input: string) => {
    var newQuantity = parseInt(input, 10);
    if (newQuantity && !input.includes(".") && newQuantity > 0) {
      dispatch(
        cartUpdate(
          shop.cart.map((item) =>
            item.id === selected ? { ...item, quantity: newQuantity } : item
          )
        )
      );
    }
  };

  return (
    <Wrapper>
      <Title>Quantity of</Title>
      <DropdownMenu
        isOpen={isOpen}
        selected={selected}
        toggleOpen={toggleOpen}
        handleSelect={handleSelect}
      ></DropdownMenu>
      <Title>:</Title>
      <Field
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          handleChange(e.target.value);
        }}
      ></Field>
    </Wrapper>
  );
};
