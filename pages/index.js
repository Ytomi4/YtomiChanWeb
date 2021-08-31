import dynamic from 'next/dynamic'

const IndexLayoutNoSSR = dynamic(
    () => import('../components/index-layout.js'),
    {ssr: false}
)

export default function Home() {
  return (<IndexLayoutNoSSR />)
}
