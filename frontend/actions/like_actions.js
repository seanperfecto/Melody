// import * as LikeApiUtil from '../util/like_api_util';
//
//
//
//
// export const createLike = songId => dispatch => (
//   LikeApiUtil.createLike(songId).then(() => (
//     dispatch(addLikeToSong(songId)))
//   )
// );
//
//
// export const deleteLike = songId => dispatch => (
//   LikeApiUtil.deleteLike(songId).then(() => (
//     dispatch(removeLikeToSong(songId))
//   ))
// );
//
// export const bookmarkEvent = eventId => dispatch => {
//   return BookmarkAPIUtil.createBookmark(eventId)
//     .then((event) => {
//       dispatch(addBookmarkToEvent(eventId));
//     });
// };
//
// export const unBookmarkEvent = eventId => dispatch => {
//   return BookmarkAPIUtil.deleteBookmark(eventId)
//     .then((event) => dispatch(removeBookmarkFromEvent(eventId)));
// };
// case ADD_LIKE_TO_SONG:
//   nextState.songs[action.id].liked = true;
//   return nextState;
// case REMOVE_LIKE_TO_SONG:
//   nextState.songs[action.id].liked = false;
//   return nextState;
