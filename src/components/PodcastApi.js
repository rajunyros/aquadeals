import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import ReactAudioPlayer from 'react-audio-player';
import {AudioPlayerControlSprite, AudioPlayer, TrackType} from 'react-audio-player-pro';
import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';


import ReactWebMediaPlayer from 'react-web-media-player';



import axios from "axios";

const audioTrackList = [
    {
        // string - path to audio file, required
        src: '/path/to/audio/file',

        // string - 'none' | 'metadata' | 'auto', default: 'auto', optional
        preload: 'auto',

        // duration - number, default: 0, optional
        // will updated automatically when track started or metadata loaded
        duration: 100,

        // JSX.Element - custom content instead of title, optional, deafult: <title> or <src>
        // content: <CustomContent/>,

        // MediaMetadata - media meta data, see `mediaMetadata` above
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata
        // optional
        mediaMetadata: {
            title: 'Lesser Faith',
            artist: 'J. Syreus Bach',
            album: 'Ability to Break ~ Energetic Tracks',
            artwork: [
                {src: '/path/to/image/64px/64px', sizes: '64x64', type: 'image/png'},
                {src: '/path/to/image/128px/128px', sizes: '128x128', type: 'image/png'},
            ],
        },
    },
    // other tracks here...
];

export const PodcastApi = () => {


  useEffect(() => {
   const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9deda4e2e0msh65519f159c1444cp1be2b3jsnee945f8dda9b',
    'X-RapidAPI-Host': 'listennotes.p.rapidapi.com'
  }
};

fetch('https://listennotes.p.rapidapi.com/api/v1/search?q=star%20wars&type=episode&genre_ids=68%2C82&language=English&safe_mode=1&sort_by_date=0&offset=0&only_in=title&len_max=10&len_min=2&published_after=1390190241000&published_before=1490190241000', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  });

  return (
    <div>
      <h2>PodcastApi</h2>
      <p>ReactPlayer</p>

      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />

      <br/><br/>
      <p>ReactAudioPlayer</p>
      <ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
/>

      <br/><br/>


       <AudioPlayerControlSprite/>
            <AudioPlayer
                // Array<TrackType> - list of track, see `audioTrackList` above, required
                trackList={audioTrackList}

                // string - wrapper's class name, optional, deafult: ''
                className="my-class-name"

                // callback function - called on did mount, optional, default: noop
                onDidMount={console.log}

                // default player state, optional
                defaultState={{
                    // boolean - is player muted, optional, default: false
                    isMuted: false,

                    // number - active song index, optional, default: 0
                    activeIndex: 0,

                    // boolean - is shuffle on, optional, default: false
                    isShuffleOn: false,

                    // boolean - is track list open, optional, default: true
                    isTrackListOpen: true,

                    // string: 'none' | 'all' | 'one' - repeating state, optional, default: 'none'
                    repeatingState: 'none',
                }}
            />

            <br/><br/>

           <ReactWebMediaPlayer
  title="My own vinyl player"
  audio="https://any-link.com/my-music.mp3" 
  thumbnail="https://any-link.com/audio-thumbnail.jpg"
  vinyl={{img: "https://any-link.com/vinyl.jpg", rpm: 33 }}
/>


    </div>
  );
};
