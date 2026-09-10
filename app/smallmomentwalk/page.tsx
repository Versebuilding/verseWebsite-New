import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Verse',
  description:
    'How The Verse collects, uses, and protects your information when you visit versebuilding.com.',
}
const LAST_UPDATED = 'December 17, 2024'

export default function SmallMomentWalk() {
  return (
    <div className="min-h-screen bg-purple-200">
        <div className="pt-20 flex justify-center overflow-hidden">
        <img
            src="/images/SMW.webp"
            className="h-[calc(100dvh-200px)] w-auto"
            alt=""
        />
        </div>
        <div className="pt-8 flex justify-center overflow-hidden">
            <p> For more information - contact team@versebuilding.com </p>
        </div>
        <br></br>
    </div>
)
}
