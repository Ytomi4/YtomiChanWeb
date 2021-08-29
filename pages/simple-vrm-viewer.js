import dynamic from 'next/dynamic'

const VRMViewNoSSR = dynamic(
    () => import('../components/three/VRMview.js'),
    {ssr: false}
)
export default function SimpleVRMViewer() {
    return (<VRMViewNoSSR/>)
}