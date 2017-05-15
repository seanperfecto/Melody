# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/songs`
  - Songs index/search
- `POST /api/songs`
- `GET /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`


### Comments

- A song's comments will be included in the song show template
- `GET /api/comments`
- `POST /api/songs/:song_id/comments`: add comment to song
- `DELETE /api/songs/:song_id/comment/:comment_name`: removes comment from song

**BONUS**
### Playlists

  - `GET /api/playlists`
  - `POST /api/playlists`
  - `GET /api/playlists/:id`
  - `DELETE /api/playlists/:id`
  - `GET /api/playlists/:id/songs`
  - index of all songs for a playlist
