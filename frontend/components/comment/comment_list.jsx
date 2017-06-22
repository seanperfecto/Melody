import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: '', song_id: '', user_id: '' };

    this.submitComment = this.submitComment.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderTrash = this.renderTrash.bind(this);
  }

  componentDidMount(){
    const songId = parseInt(this.props.match.params.songId);
    this.props.fetchCommentsBySong(songId);
    this.setState({song_id: songId});
    if (this.props.currentUser) {
      this.setState({user_id: this.props.currentUser.id});
    }
  }

  componentWillUnmount(){
    this.props.clearComments();
    this.props.clearCommentErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.songId !== nextProps.match.params.songId) {
      this.props.clearComments();
    }
  }

  updateBody(e){
    this.setState({ body: e.target.value });
  }

  submitComment(e){
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createComment({comment: this.state})
        .then(this.props.clearCommentErrors())
        .then(()=> {
          this.setState({body: ''});
        });
    } else {
      window.globalOpenModal();
    }

  }

  renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, idx) => (
        <li key={`${idx}`}>{error}</li>
      ))}
    </ul>
  );
  }

  renderTrash(userId, commentId) {
    const { currentUser } = this.props;
    let trash;
    if (currentUser) {
      if (currentUser.id === userId) {
        trash = <i onClick={()=>this.props.deleteComment(commentId)}
          className="fa fa-times" aria-hidden="true"></i>;
        }
      }
      return trash;
    }


  render(){
    const { comments, errors, currentUser } = this.props;
    let trash;

    let allComments = comments.map((comment, idx) => {
      return <li className='comment-item' key={idx}>
              <div>
                <Link to={`/user/${comment.user_id}`}>
                  <img src={comment.user_pic} alt="profilepic" /><br/>
                  <h6>{comment.user_username}</h6>
                </Link>
              </div>
              <div className='comment-info'>
                {comment.body}<br/>
              <span>{comment.time} ago&nbsp;{this.renderTrash(comment.user_id, comment.id)}</span>
              </div>
              </li>;
    });
    if (allComments.length === 0) {
      allComments = <div>There are no comments.<br/>
        <img src='http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_149/v1495683419/melody_logo_bw_yeybpv.png'
          alt='melody_bw_logo' />
      </div>;
    }

    return(
      <div className="comment-form-container">
        {this.renderErrors()}
        <form onSubmit={this.submitComment}>
          <textarea value={this.state.body} onChange={this.updateBody} /><br/>
          <input type='submit' value='Submit Comment' />
        </form>
        <ul className='comment-list'>
          {allComments}
        </ul>
      </div>

    );
  }
}

export default withRouter(CommentList);
