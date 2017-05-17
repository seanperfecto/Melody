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
    top                   : '20%',
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

class SampleModal extends React.Component {
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
    const buttonName = this.props.type === "signin" ? "Log In" : "Sign Up";
    return(
      <div>
      <button className="header-button" onClick={this.openModal}>{buttonName}</button>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Auth Modal">

          <SessionFormContainer type={this.props.type} />
      </Modal>
    </div>
    );
  }
}

export default SampleModal;
