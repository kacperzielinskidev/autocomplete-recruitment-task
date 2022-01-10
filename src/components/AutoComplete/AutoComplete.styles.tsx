import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

export const StyledWrapper = styled.div`
  height: 350px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 50px;
  width: 550px;
  padding: 0 8px;
  border: 1px solid whitesmoke;

  input {
    border: none;
    margin-left: 10px;
    padding-left: 10px;
    height: 50px;
    font-size: 14px;
    padding: 4px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }
`;

export const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

export const StyledTagListItem = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 5%;
  color: black;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  margin: 0 8px 8px 0;
  background: #f1f1f1;
`;

export const StyledClearIcon = styled(ClearIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: red;
  margin-left: 8px;
  &:hover {
    opacity: 0.4;
  }
`;

export const StyledList = styled.div`
  margin-top: 5px;
  width: 550px;
  height: 200px;
  background-color: white;
  overflow: hidden;
  overflow-y: auto;
  border: 1px solid whitesmoke;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledListItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-left: 5px;
  align-items: center;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;
