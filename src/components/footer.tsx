import Image from 'next/image';

import { Credits } from './credits';
import { PartnerLogos } from './partner-logos';
import logo from '../assets/brand/logo.png';
import divider from '../assets/divider.svg';

export function Footer() {
  return (
    <footer className="flex flex-col flex-wrap gap-4 bg-backgroundSolidDark px-5 py-4 md:flex-row md:justify-between md:px-10 md:py-8">
      <div className="flex flex-row items-center gap-3">
        <Image
          src={logo}
          width={245}
          height={24}
          alt="IDS-DRR Logo"
        />
        <Image src={divider} width={60} height={50} alt="Divider" />
        <PartnerLogos />
      </div>
      <Credits />
    </footer>
  );
}
