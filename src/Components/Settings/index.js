import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  openSettings,
  closeSettings,
  changeNotificationPosition,
  changeTheme,
  changeNotificationSettings,
  addNotification
} from "../../Reducers/actions";
import { toast } from "react-toastify";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faInfoCircle,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../Modal/index";
import ReactTooltip from "react-tooltip";

library.add(faCog, faInfoCircle, faQuestionCircle);

const NotificationButton = styled.div`
    background-color: #7289da;
    color: #fff; 
    box-sizing: border-box;
    line-height: 45px;
    overflow: hidden;
    border: 0;
    border-radius: 3px;
    bottom: 0;
    box-shadow: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin: auto;
    outline: none;
    padding: 0;
    right: 0;
    text-align: center;
    display: inline-block
    padding-left: 10px;
    padding-right:10px;
`;

const Button = styled.div`
color:black;
display:flex;
align-items:center;
text-align:center;
background:white;
border-radius:10px;
padding:10px;
height:50%;
margin: auto 0;
margin-right:10px;
&:hover{
background:transparent;
border: 1px white solid;
}
`;
const Grid = styled.div`
highlight: none;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
background:#eee;
border-radius:10px;
padding:10px;
`;
const Item = styled.div`
display: flex;
  margin: 10px 0 0 10px;
  ${props =>
    props.isActive
      ? `width: calc(100% * (1 / 3)  - 12px);`
      : `width: calc(100% * (1 / 3)  - 10px);`}
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: none;
  background:#fff;
  height:30px;
  border-radius:5px;
${props => (props.isActive ? `border:1px solid green;` : ``)}
  `;
const SimpleColumnGrid = styled.div`
  display:flex;
  flex-direction:column;
  `;
const SimpleGrid = styled.div`
  display:flex;
  `;

const ItemLeft = styled.div`
width:20%;`;
const ItemRight = styled.div`
width:50%;`;

const ButtonGroup = styled.div`
  font-size: 0;
  line-height: 1;
  white-space: nowrap;
  display: inline;
`;
const ButtonGroupBtn = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  ${props =>
    props.isActive ? `background: #eee;` : `background: transparent;`}
  border: 1px solid #7f8c8d;
  border-left-width: 0;
  display: inline-block;
  padding: 5px;
  outline: 0;

