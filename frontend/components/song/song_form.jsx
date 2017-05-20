import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: '', description: '', image: '',
      imageUrl: 'http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_1262/v1495044542/melody_logo3_q3qjg9.png',
      track: '', user_id: this.props.id};
    this.update = this.update.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateTrack = this.updateTrack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  updateImage(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateTrack(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ track: file });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[description]", this.state.description);
    formData.append("song[user_id]", this.state.user_id);
    formData.append("song[image]", this.state.image);
    formData.append("song[track]", this.state.track);
    this.props.createSong(formData)
      .then(this.setState({ title: '' }))
      .then(data => {
        this.props.history.push(`/song/${data.song.id}`);
      }).then(() => this.props.closeModal());
  }

  render(){

    return(
      <section className='song-form-container'>
        {this.renderErrors()}
        <form className="song-form">
          <div className='song-form-left'>
            <img src={this.state.imageUrl}
               alt="album-art" />
            <br />
            <input type="file" onChange={this.updateImage}/>
          </div>
          <div className='song-form-right'>
            <input
                  type="text"
                  value={this.state.title}
                  placeholder="Title"
                  onChange={this.update('title')}
                  className="song-input"
                />
              <hr />
            <textarea placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              className="song-description"
              cols="40" rows="5"></textarea>
              <hr />
            <p>Choose Song:</p> <input className="file-button"
            type="file" onChange={this.updateTrack}/>
            <hr />
            <button disabled={!this.state.title} onClick={this.handleSubmit}>Upload Song!</button>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(SongForm);
