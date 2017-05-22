import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

const customStyles = {
  overlay : {
   position          : 'fixed',
   top               : 0,
   left              : 0,
   right             : 0,
   bottom            : 0,
   backgroundColor   : 'rgba(170, 170, 170, .5)'
 },
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    border                : '0',
    outline               : 'none',
    borderRadius          : '4px',
  }
};

class AuthModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    this.props.clearErrors();
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    let buttonName;
    let buttonType;
    let type;
    if (this.props.type === "signin") {
      buttonName = "Log In";
      buttonType = (
        <button className="header-button"
          onClick={this.openModal}>{buttonName}</button>
      );
      type = "signin";
    } else if (this.props.type === "signup") {
      buttonName = "Sign Up";
      buttonType = (
        <button className="header-button"
          onClick={this.openModal}>{buttonName}</button>
      );
      type = "signup";
    } else {
      buttonName = "Create an Account";
      buttonType = (
        <button className="splash-button"
          onClick={this.openModal}>{buttonName}</button>
      );
      type = "signup";
    }
    return(
      <div>
      { buttonType }

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Auth Modal">

          <SessionFormContainer type={type} />
      </Modal>
  </div>
    );
  }
}

export default AuthModal;
