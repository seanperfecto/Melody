```js
{
  currentUser: {
    id: 1,
    username: "seanperfecto"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSong: {errors: ["title can't be blank"]}
  },
  songs: {
    1: {
      title: "Song 1",
      description: "Description 1",
      song_url: "./song1.mp3",
      genre: "pop",
      artist_id: 1
    }
  },
  comments: {
    1: {
      body: "This is amazing",
      song_id: 1,
      author_id: 2,
    }
  }
  commentFilter: [1, 7, 14]
}
```
