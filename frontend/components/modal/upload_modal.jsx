import React from 'react';
import Modal from 'react-modal';
import SongFormContainer from '../song/song_form_container';

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
    top                   : '45%',
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

class UploadModal extends React.Component {
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
    this.props.clearSongErrors();
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    let buttonName;
    if (this.props.type === "upload") {
      buttonName = <button className="header-button"
        onClick={this.openModal}>Upload</button>;
    } else if (this.props.type === "edit") {
      buttonName = <button id="edit-button" className="detail-ed-button"
        onClick={this.openModal}>Edit Song</button>;
    }
    return(
      <div>
        { buttonName }

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Auth Modal">

          <SongFormContainer type={this.props.type}
                             song={this.props.song}
                             closeModal={this.closeModal}
                             user={this.props.id} />
      </Modal>
  </div>
    );
  }
}

export default UploadModal;
