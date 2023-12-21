import Image from 'next/image';
import React from 'react';
import PilatesPositions from '../../public/joseph_pilates.webp';
const pageTitle = 'Mis on Pilates?';

const AboutPage = () => {
  return (
    <>
      <h1 className="mt-10 text-2xl text-center text-black sm:mt-8 sm:text-4xl md:mt-14 font-merriweather-bold md:text-6xl">
        {pageTitle}
      </h1>

      <div className="space-y-2 my-4 text-sm sm:text-base">
        <div className="hidden md:block float-right max-w-md mt-3">
          <Image
            alt="Pilatese harjutuste positsioonid"
            src={PilatesPositions}
            className="rounded-md border-2 border-pallette-green"
          />
        </div>
        <p>
          Pilates on treeningsüsteem, mis on nime saanud selle looja, Joseph H. Pilatese järgi.
          Pilatese süsteemi harjutused õpetavad kontrollima oma kehahoidu ja liigutusi ning muudavad
          liikumise tõhusamaks ja pingevabaks.
        </p>

        <p>
          Joseph Pilates uskus, et hea tervise tagab üksnes keha, meele ja mõistuse koos treenimine.
          Oluline märksõna pilatese juures on süsteem. Treeningu ülesehitus on süsteemne:
          harjutustel on kindel järjekord, liigutakse lihtsamalt raskemale, harjutustel on vähe
          kordusi, ent neid sooritatakse täie keskendumise ja pühendumisega.
        </p>

        <p>
          Pilates oli oma harjutusi luues ajast ees ja juba sadakond aastat tagasi hoiatas ühiskonda
          kehalise mandumise eest. Paraku oli tal selles osas õigus - tänapäeval leidub vähe
          inimesi, kes ei kannataks pea-, kaela-, selja-, liigesvalude või muude eluviisist ja
          töistest sundasenditest tulenevate probleemide käes.
        </p>

        <p>
          Klassikalise pilatese treeningsüsteemis on väga olulisel kohal pilatese põhimõtted ja
          pilatese ühendused.
        </p>
        <div className="md:hidden">
          <Image
            alt="Pilatese harjutuste positsioonid"
            src={PilatesPositions}
            className="rounded-md border-2 border-pallette-green"
          />
        </div>
      </div>
      <h2 className="text-pallette-green md:my-4 my-2 sm:my-3 md:self-start sm:text-xl font-merriweather-bold text-lg md:text-3xl text-black">
        Pilatese harjutused
      </h2>
      <div className="text-sm sm:text-base w-full">
        <ul className="list-disc list-outside ml-4">
          <li>treenivad keha kuklast kandadeni</li>
          <li>
            arendavad igakülgselt kehalist vormi - jõudu, painduvust, koordinatsiooni, kiirust ja
            vastupidavust
          </li>
          <li>suurendavad kontrolli keha üle</li>
          <li>parandavad kehatunnetust</li>
          <li>õpetavad õigesti lihaseid aktiveerima</li>
          <li>parandavad rühti ja kehahoidu</li>
          <li>parandavad siseorganite talitust</li>
          <li>parandavad tasakaalu ja keha tajumist ruumis</li>
          <li>keskenduvad hingamisele ja õige hingamise hüvedele</li>
          <li>parandavad keskendumisvõimet</li>
          <li>lõõgastavad ja aitavad vabaneda pingetest</li>
          <li>hooldavad lihaseid ja luustikku</li>
          <li>vormivad keha (inimesed näevad välja ja tunnevad end sihvakamana)</li>
          <li>sobivad igas eas ja kehalises vormis harrastajatele (sh eakad ja rasedad)</li>
          <li>toetavad kõiki teisi treeninguid ja muudavad ka igapäevased toimingud lihtsamaks</li>
        </ul>
      </div>
    </>
  );
};

export default AboutPage;
