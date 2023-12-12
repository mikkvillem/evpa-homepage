const heroTitle = 'Tule, võimleme koos!';
const heroSubtitle = 'Ootan Sind Pilatese treeningutesse õdusas Viljandi kesklinna stuudios!';

export default function Home() {
  return (
    <main className="relative w-full md:max-w-4xl lg:max-w-6xl mx-auto flex h-full flex-col items-start">
      <h1 className="mt-12 sm:mt-8 sm:text-4xl md:mt-16 font-merriweather-bold text-2xl md:text-7xl text-black">
        {heroTitle}
      </h1>
      <p className="sm:mt-2 sm:text-xl md:mt-4 font-montserrat text-lg md:text-3xl text-black max-w-3xl font-light">
        {heroSubtitle}
      </p>
    </main>
  );
}
