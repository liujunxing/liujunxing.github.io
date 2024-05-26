import type { Metadata } from 'next'
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';
 
export const metadata: Metadata = {
  title: 'This is a yfx test page',
}
 
const Button = () => {
  return <button style={{fontSize: '1.2em'}}>Click me!</button>
};

export default () => {
  return (<>
    <h2>Hello, yfx!</h2>
    <Suspense fallback={<p>Loading...</p>}>
      <Content />
    </Suspense>
  </>)
}

function Content() {
  return (
  <section>
    <div>This is my first next.js page!</div>
    <div><Link href="/dashboard">Go dashboard</Link></div>
    {/* <div><Button /></div> */}
  </section>
  )

}