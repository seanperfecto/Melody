import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: '', song_id: '', user_id: '' };

    this.submitComment = this.submitComment.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount(){
    const songId = parseInt(this.props.match.params.songId);
    this.props.fetchCommentsBySong(songId);
    this.setState({song_id: songId, user_id: this.props.currentUser.id});
  }

  componentWillUnmount(){
    this.props.clearComments();
  }

  updateBody(e){
    this.setState({ body: e.target.value });
  }

  submitComment(e){
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createComment({comment: this.state});
    } else {
      window.globalOpenModal();
    }

  }

  render(){
    const { comments } = this.props;
    console.log(comments);
    let allComments = comments.map((comment, idx) => {
      return <li key={idx}>
              <img src={comment.user_pic} alt="profilepic" />
                <div>
                  {comment.user_username}
                  {comment.body}
                  {comment.time}
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
      <div>
        <form onSubmit={this.submitComment}>
          <textarea value={this.state.body} onChange={this.updateBody} />
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
