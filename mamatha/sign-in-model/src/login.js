import React from "react";
import Modal from "react-responsive-modal";
import LoginForm from "./LoginForm";
import { Button } from "semantic-ui-react";
export default class ModalLogin extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="example">
        <Button onClick={this.onOpenModal}>Open</Button>{" "}
        <Modal open={open} onClose={this.onCloseModal} center>
          <LoginForm />
        </Modal>
      </div>
    );
  }
}
