import styled from "@emotion/styled"
import { colors } from "../../styles/colors"

export const DocumentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
`

export const CreateButton = styled.button`
  background-color: ${colors.BUTTON_BLUE};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: ${colors.PRIMARY};
  }
`

export const DocumentItem = styled.li`
  list-style: none;
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: ${colors.PRIMARY};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.BUTTON_BLUE};
  }
`
