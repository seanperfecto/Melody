import { connect } from 'react-redux';
import CommentList from './comment_list';

import { createComment, deleteComment,
         fetchCommentsBySong, clearComments,
         clearCommentErrors } from '../../actions/comment_actions';
import { allCommentsBySong } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  comments: allCommentsBySong(state.comments),
  errors: state.comments.errors,
  songId: ownProps.songId
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id)),
  fetchCommentsBySong: id => dispatch(fetchCommentsBySong(id)),
  clearComments: () => dispatch(clearComments()),
  clearCommentErrors: () => dispatch(clearCommentErrors())
});

export default connect(mapStateToProps,
                       mapDispatchToProps)(CommentList);
