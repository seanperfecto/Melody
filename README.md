# Melody

[Melody Live Link](https://melodymusic.herokuapp.com/)

A simply beautiful and powerful app for the music lover out there, Melody, inspired by the functionalities of Soundcloud, is a full stack application that allows song management.

![frontpage](http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_744/v1495834968/Screen_Shot_2017-05-26_at_2.32.23_PM_byajt4.png)

This single page web application (built within two weeks) harnesses the power of Ruby on Rails and a PostgresSQL database. On the frontend, Melody is built on React.js utilized with the Redux framework, and utilizes AWS cloud hosting.

## Features

#### Music Player with Continuous Play

Melody's main feature, the ability to play music, is contained with an Audio Player Component stored in the footer of the main App Component, which allows users to navigate the application without interrupting playback.

```javascript
// app.jsx
const App = () => (
  <div className='app'>
    <div>
      <header>
        <div className='header-contents'>
          <HeaderLogo />
          <NavbarContainer />
        </div>
      </header>
      <Route exact path="/" component={ HeroHeader } />
      [...]
    </div>
    <footer>
      <PlayerContainer />
      <FooterInfo />
    </footer>
  </div>
);
```

Using the [React-Audio-Player](https://github.com/justinmc/react-audio-player) library as a wrapper to the HTML `<audio>` tag, I was able to hide the main default HTML audio player while adding different functionality through React and my own personal styling.

![Continuous_player](http://res.cloudinary.com/dqr2mejhc/image/upload/v1495839244/May-26-2017_15-50-20_trs94p.gif)

The music player has the basic functionality of the HTML audio player using React functions. The user has the ability to select the next song, control volume, and even click and scrub through the progress bar with ease. When the music player component is popped up, the user also is able to control pause/play with the space bar using a `keydown` event listener.

```javascript
// player.jsx
handleSpace(e) {
  if (this.props.song) {
    if ((e.keyCode === 32) && (e.target === document.body)) {
      e.preventDefault();
      this.togglePlay();
    }
  }
}

```

#### Easy Editing/Uploading

Instead of guiding the user to different main web components while trying to upload/edit a song, a modal pops up, allowing easier UX. The [React-Modal](https://github.com/reactjs/react-modal) library allows a modal to open depending on what button the user clicks on.

![upload_modal](http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_527/v1495837806/Screen_Shot_2017-05-26_at_3.26.31_PM_jfumq4.png)

The `UserDetail` component also allows for easier user experience. The user has the ability of individually editing each bio information, and using React functionality, sends that one piece of information to update the database while persisting the others.

![profilepage](http://res.cloudinary.com/dqr2mejhc/image/upload/v1495839042/May-26-2017_15-46-33_jnbs9p.gif)

#### Original Web Design

Although the functionality of this web application resembles many music web apps out there, Melody is unique in that its web design and interface is different than anything around. With its simple yet unique layout, my website provides a fun, novel experience for any user while allowing the site's main purpose to stand out.

## Future Implementations for Melody

#### Playlists

Currently, the music player loads up songs on the music player based on the component rendered. Playlists will allow the user to specify which songs they want to play in order.

#### Search

I am planning on adding a search component on the header that allows users to search the song/user that he/she is looking for. I will also add autocomplete that will send new AJAX requests on change of the search.

#### Following/More User Interaction

The user profile pages currently possess bio information as well as uploaded songs. In the future, I will also like to add a following function and messaging to allow for more personal interaction.
