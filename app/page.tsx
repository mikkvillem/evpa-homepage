import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Image
        src="/pilates_logo_transparent.png"
        alt="Erika Viira Pilatese Akadeemia logo"
        className=""
        width={400}
        height={123}
      />
      <h1 className='mt-40 font-merriweather-bold text-6xl text-black'>Hello, world!</h1>
    </main>
  )
}
