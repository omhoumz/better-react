import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  display: "inline-block"
}
let image = {
  sm: "http://via.placeholder.com/20x20",
  md: "http://via.placeholder.com/120x120"
}
let fakeServerData = {
  user: {
    name: "Omar",
    playlists: [
      {
        name: "My Favorites",
        songs: [
          {
            name: 'Le song',
            duration: 1210
          },
          {
            name: 'Une chançon',
            duration: 3200
          },
          {
            name: 'Rosa Heliker',
            duration: 2510
          }
        ]
      },
      {
        name: "Discover Weekly",
        songs: [
          {
            name: 'Le song',
            duration: 1210
          },
          {
            name: 'Une chançon',
            duration: 3200
          },
          {
            name: 'Rosa Heliker',
            duration: 2510
          }
        ]
      },
      {
        name: "Most viewed",
        songs: [
          {
            name: 'Le song',
            duration: 1210
          },
          {
            name: 'Une chançon',
            duration: 3200
          },
          {
            name: 'Rosa Heliker',
            duration: 2510
          }
        ]
      },
      {
        name: "Best Tracks",
        songs: [
          {
            name: 'Le song',
            duration: 1210
          },
          {
            name: 'Une chançon',
            duration: 3200
          },
          {
            name: 'Rosa Heliker',
            duration: 2510
          }
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={ {width: '40%', display: "inline-block" } }>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={ {width: '40%', display: "inline-block" } }>
        <h2>{Math.round(totalDuration/60/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%'}} >
        <img alt="icon" src={image.sm} style={{...defaultStyle, margin: "0 10px -6px"}} />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, width: '25%'}} >
        <img alt="image" src={image.md} />
        <h3>{playlist.name}</h3>
        <ul>
          {
            playlist.songs.map(song =>
              <li>{song.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData})
    }, 200);
  }
  render() {
    let headerStyle = {fontSize: "50px"}
    return (
      <div className="App">
        { this.state.serverData.user ?

          <div className="appContent">
            <header>
              <h1 style={headerStyle} >
                { this.state.serverData.user.name }'s Playlists
              </h1>
              
              <PlaylistCounter playlists={ this.state.serverData.user.playlists } />
              <HoursCounter playlists={ this.state.serverData.user.playlists } />
              <Filter />
            </header>
            <div style={{height: "60px"}} ></div>
            <section>
              {
                this.state.serverData.user.playlists.map(playlist =>
                  <Playlist playlist={playlist}  />
                )
              }
              
            </section>
          </div> : <h1>Loading ...</h1>

        }
      </div>
    );
  }
}

export default App;
