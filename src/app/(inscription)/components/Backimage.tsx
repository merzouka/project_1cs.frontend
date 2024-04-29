// pages/index.js
import Image from 'next/image'

export default function Backimage() {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center h-screen"
            style={{
                backgroundImage: `url('public/background.PNG')`,
            }}
        >
            {/* Your content goes here */}
        </div>
    )
}