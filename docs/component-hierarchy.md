## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar
 - Footer
  * Include MusicPlayContainer

**MusicPlayerContainer**
  -SongProgress
  -SongDetail

**SongsContainer**
 - SongsHeader
  * SongIndex

**PlaylistContainer**
 - PlaylistHeader
  + SongIndex

**SearchResultsContainer**
 - Search
 - SongIndex

**SongIndex**
 - SongIndexItem
  + SongDetail
    - Comments
      - Comment
    * Song

**NewSongContainer**
 - NewSong
  - NewSongForm
  - NewSongButton

**UsersContainer**
- UserIndexItem
 + UserDetail

**Search**
+ AutoSearch
* AutoSearchResults

**NewPlaylist**
 - NewPlaylist

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/song/:songId" | "SongsContainer" |
| "/home/playlists/:playlistId" | "PlaylistContainer" |
| "/home/search-results" | "SearchResultsContainer" |
| "/new-song" | "NewSongContainer" |
| "/search" | "Search" |
| "/new-playlist" | "NewPlaylist" |
| "/new-comment" | "NewComment" |
| "/search" | "Search" |
| "/home/user/:userId" | "UsersContainer" |
