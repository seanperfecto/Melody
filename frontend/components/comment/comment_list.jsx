import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchCommentsBySong(parseInt(this.props.match.params.songId));
  }

  componentWillUnmount(){
    this.props.clearComments();
  }

  render(){
    console.log(this.props);
    return(
      <div>hi</div>
    );
  }
}

export default withRouter(CommentList);
