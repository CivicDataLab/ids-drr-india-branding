// import Image from "next/image";
// import logo from "../assets/brand/logo.png";
// import divider from "../assets/divider.svg";

import Link from "next/link";
import { Credits } from "./credits";
import { PartnerLogos } from "./partner-logos";

export function Footer() {
    return (
        <footer className="flex flex-col flex-wrap gap-4 bg-backgroundSolidDark px-5 py-4 md:items-center md:flex-row md:justify-between md:px-10 md:py-8">
            <div className="flex flex-row items-center gap-3">
                <PartnerLogos />
            </div>
            <Link href="/privacy-policy" className="text-baseIndigoSolid1 underline">
                Privacy Policy
            </Link>
            <Credits />
        </footer>
    );
}
