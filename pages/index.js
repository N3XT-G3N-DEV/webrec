import Head from 'next/head';
import Navigation from '../components/Navigation';

const highlights = [
  'Independently operated label with a global outlook',
  'Curated releases that blend street energy with cinematic texture',
  'Direct-to-fan drops, exclusive visuals, and live session archives',
];

const releases = [
  { title: 'Midnight Signals', type: 'EP', mood: 'noir drill / atmospheric bass' },
  { title: 'Concrete Halo', type: 'Single', mood: 'anthemic hooks / razor verses' },
  { title: 'Encrypted Waves', type: 'Visual', mood: 'monochrome cityscapes / slow-burn storytelling' },
];

const HomePage = () => {
  return (
    <div className="page">
      <Head>
        <title>International ENTERTAINMENT Records · OG ENCRO</title>
        <meta name="description" content="A future-facing record label and creative house. Home to the artist collective and movement led by OG ENCRO." />
      </Head>
      <Navigation />

      <main>
        <section id="home" className="hero">
          <div className="hero__inner">
            <p className="eyebrow">ogencro.one</p>
            <h1>International ENTERTAINMENT Records</h1>
            <p className="lede">
              A future-facing record label and creative house. Home to the artist collective and movement led by{' '}
              <strong>OG ENCRO</strong>.
            </p>
            <div className="cta-row">
              <a className="button" href="#contact">Book / Collaborate</a>
              <a className="button button--ghost" href="#artist">Meet OG ENCRO</a>
            </div>
          </div>
        </section>

        <section id="label" className="panel">
          <div className="panel__header">
            <p className="eyebrow">Label Vision</p>
            <h2>International reach. Underground DNA.</h2>
            <p>
              International ENTERTAINMENT Records is built to move culture quickly—crossing borders and platforms
              without losing the rawness of the streets. We partner with directors, producers, and visual artists to
              ship ideas from studio to screen.
            </p>
          </div>
          <ul className="grid">
            {highlights.map((item) => (
              <li key={item} className="card">{item}</li>
            ))}
          </ul>
        </section>

        <section id="artist" className="panel panel--alt">
          <div className="panel__header">
            <p className="eyebrow">Artist</p>
            <h2>OG ENCRO</h2>
            <p>
              Storyteller, architect, and flagship voice of the label. OG ENCRO crafts stark lyricism over cinematic
              production—turning midnight rides, coded messages, and inner-city mythology into vivid records.
            </p>
          </div>

          <div className="artist-callout">
            <div>
              <h3>Signature energy</h3>
              <p>Gravel vocals, dynamic flows, and hooks engineered for arenas and alleyway speakers alike.</p>
            </div>
            <div>
              <h3>Live &amp; direct</h3>
              <p>Exclusive sets streamed from hidden rooms, plus intimate shows for fans who move first.</p>
            </div>
            <div>
              <h3>Visuals</h3>
              <p>Black-and-white futurism—working with filmmakers to capture OG ENCRO&apos;s world frame by frame.</p>
            </div>
          </div>

          <div className="release-grid">
            {releases.map((release) => (
              <div key={release.title} className="release-card">
                <p className="eyebrow">{release.type}</p>
                <h4>{release.title}</h4>
                <p className="muted">{release.mood}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="panel">
          <div className="panel__header">
            <p className="eyebrow">Contact</p>
            <h2>Plug in with the label</h2>
            <p className="muted">
              Booking, sync, press, and creative partnerships. We answer fast.
            </p>
          </div>
          <div className="contact-card">
            <div>
              <h3>Email</h3>
              <a href="mailto:contact@ogencro.one">contact@ogencro.one</a>
            </div>
            <div>
              <h3>Studios</h3>
              <p className="muted">Rotterdam · London · Remote sessions worldwide</p>
            </div>
            <div>
              <h3>Social</h3>
              <p className="muted">@OGENCRO on all major platforms</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} International ENTERTAINMENT Records · OG ENCRO</p>
      </footer>
    </div>
  );
};

export default HomePage;
