import Head from 'next/head'
import Articles from './articles.js'
import VRMCanvas from './three/lookatCursol'
import article_list from '../public/data/articles.json'
import styles from '../styles/Home.module.css'

export default function IndexLayout() {
  return (
    <>
        <Head>
          <title>ytomi-chan</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <div className={styles.main} style={{position: 'relative', zIndex: '2'}}>
          <Articles articles={article_list}/>
        </div>

        <div>
            <a>hello</a>
        </div>

        <div style={{ position: 'relative', zIndex: '1' }}>
            <VRMCanvas />
        </div>
    </>
  )
}