# Theater mode button
This is a theater mode button plugin for videojs react js. With this plugin you don't have
to manually configure theater mode button and you can adjust with your style.

# Install
```
npm i @video-js-plugins/videojs-theater-mode-button
```

or with yarn
```
yarn add @video-js-plugins/videojs-theater-mode-button
```


# Usage
`Support reactjs`

Add id `otnansirk-video-player-wrapper` to your root div of videojs player component
and class `data-vjs-player` to className of tag `<video>`.



Example implement to file `video-player.js`
```
// vide-player.js

import "@video-js-plugins/videojs-theater-mode-button"

const player = videojs(videoElement, options);
player.theaterModeButton(player)

...

// return jsx
<div id='otnansirk-video-player-wrapper'>
    <div data-vjs-player>
        <video ref={videoRef} className="video-js-player" />
    </div>
</div>


```

#### ReactJs
```
// vide-player.js

import videojs from "video.js";
import "video.js/dist/video-js.css";

import "@video-js-plugins/videojs-theater-mode-button"


export const VideoPlayer = ({ options, onReady }) => {

    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);

    React.useEffect(() => {
    // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                console.log("player is ready");
                onReady && onReady(player);
            });

            player.theaterModeButton(player)
        }
    }, [options, videoRef]);

...

// return jsx
<div id='otnansirk-video-player-wrapper'>
    <div data-vjs-player>
        <video ref={videoRef} className="video-js-player" />
    </div>
</div>

```


## Example of html code
### Structure html
This plugin use structure html like this.
but don't worry you can still use your own structure.

don't forget to add `id='otnansirk-video-player-wrapper'` to your root div of videojs player component
```
<div className="row" id='otnansirk-video-player-wrapper'>
    <div className="col-md-8">
        <div data-vjs-player>
            <video ref={videoRef} className="video-js-player video-js vjs-big-play-centered" />
        </div>
        <div className="video-js-content">
            ... // content video description
        </div>
    </div>
    <div className="col-md-4">
        <div className="video-js-curriculum">
            ... // content video curriculum
        </div>
    </div>
</div>
```

### Then you can overwrite style with your own
by adjust this style
```
.otnansirk-theater-mode-button {    
    & .video-js-content, & .video-js-curriculum {
        @media (min-width: 769px) {
            margin-top: 35rem;
        }
    }
    & .video-js-player {
        @media (min-width: 769px) {
            position: absolute;
            width: 97%;
        }
    }

    // You can add your class or update existing style above
} 
```

### Behavior
If the button theater mode active this is always add class `.otnansirk-theater-mode-button` to 
div where you put `id='otnansirk-video-player-wrapper'`