import React from 'react';

const Player = () => {
    return (
        <section style={{ padding: '2rem' }}>
            <h2>Player</h2>
            <p>Stream the latest tracks right here.</p>
            <audio controls style={{ width: '100%', maxWidth: '480px' }}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </section>
    );
};

export default Player;
