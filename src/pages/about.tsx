import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import styles from '../styles/Home.module.css';
import { AmesWindow } from '../components/AmesWindow';
import { YouTubeEmbed } from '../components/YouTubeEmbed/YouTubeEmbed';
import { TwitterShare } from '../components/TwitterShare/TwitterShare';
import { publicUrl } from '../components/MetaTags/AppMetaTags';
import { useRouter } from 'next/router';
import { ExternalLink } from '../components/ExternalLink/ExternalLink';

export default function About() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Ames Window illusion</h1>

          <Canvas className="canvas" orthographic>
            <spotLight
              position={[10, 50, 10]}
              angle={Math.PI / 2}
              penumbra={1}
            />
            <pointLight position={[0, 0, 10]} />
            <AmesWindow shouldRotate withBall withRuler position={[0, 0, 0]} />
          </Canvas>

          <div className="dialogContainer">
            <p>
              Well that's all! I hope that was fun and interesting for you as it
              was for me!
            </p>
            <p>
              Built with{' '}
              <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink> +{' '}
              <ExternalLink href="https://threejs.org/">three.js</ExternalLink>{' '}
              +{' '}
              <ExternalLink href="https://github.com/pmndrs/react-three-fiber">
                react-three-fiber
              </ExternalLink>{' '}
              ⚡ by{' '}
              <ExternalLink href="https://twitter.com/jackyef__">
                @jackyef__
              </ExternalLink>
            </p>
            <p>
              <ExternalLink href="https://github.com/jackyef/ames-window">Code are on GitHub</ExternalLink>
            </p>
            <p>
              <TwitterShare
                text={`Ames Window Illusion: Can you see it? ${publicUrl}`}
              >
                Share on Twitter
              </TwitterShare>
            </p>

            <p>
              If you are looking to explanation for this illusion, check this
              Veritasium&apos;s video:
            </p>
            <YouTubeEmbed videoId="dBap_Lp-0oc" />

            <div className="backContainer">
              <Link href="/">
                <a>&larr; Go back</a>
              </Link>
            </div>
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
          max-width: 600px;
          line-height: 1.4;
          font-size: 1.1rem;
        }

        a {
          border: none;
          border-radius: 4px;
          color: white;
          background: deeppink;
          padding: 12px 20px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: background 0.2s ease-in;
          display: inline-block;
          text-decoration: none;
          font-size: 0.833rem;
        }

        .backContainer {
          margin-top: 16px;
          font-size: 0.875rem;
        }
      `}</style>
    </>
  );
}
