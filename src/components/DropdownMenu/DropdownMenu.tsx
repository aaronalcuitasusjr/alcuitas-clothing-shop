import { useContext } from "react";
import {
  IconWrapper,
  ListWrapper,
  OptionWrapper,
  SelectedWrapper,
  Title,
  Wrapper,
} from ".";
import { ShopContext } from "../../contexts";

import { MdExpandMore } from "react-icons/md";

interface DropdownMenuProps {
  isOpen: boolean;
  selected: number;
  toggleOpen: () => void;
  handleSelect: (newId: number) => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = (
  props: DropdownMenuProps
) => {
  const shop = useContext(ShopContext);
  const selectedProduct = shop.cart
    ? shop.cart.find((item) => {
        return item.id === props.selected;
      })
    : null;
  const unselected = shop.cart.filter((item) => item.id !== props.selected);

  return (
    <Wrapper>
      <SelectedWrapper onClick={props.toggleOpen}>
        <Title>{selectedProduct ? selectedProduct.name : ""}</Title>
        <IconWrapper>
          <MdExpandMore />
        </IconWrapper>
      </SelectedWrapper>
      {props.isOpen && (
        <ListWrapper>
          <ul>
            {unselected.map((product, index) => (
              <li key={index}>
                <OptionWrapper
                  onClick={() => {
                    props.handleSelect(product.id);
                    props.toggleOpen();
                  }}
                >
                  {product.name}
                </OptionWrapper>
              </li>
            ))}
          </ul>
        </ListWrapper>
      )}
    </Wrapper>
  );
};
