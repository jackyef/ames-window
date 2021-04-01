import { useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import styles from '../styles/Home.module.css';
import { AmesWindow } from '../components/AmesWindow';

export default function Home() {
  const [withAmbientLight, setWithAmbientLight] = useState(true);
  const [withSpotLight, setWithSpotLight] = useState(false);
  const [withPointingLight, setWithPointingLight] = useState(false);
  const [shouldRotate, setShouldRotate] = useState(true);
  const [withBall, setWithBall] = useState(false);
  const [withRuler, setWithRuler] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 2) {
      setWithBall(false)
    }
    if (step === 4) {
      setWithRuler(false)
    }

    setStep((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Ames Window Illusion</h1>

          <Canvas className="canvas" orthographic>
            {withAmbientLight && <ambientLight />}
            {withSpotLight && (
              <spotLight
                position={[10, 50, 10]}
                angle={Math.PI / 2}
                penumbra={1}
              />
            )}
            {withPointingLight && <pointLight position={[0, 0, 10]} />}
            <AmesWindow
              shouldRotate={shouldRotate}
              withBall={withBall}
              withRuler={withRuler}
              position={[0, 0, 0]}
            />
          </Canvas>

          <div className="dialogContainer">
            {step === 1 && (
              <p>
                This is Ames Window. An illusion that can only be seen by some
                people.
                <br />
                <br />
                What do you see here? Do you see the window oscillating
                (rotating back and forth), or do you see it rotating
                consistently in one direction?
              </p>
            )}
            {step === 2 && (
              <>
                <p>
                  A lot of people would see the window as oscillating back and
                  forth, when in fact, it is rotating in one direction
                  continuously!
                  <br />
                  <br />
                  If you can't see it as rotating in one direction, we can try
                  adding a ball to it and see if it helps you.
                </p>
                <button
                  className="buttonAction"
                  onClick={() => setWithBall((prev) => !prev)}
                >
                  {withBall ? 'Hide ball' : 'Show ball'}
                </button>
              </>
            )}
            {step === 3 && (
              <>
                <p>
                  Next, let's try adding a ruler in between the window.
                </p>
                <button
                  className="buttonAction"
                  onClick={() => setWithRuler((prev) => !prev)}
                >
                  {withRuler ? 'Hide ruler' : 'Show ruler'}
                </button>
              </>
            )}
            {step === 4 && (
              <>
                <p>
                  Whoa, is it trippy? Are you seeing the ruler and window
                  somehow rotating against each other? Does it look like the
                  ruler is somehow cutting through the window? 🤯
                </p>
              </>
            )}
            {step === 5 && (
              <>
                <p>
                  This illusion works best when the lighting condition is
                  consistent even when the object is rotated.
                  <br />
                  <br />
                  Here you can play around with the lightings a little bit. See
                  if it helps you see through the illusion!
                  <br />
                  <br />
                  <em>
                    (I personally find that turning spotlight on while turning
                    off the other lights helps a lot! You might want to give
                    that a try)
                  </em>
                </p>
                <div className="buttonContainer">
                  <button
                    className="buttonAction"
                    aria-pressed={withAmbientLight}
                    onClick={() => setWithAmbientLight((prev) => !prev)}
                  >
                    {withAmbientLight
                      ? 'Ambient light: on'
                      : 'Ambient light: off'}
                  </button>
                  <button
                    className="buttonAction"
                    aria-pressed={withPointingLight}
                    onClick={() => setWithPointingLight((prev) => !prev)}
                  >
                    {withPointingLight
                      ? 'Pointing light: on'
                      : 'Pointing light: off'}
                  </button>
                  <button
                    className="buttonAction"
                    aria-pressed={withSpotLight}
                    onClick={() => setWithSpotLight((prev) => !prev)}
                  >
                    {withSpotLight ? 'Spotlight: on' : 'Spotlight: off'}
                  </button>
                </div>
              </>
            )}
            {step === 6 && (
              <>
                <p>
                  Here are all the things you can toggle in this simulation.
                  Feel free to play with it all you like.
                  <br />
                  <br />
                  Once you are ready to continue, click on the next button.
                </p>
                <div className="buttonContainer">
                  <button
                    className="buttonAction"
                    aria-pressed={shouldRotate}
                    onClick={() => setShouldRotate((prev) => !prev)}
                  >
                    {shouldRotate ? 'Rotation: on' : 'Rotation: off'}
                  </button>
                  <button
                    className="buttonAction"
                    aria-pressed={withBall}
                    onClick={() => setWithBall((prev) => !prev)}
                  >
                    {withBall ? 'Ball: shown' : 'Ball: hidden'}
                  </button>
                  <button
                    className="buttonAction"
                    aria-pressed={withRuler}
                    onClick={() => setWithRuler((prev) => !prev)}
                  >
                    {withRuler ? 'Ruler: shown' : 'Ruler: hidden'}
                  </button>
                </div>
                <div className="buttonContainer">
                  <button
                    className="buttonAction"
                    aria-pressed={withAmbientLight}
                    onClick={() => setWithAmbientLight((prev) => !prev)}
                  >
                    {withAmbientLight
                      ? 'Ambient light: on'
                      : 'Ambient light: off'}
                  </button>
                  <button
                    className="buttonAction"
                    aria-pressed={withPointingLight}
                    onClick={() => setWithPointingLight((prev) => !prev)}
                  >
                    {withPointingLight
                      ? 'Pointing light: on'
                      : 'Pointing light: off'}
                  </button>
                  <button
                    className="buttonAction"
                    aria-pressed={withSpotLight}
                    onClick={() => setWithSpotLight((prev) => !prev)}
                  >
                    {withSpotLight ? 'Spotlight: on' : 'Spotlight: off'}
                  </button>
                </div>
              </>
            )}
            {step < 6 ? (
              <button onClick={handleNext}>Next &rarr;</button>
            ) : (
              <Link href="/about">
                <a>Next &rarr;</a>
              </Link>
            )}
          </div>
        </main>
      </div>
      <style jsx>{`
        main :global(.canvas) {
          width: 100%;
          max-width: 100%;
          min-height: 350px;
          margin-top: 2rem;
        }

        .dialogContainer {
          display: flex;
          flex-direction: column;
          padding: 16px;
          max-width: 600px;
          line-height: 1.4;
          font-size: 1.1rem;
        }

        button,
        a {
          border: none;
          border-radius: 4px;
          color: white;
          background: deeppink;
          padding: 12px 20px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          align-self: flex-end;
          transition: background 0.2s ease-in;
        }

        a {
          text-decoration: none;
          font-size: 0.833rem;
        }

        .buttonAction {
          background: royalblue;
          margin-bottom: 20px;
        }

        .buttonAction[aria-pressed='true'] {
          background: teal;
        }
        .buttonAction[aria-pressed='false'] {
          background: maroon;
        }

        .buttonContainer {
          display: flex;
          gap: 8px;
        }

        .buttonContainer > button {
          flex: 1;
          align-self: stretch;
        }
      `}</style>
    </>
  );
}
