import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  width: 158px;
  border-radius: 10px;
`;

export const SelectedWrapper = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 38px;
  border-radius: 10px;
  z-index: 3;

  :hover {
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  display: inline-block;
  width: 134px;
  margin: auto 0;
  height: 20px;
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ListWrapper = styled.div`
  position: absolute;
  margin-top: 32px;
  z-index: 2;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 158px;
  }
`;

export const OptionWrapper = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 38px;
  border-radius: 0;
  font-size: 15px;
  background-color: white;

  :hover {
    background-color: gainsboro;
    cursor: pointer;
  }
`;
