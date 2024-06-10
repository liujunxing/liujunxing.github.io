import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

// Get started by editing
function Part1() {
  return (
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.tsx</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="./vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  )
}

function Part2() {
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="./next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>

  )
}

function Part3() {
  return (
    <div className={styles.grid}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Learn <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Templates <span>-&gt;</span>
        </h2>
        <p>Explore starter templates for Next.js.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    </div>

  )
}

export const metadata: Metadata = {
  title: 'liujunxing.github.com',
};
 
export default function Home() {
  // className={styles.main}
  return (
    <main >
      <h2>Welcome</h2>
      <div>
        <ul>
          <li><Link href="./prolog/dsspm">READ: Design and Simulation of a Sequential Prolog Machine</Link></li>
          {/* <li><Link href="./prolog/yfx">yfx</Link></li> */}
          <li><Link href="./taupro">tau-prolog</Link></li>
          <li><Link href="./my-mdx-page">mdx test</Link></li>
        </ul>
      </div>

      {/* <Part1 />
      <Part2 />
      <Part3 /> */}
    </main>
  );
}
