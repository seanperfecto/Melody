import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: '', description: '', image: null,
      imageUrl: null, track: null, user_id: this.props.id};
    this.update = this.update.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateTrack = this.updateTrack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  errors() {
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
      .then(data => this.props.history.push(`/song/${data.id}`));
  }

  render(){
    return(
      <section className='song-form-container'>
        <form className="song-form">
          <input
                type="text"
                value={this.state.title}
                placeholder="Title"
                onChange={this.update('title')}
              />
          <input
                type="description"
                value={this.state.description}
                placeholder="Description"
                onChange={this.update('description')}
              />
          <input type="file" onChange={this.updateImage}/>
          <input type="file" onChange={this.updateTrack}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </section>
    );
  }
}

export default withRouter(SongForm);