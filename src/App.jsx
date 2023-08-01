import './App.css';
import image6166 from './assets/images/Rectangle 6166.png';
import image61664 from './assets/images/Rectangle 6166-4.png';
import image61663 from './assets/images/Rectangle 6166-3.png';
import image61662 from './assets/images/Rectangle 6166-2.png';
import image61661 from './assets/images/Rectangle 6166-1.png';
import iconSong from './assets/images/icon-song.png';
import logoName from './assets/images/logoName.png';
import IonIcon from '@reacticons/ionicons';
import Search from './Search';
import { useState } from 'react';
function App() {




  return (
    <>
      return (
      <div className="container">
        <div className="side-left">
          <div className="logo">
            chinez<span>music</span>
          </div>
          <div className="grid-list-item">
            <ul className="list-wrapper">
              <div className="list-item active">
                <IonIcon name="home" />
                <a href="#" className="item-text">
                  Home
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="compass" />
                <a href="#" className="item-text">
                  Discover
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="radio" />
                <a href="#" className="item-text">
                  Radio
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="albums" />
                <a href="#" className="item-text">
                  albums
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="musical-note" />
                <a href="#" className="item-text">
                  Podcast
                </a>
              </div>
            </ul>
            <ul className="list-wrapper">
              <div className="list-title">
                <h4>Library</h4>
              </div>
              <div className="list-item">
                <IonIcon name="add-circle" />
                <a href="#" className="item-text">
                  recently added
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="star" />
                <a href="#" className="item-text">
                  favorite songs
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="document" />
                <a href="#" className="item-text">
                  local files
                </a>
              </div>
            </ul>
            <ul className="list-wrapper">
              <div className="list-title">
                <h4>Playlist</h4>
                <IonIcon name="add" />
              </div>
              <div className="list-item">
                <IonIcon name="library" />
                <a href="#" className="item-text">
                  Lo-fi music
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="library" />
                <a href="#" className="item-text">
                  Best of Bon jovi
                </a>
              </div>
              <div className="list-item">
                <IonIcon name="library" />
                <a href="#" className="item-text">
                  opening anime
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="header">
            <div className="navbar">
              <div className="navbar-left">
                <button className="btn btn-back">
                  <IonIcon name="chevron-back" />
                </button>
                <div className="link-nav">
                  <p className="link-nav-title">Home</p>
                  <IonIcon name="chevron-forward" />
                  <p className="link-nav-last">Popular Artist</p>
                </div>
              </div>
              <div className="navbar-right">
                < Search />
                <div className="icon-notifications" >
                  <IonIcon name="notifications" />
                </div>
              </div>
            </div>
            <div className="banner">
              <div className="banner-data">
                <div className="verif">
                  <IonIcon name="checkmark-circle" />
                  <div className="verif-name">Verified Artist</div>
                </div>
                <h2>Ed Sheeran</h2>
                <div className="listeners-people">
                  <IonIcon name="headset" />
                  <p>82,736,050</p>
                  <p>monthly listeners</p>
                </div>
                <div className="buttons-banner">
                  <button className="play">PlAY</button>
                  <button className="following">
                    <span>
                      <IonIcon name="checkmark" />
                    </span>{' '}
                    FOLLOWING
                  </button>
                </div>
              </div>
              <div className="banner-image" />
            </div>
            <div className="data-populars">
              <div className="head-items">
                <h3>Popular</h3>
                <p>See All</p>
              </div>
              <div className="data-items-popular">
                <div className="items-popular-left">
                  <div>1</div>
                  <img src={iconSong} />
                  <div className="title-items-popular">Shiver</div>
                </div>
                <div className="items-popular-right">
                  <p className="listener">
                    <IonIcon name="headset" /> 1.952.545.959
                  </p>
                  <p className="time">
                    <IonIcon name="time" /> 4:53
                  </p>
                  <IonIcon name="heart-outline" />
                  <IonIcon name="ellipsis-horizontal" />
                </div>
              </div>
              <div className="data-items-popular">
                <div className="items-popular-left">
                  <div>1</div>
                  <img src={image61662} />
                  <div className="title-items-popular">Shiver</div>
                </div>
                <div className="items-popular-right">
                  <p className="listener">
                    <IonIcon name="headset" /> 1.952.545.959
                  </p>
                  <p className="time">
                    <IonIcon name="time" /> 4:53
                  </p>
                  <IonIcon name="heart-outline" />
                  <IonIcon name="ellipsis-horizontal" />
                </div>
              </div>
              <div className="data-items-popular">
                <div className="items-popular-left">
                  <div>1</div>
                  <img src={image61661} />
                  <div className="title-items-popular">Shiver</div>
                </div>
                <div className="items-popular-right">
                  <p className="listener">
                    <IonIcon name="headset" /> 1.952.545.959
                  </p>
                  <p className="time">
                    <IonIcon name="time" /> 4:53
                  </p>
                  <IonIcon name="heart-outline" />
                  <IonIcon name="ellipsis-horizontal" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-right">
          <div className="data-user">
            <div className="logo-user">
              <img src={logoName} alt="" />
            </div>
            <div className="data-names">
              <p className="name">Syeikhan Ritzmy</p>
              <div className="type-account">
                <p className="title-type">Premium</p>
                <p>♦</p>
                <p>👑</p>
              </div>
            </div>
            <IonIcon name="arrow-down" />
          </div>
          <div className="recent-played">
            <div className="title-recent">
              <h4>Recent Played</h4>
              <p>See All</p>
            </div>
            <div className="playlists">
              <div className="items-playlist">
                <div className="logo-playlist">
                  <img src={image61661} alt="" />
                </div>
                <div className="data-playlist">
                  <p className="title-playlist">Perfect</p>
                  <p className="source-title">Ed Sheeran</p>
                </div>
                <div className="time-playlist">
                  <p>2 min ago</p>
                </div>
              </div>
              <div className="items-playlist">
                <div className="logo-playlist">
                  <img src={image61662} alt="" />
                </div>
                <div className="data-playlist">
                  <p className="title-playlist">Perfect</p>
                  <p className="source-title">Ed Sheeran</p>
                </div>
                <div className="time-playlist">
                  <p>2 min ago</p>
                </div>
              </div>
              <div className="items-playlist">
                <div className="logo-playlist">
                  <img src={image61663} alt="" />
                </div>
                <div className="data-playlist">
                  <p className="title-playlist">Cupid</p>
                  <p className="source-title">fifty fifty</p>
                </div>
                <div className="time-playlist">
                  <p>2 min ago</p>
                </div>
              </div>
              <div className="items-playlist">
                <div className="logo-playlist">
                  <img src={image61664} alt="" />
                </div>
                <div className="data-playlist">
                  <p className="title-playlist">Komang</p>
                  <p className="source-title">Raim Laode</p>
                </div>
                <div className="time-playlist">
                  <p>2 min ago</p>
                </div>
              </div>
              <div className="items-playlist">
                <div className="logo-playlist">
                  <img src={image6166} alt="" />
                </div>
                <div className="data-playlist">
                  <p className="title-playlist">Perfect</p>
                  <p className="source-title">Ed Sheeran</p>
                </div>
                <div className="time-playlist">
                  <p>2 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default App;
