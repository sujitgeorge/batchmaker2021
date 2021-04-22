import styled from "styled-components";
import { configuration } from "./config";

const HeaderDesign = styled.div`
display:flex;
width:100%;
height:40px;
background:${configuration.headerBackground};
border-top: 1px solid ${configuration.headerBorderTop};
border-bottom: 1px solid ${configuration.headerBorderBottom};
color:#FFFFFF;
line-height:40px;
`;
HeaderDesign.defaultProps = {
  kind: "primary"
};
const Title = styled.div`
margin-left:10px;
font-size:20px;
`;

export { HeaderDesign, Title };
