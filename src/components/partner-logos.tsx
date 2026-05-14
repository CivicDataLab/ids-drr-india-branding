import Image from "next/image";

import cdlLogo from "../assets/partners/cdlofficiallogo.png";
import ocpLogo from "../assets/partners/ocp.png";

export function PartnerLogos() {
    return (
        <div className="flex flex-row items-center md:gap-5">
            <Image src={cdlLogo} width={64} height={64} alt="CivicDataLab Logo" className="object-contain" />
            <Image src={ocpLogo} width={164} height={50} alt="OCP Logo" className="object-contain" />
        </div>
    );
}
