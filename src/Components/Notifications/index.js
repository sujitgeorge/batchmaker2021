import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { removeNotification, updateNotification } from "../../Reducers/actions";

class Notifications extends React.Component {
  componentDidMount() {}
  componentWillReceiveProps(newProps) {}
  render() {
    this.props.notifications
      .filter(x => !x.shown)
      .map(content => this.notify(content));
    return <ToastContainer />;
  }
  notify = content =>
    toast(content.body, {
      onOpen: foo => this.props.updateNotification(content),
      onClose: foo => this.props.removeNotification(content),
      position: this.props.position,
      type: content.type,
      ...this.props.settings
    });
}

const mapStateToProps = state => {
  return {
    notifications: state.store.notifications,
    position: state.store.notificationLocation,
    settings: state.store.notificationSettings
  };
};
const mapDispatchToProps = {
  removeNotification,
  updateNotification
};
const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);

export { NotificationsContainer };
