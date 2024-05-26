import type { Metadata } from 'next'
import Script from "next/script";
import { Content } from './Content';

export const metadata: Metadata = {
  title: 'tau-prolog test page',
}

export default () => {
  return (<>
    <Script src="/tau/core.js" strategy="beforeInteractive"></Script>
    <Script src="/tau/promises.js" strategy="beforeInteractive"></Script>
    <Script src="/test2.js" strategy="beforeInteractive"></Script>
    <h2>Hello, tau-prolog!</h2>
    <Content />
  </>)
}
