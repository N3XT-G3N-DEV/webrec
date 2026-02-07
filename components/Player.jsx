import React from 'react';

const Player = () => {
    const sampleTrack = null;

    return (
        <section id="player">
            <h2>Player</h2>
            <p>Stream your favorite tracks right here.</p>
            {sampleTrack ? (
                <audio controls src={sampleTrack}>
                    Your browser does not support the audio element.
                </audio>
            ) : (
                <p>Select a track to start listening.</p>
            )}
        </section>
    );
};

export default Player;
