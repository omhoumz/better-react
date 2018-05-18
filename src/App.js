import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  display: "inline-block"
}
let filterStyles = {
  margin: "20px 0",
  padding: "5px"
}
let AppStyles = {
  "font-family": "'Segoe UI', 'helvetica neue', helvetica, sans-serif"
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
        <h2>{Math.round(totalDuration/60)} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '50%'}} >
        <label style={filterStyles} htmlFor="filter">Filter by name: </label>
        <input style={filterStyles} type="text" id="filter" onChange={e => this.props.onTextChange(e.target.value)} />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, width: '25%'}} >
        <img alt="Playlist cover placeholder" src={"http://via.placeholder.com/120x120"} />
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
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData})
    }, 50);
  }
  render() {
    let headerStyle = {fontSize: "50px"}
    let playlistsToRender = this.state.serverData.user ? 
      this.state.serverData.user.playlists
        .filter( playlist =>
          playlist.name.toLocaleLowerCase().includes(
            this.state.filterString.toLocaleLowerCase()
        )
      ) : []
    return (
      <div className="App" style={AppStyles} >
        { this.state.serverData.user ?
          <div className="appContent">
            <header>
              <h1 style={headerStyle} >
                { this.state.serverData.user.name }'s Playlists
              </h1>
              <PlaylistCounter playlists={playlistsToRender} />
              <HoursCounter playlists={playlistsToRender} />
              <Filter onTextChange={text => this.setState({filterString: text})} />
            </header>
            <div style={{height: "30px"}} ></div>
            <section>
              {playlistsToRender.map(playlist =>
                  <Playlist playlist={playlist} />)
              }
            </section>
          </div> : <h1>Loading ...</h1>
        }
      </div>
    );
  }
}

export default App;