&:first-child {
  border-left-width: 1px;
  border-radius: 5px 0 0 5px;
}
&:last-child {
  border-radius: 0 5px 5px 0;
}`;

class SettingsButton extends React.Component {
  render() {
    return (
      <Button onClick={() => this.props.openSettings(true)}>
        <FontAwesomeIcon icon="cog" size="lg" />
      </Button>
    );
  }
}
class Settings extends React.Component {
  render() {
    return (
      <Modal
        active={this.props.showSettings}
        clickOut={true}
        callback={() => this.props.closeSettings(true)}
      >
        <h1>Settings</h1>
        <h3>Theme</h3>
        <Grid>
          {this.props.themes.map((theme, index) => (
            <Item
              onClick={() => this.props.changeTheme(theme)}
              isActive={theme.isActive}
              key={`theme_${index}`}
            >
              {theme.name}
            </Item>
          ))}
        </Grid>
        <h3>Notification Settings</h3>
        <NotificationButton
          onClick={() =>
            this.props.addNotification({
              body: `Test Notification location: ${
                this.props.notificationLocation
              }`
            })
          }
        >
          Test a notification
        </NotificationButton>
        <h4>Location</h4>
        <Grid>
          {this.props.notificationLocations.map((location, index) => (
            <Item
              key={`item_${index}`}
              onClick={() =>
                this.props.changeNotificationPosition(location.name)
              }
              isActive={location.isActive}
            >
              {location.name}
            </Item>
          ))}
        </Grid>
        <h4>Options</h4>
        <SimpleColumnGrid>
          <SimpleGrid>
            <ItemLeft>
              autoClose{" "}
              <a data-tip data-for="autoClose">
                <FontAwesomeIcon icon="question-circle" size="sm" />
              </a>
              <ReactTooltip
                id="autoClose"
                place="top"
                type="dark"
                effect="solid"
              >
                <span>Number of Seconds to display Notification</span>
              </ReactTooltip>
            </ItemLeft>
            <ItemRight>
              <select
                ref={r => (this.select = r)}
                onChange={e =>
                  this.props.changeNotificationSettings({
                    autoClose: parseInt(this.select.value)
                  })
                }
              >
                <option
                  value="1000"
                  selected={this.props.notificationSettings.autoClose === 1000}
                >
                  1 Second
                </option>
                <option
                  value="2000"
                  selected={this.props.notificationSettings.autoClose === 2000}
                >
                  2 Seconds
                </option>
                <option
                  value="3000"
                  selected={this.props.notificationSettings.autoClose === 3000}
                >
                  3 Seconds
                </option>
                <option
                  value="4000"
                  selected={this.props.notificationSettings.autoClose === 4000}
                >
                  4 Seconds
                </option>
                <option
                  value="5000"
                  selected={this.props.notificationSettings.autoClose === 5000}
                >
                  5 Seconds
                </option>
                <option
                  value="6000"
                  selected={this.props.notificationSettings.autoClose === 6000}
                >
                  6 Seconds
                </option>
              </select>
            </ItemRight>
          </SimpleGrid>
          <SimpleGrid>
            <ItemLeft>
              hideProgressBar{" "}
              <a data-tip data-for="hideProgress">
                <FontAwesomeIcon icon="question-circle" size="sm" />
              </a>
              <ReactTooltip
                id="hideProgress"
                place="top"
                type="dark"
                effect="solid"
              >
                <span>Whether or not to hide the countdown bar.</span>
              </ReactTooltip>:
            </ItemLeft>
            <ItemRight>
              <ButtonGroup>
                <ButtonGroupBtn
                  onClick={() =>
                    this.props.changeNotificationSettings({
                      hideProgressBar: true
                    })
                  }
                  isActive={
                    this.props.notificationSettings.hideProgressBar !== false
                  }
                >
                  Yes
                </ButtonGroupBtn>
                <ButtonGroupBtn
                  onClick={() =>
                    this.props.changeNotificationSettings({
                      hideProgressBar: false
                    })
                  }
                  isActive={
                    this.props.notificationSettings.hideProgressBar === false
                  }
                >
                  No
                </ButtonGroupBtn>
              </ButtonGroup>
            </ItemRight>
          </SimpleGrid>
          <SimpleGrid>
            <ItemLeft>
              pauseOnHover{" "}
              <a data-tip data-for="pauseProgress">
                <FontAwesomeIcon icon="question-circle" size="sm" />
              </a>
              <ReactTooltip
                id="pauseProgress"
                place="top"
                type="dark"
                effect="solid"
              >
                <span>
                  Pause the countdown when hovering on the notification.
                </span>
              </ReactTooltip>:
            </ItemLeft>
            <ItemRight>
              <ButtonGroup>
                <ButtonGroupBtn
                  onClick={() =>
                    this.props.changeNotificationSettings({
                      pauseOnHover: true
                    })
                  }
                  isActive={
                    this.props.notificationSettings.pauseOnHover !== false
                  }
                >
                  Yes
                </ButtonGroupBtn>
                <ButtonGroupBtn
                  onClick={() =>
                    this.props.changeNotificationSettings({
                      pauseOnHover: false
                    })
                  }
                  isActive={
                    this.props.notificationSettings.pauseOnHover === false
                  }
                >
                  No
                </ButtonGroupBtn>
              </ButtonGroup>
            </ItemRight>
          </SimpleGrid>
        </SimpleColumnGrid>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.store
  };
}
function mapStateToSettingsProps(state) {
  return {
    ...state.store
  };
}
const mapDispatchToProps = {
  openSettings
};
const mapDispatchToSettingsProps = {
  closeSettings,
  changeNotificationPosition,
  changeTheme,
  changeNotificationSettings,
  addNotification
};

const StatefullSettingsButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsButton);

const StatefullSettings = connect(
  mapStateToSettingsProps,
  mapDispatchToSettingsProps
)(Settings);
export { StatefullSettingsButton, StatefullSettings };
