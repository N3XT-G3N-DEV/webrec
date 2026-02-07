import React from 'react';

const releases = [
    { title: 'Midnight Echoes', year: 2024 },
    { title: 'Neon Skies', year: 2023 },
    { title: 'City Lights', year: 2022 },
];

const Releases = () => {
    return (
        <section style={{ padding: '2rem' }}>
            <h2>Releases</h2>
            <ul>
                {releases.map((release) => (
                    <li key={release.title}>
                        {release.title} ({release.year})
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Releases;
