import styled from "styled-components";
import {
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_WHITE,
} from "../../styles/primaryColor";

export const Map = styled.div`
display: flex;
align-self: center;
width: 360px;
height: 400px;
background: ${PRIMARY_COLOR_WHITE};
margin: 10px;
padding: 20px;
border-radius: 20px;
border-style: solid;
border-color: ${PRIMARY_COLOR_GREEN};
border-width:10px;
`