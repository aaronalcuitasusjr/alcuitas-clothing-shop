import styled from "styled-components";

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ListWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(52, 53, 99, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const ListHeader = styled.div`
  display: flex;
`;

export const ListFooter = styled.div`
  display: flex;
`;

export const Label = styled.div`
  display: flex;
  flex: 3;

  img {
    height: 60px;
    width: 60px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 4px;
  }

  p {
    display: inline-block;
    width: 90px;
    margin: auto;
    height: 20px;
    text-align: left;
    vertical-align: middle;
    font-weight: normal;
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  font-weight: normal;
  font-size: 15px;
  overflow: hidden;
`;

export const ColumnName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  font-weight: bold;
  font-size: 15px;
`;

export const RowName = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  align-items: center;
  justify-content: right;
  font-weight: bold;
  font-size: 15px;
`;
