import dynamic from 'next/dynamic'

const SampleNoSSR = dynamic(
    () => import('../components/three/tutorial.js'),
    {ssr: false}
)
export default function HelloThree() {
    return (<SampleNoSSR />)
}