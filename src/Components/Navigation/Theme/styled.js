import styled from "styled-components";
import { configuration } from "./config";

const TabRow = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: ${configuration.tabBarBackground};
  color: #565f60;
  justify-content: space-between;
`;

TabRow.defaultProps = {
  kind: "primary"
};

const Tab = styled.div`
  margin-top: auto;
  height: 20px;
  display: flex;
  padding: 10px;
  align-items: flex-end;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  ${props =>
    props.isActive ? "background:#FFFFFF;" : "background:transparent;"}
    & > a{
          text-decoration: none;
    ${props => (props.isActive ? "color:#000;" : "color:#555;")}

    } 
    transition: background .2s;
`;

const Tabs = styled.div`
display:flex;
`;

export { TabRow, Tab, Tabs };
