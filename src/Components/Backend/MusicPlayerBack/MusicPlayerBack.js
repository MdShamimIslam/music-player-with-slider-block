import React, { useState, useRef } from 'react';
import { FaBackward, FaForward, FaPlay, FaPause } from '../../../utils/icons'
import { musics } from '../../../utils/options';

const MusicPlayerBack = ({ attributes, setAttributes }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { currentMusicIndex } = attributes;
    const audioRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const changeMusic = (direction) => {
        const audio = audioRef.current;
        let newIndex = currentMusicIndex;

        if (direction === "forward") {
            newIndex = (currentMusicIndex + 1) % musics.length;
        } else if (direction === "backward") {
            newIndex = (currentMusicIndex - 1 + musics.length) % musics.length;
        }

        setAttributes({ currentMusicIndex: newIndex });
        audio.src = musics[newIndex].source;
        if (isPlaying) {
            audio.play();
        }
    };

    const updateProgress = () => {
        const audio = audioRef.current;
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };

    const handleSeek = (event) => {
        const audio = audioRef.current;
        const seekTime = (event.target.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    };

    return <>
        <div className='mainMusicPlayer'>
            <div className="swiper-wrapper">
                {
                    musics.map((music, idx) => <div key={idx} className="swiper-slide">
                        <img src={music.img} />
                    </div>)
                }
            </div>

            <div className="music-player">
                <h3>{musics[currentMusicIndex].title}</h3>
                <p>{musics[currentMusicIndex].name}</p>
                <audio id="song" ref={audioRef} onTimeUpdate={updateProgress} onEnded={() => changeMusic('forward')}>
                    <source src={musics[currentMusicIndex].source} type="audio/mpeg" />
                </audio>
                <input value={progress ? progress : 0} onChange={handleSeek} defaultValue="0" id="progress" type="range" />
                <div className="controls">
                    <button className="backward" onClick={() => changeMusic('backward')}> <FaBackward /></button>
                    <button className="play-pause-btn" onClick={togglePlayPause}>
                        {isPlaying ? <FaPause id="controlIcon" /> : <FaPlay id="controlIcon" />}
                    </button>
                    <button className="forward" onClick={() => changeMusic('forward')}> <FaForward /></button>
                </div>
            </div>
        </div>
    </>
}

export default MusicPlayerBack