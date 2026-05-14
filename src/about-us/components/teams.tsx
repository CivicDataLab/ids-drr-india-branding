/* eslint-disable @next/next/no-img-element */

import Image, { type StaticImageData } from "next/image";
import { Button, Text } from "opub-ui";
import { useEffect, useRef, useState } from "react";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import webIcon from "../../assets/icons/web.svg";
import xIcon from "../../assets/icons/x.svg";
import cdlLogo from "../../assets/partners/cdl_logo.svg";
import ocpLogo from "../../assets/partners/OpenContracting.png";
import aashimPhoto from "../../assets/teams/aashim.jpg";
import abhinanditaPhoto from "../../assets/teams/abhinandita.jpg";
import aparnaPhoto from "../../assets/teams/aparna.jpg";
import architPhoto from "../../assets/teams/archit1.jpg";
import bhavabhuthiPhoto from "../../assets/teams/bhavabhuthi.jpg";
import dcPhoto from "../../assets/teams/dc.jpg";
import gauravPhoto from "../../assets/teams/gaurav.jpg";
import jeenoPhoto from "../../assets/teams/jeeno.jpg";
import kabeerPhoto from "../../assets/teams/kabeer.jpg";
import kakoliPhoto from "../../assets/teams/kakoli.jpg";
import nupuraPhoto from "../../assets/teams/nupura.jpeg";
import rakhiPhoto from "../../assets/teams/rakhi.jpg";
import ruthvikPhoto from "../../assets/teams/ruthvik.jpg";
import saiPhoto from "../../assets/teams/sai.png";
import sanjayPhoto from "../../assets/teams/sanjay.jpg";
import saqibPhoto from "../../assets/teams/saqib.jpg";
import sumitPhoto from "../../assets/teams/sumit.jpg";
import swatiPhoto from "../../assets/teams/swati1.jpg";
import {
    CDLPartnershipTextOne,
    CDLPartnershipTextThree,
    CDLPartnershipTextTwo,
    OpenContractingPartnershipTextOne,
} from "../../consts";
import { handleRedirect } from "../../utils";
import styles from "./styles.module.scss";

interface TeamMember {
    name: string;
    role: string;
    imageUrl: StaticImageData;
}

const teamMembers: TeamMember[] = [
    { name: "Gaurav", role: "Founder", imageUrl: gauravPhoto },
    { name: "Kabeer", role: "Initiative Lead", imageUrl: kabeerPhoto },
    { name: "Nupura", role: "Design Lead", imageUrl: nupuraPhoto },
    { name: "Rakhi", role: "Associate Initiative Lead", imageUrl: rakhiPhoto },
    { name: "Deepthi Chand", role: "Founder", imageUrl: dcPhoto },
    { name: "Aparna", role: "Associate Product Designer", imageUrl: aparnaPhoto },
    { name: "Bhavabhuthi", role: "Senior Frontend Engineer", imageUrl: bhavabhuthiPhoto },
    { name: "Saqib", role: "Quality Assurance Engineer", imageUrl: saqibPhoto },
    { name: "Swati", role: "Frontend Engineer", imageUrl: swatiPhoto },
    { name: "Sanjay", role: "Frontend Engineer", imageUrl: sanjayPhoto },
    { name: "Abhinandita", role: "Senior Product Designer", imageUrl: abhinanditaPhoto },
    { name: "Ruthvik", role: "Associate Lead Engineer", imageUrl: ruthvikPhoto },
    { name: "Sumit", role: "Senior Design Researcher", imageUrl: sumitPhoto },
    { name: "Kakoli", role: "Partnership & Outreach Manager", imageUrl: kakoliPhoto },
    { name: "Archit", role: "Backend Engineer", imageUrl: architPhoto },
    { name: "Sai Krishna", role: "Senior Data Engineer", imageUrl: saiPhoto },
    { name: "Jeeno", role: "Senior Researcher", imageUrl: jeenoPhoto },
    { name: "Aashim", role: "Frontend Engineer", imageUrl: aashimPhoto },
];

export function TheTeam() {
    const [showMore, setShowMore] = useState(false);
    const [isDescriptionLong, setIsDescriptionLong] = useState(false);

    const descriptionRef = useRef<HTMLDivElement | null>(null);
    const toggleShowMore = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent link navigation
        event.stopPropagation(); // Stop event from propagating to the card's link
        setShowMore((prevState) => !prevState);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            const isLong = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
            setIsDescriptionLong(isLong);
        }
    }, []);
    return (
        <section className=" py-14 " aria-label="The team behind the IDS-DRR project">
            {/* DESKTOP  */}
            <div className="container mb-2 flex flex-col gap-8 ">
                <Text variant="heading2xl" fontWeight="bold" color="default" as="h2">
                    Co-created by
                </Text>

                <div className="flex flex-wrap items-center justify-center gap-10 rounded-2 bg-baseIndigoSolid1 p-9 lg:flex-nowrap ">
                    <div className="flex flex-col items-center gap-4 text-surfaceDefault">
                        <Image
                            src={cdlLogo}
                            height={120}
                            width={230}
                            alt="Civic Data Lab Logo"
                            className=" object-contain "
                        />
                        <div className="flex flex-row items-center justify-between self-stretch">
                            <Button
                                monochrome={true}
                                kind="tertiary"
                                onClick={(event) => handleRedirect(event, "https://civicdatalab.in/")}
                            >
                                <img src={webIcon.src} alt="CDL website link" />
                            </Button>
                            <Button
                                monochrome={true}
                                kind="tertiary"
                                onClick={(event) =>
                                    handleRedirect(
                                        event,
                                        "https://www.linkedin.com/company/civicdatalab/mycompany/verification/",
                                    )
                                }
                            >
                                <img src={linkedinIcon.src} alt="CDL link to LinkedIn" />{" "}
                            </Button>
                            <Button
                                monochrome={true}
                                kind="tertiary"
                                onClick={(event) => handleRedirect(event, "https://x.com/CivicDataLab")}
                            >
                                <img src={xIcon.src} alt="CDL link to Twitter/X" />{" "}
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Text variant="headingXl" fontWeight="medium" color="default" as="h3">
                            CivicDataLab{" "}
                        </Text>
                        <div className="flex flex-col gap-5">
                            <Text variant="bodyLg" fontWeight="regular" color="default">
                                {CDLPartnershipTextOne}
                            </Text>
                            {/* --------------  */}

                            <div>
                                <div ref={descriptionRef} className={!showMore ? " line-clamp-2 lg:line-clamp-5" : ""}>
                                    <Text variant="bodyLg" fontWeight="regular" color="default">
                                        {CDLPartnershipTextTwo} {CDLPartnershipTextThree}
                                    </Text>
                                </div>

                                {/* Only show the "Show more" button on medium and small screens */}
                                {isDescriptionLong && (
                                    <div className="block md:hidden">
                                        <Button
                                            className="self-start p-2"
                                            onClick={toggleShowMore}
                                            variant="interactive"
                                            size="slim"
                                            kind="tertiary"
                                        >
                                            {showMore ? "Show less" : "Show more"}
                                        </Button>
                                    </div>
                                )}
                            </div>
                            {/* --------------  */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 rounded-2 bg-baseIndigoSolid1 p-9 lg:flex-nowrap ">
                    <div className="flex flex-col items-center gap-4 text-surfaceDefault">
                        <Image
                            src={ocpLogo}
                            height={190}
                            width={230}
                            alt="Open Contracting Partnership Logo"
                            className=" object-contain "
                        />
                        <div className="flex flex-row items-center justify-between self-stretch">
                            <Button
                                monochrome={true}
                                kind="tertiary"
                                onClick={(event) => handleRedirect(event, "https://www.open-contracting.org/")}
                            >
                                <img src={webIcon.src} alt="OCP website link" />
                            </Button>
                            <Button
                                monochrome={true}
                                kind="tertiary"
                                onClick={(event) =>
                                    handleRedirect(
                                        event,
                                        "https://www.linkedin.com/company/opencontractingpartnership",
                                    )
                                }
                            >
                                <img src={linkedinIcon.src} alt="OCP link to LinkedIn" />{" "}
                            </Button>
                            <Button
                                monochrome={true}
                                kind="tertiary"
                                onClick={(event) => handleRedirect(event, "https://twitter.com/opencontracting")}
                            >
                                <img src={xIcon.src} alt="OCP link to Twitter/X" />{" "}
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Text variant="headingXl" fontWeight="medium" color="default" as="h3">
                            Open Contracting Partnership
                        </Text>
                        <div className="flex flex-col gap-5">
                            <div>
                                <div ref={descriptionRef} className={!showMore ? " line-clamp-2 lg:line-clamp-5" : ""}>
                                    <Text variant="bodyLg" fontWeight="regular" color="default">
                                        {OpenContractingPartnershipTextOne}
                                    </Text>
                                </div>

                                {/* Only show the "Show more" button on medium and small screens */}
                                {isDescriptionLong && (
                                    <div className="block md:hidden">
                                        <Button
                                            className="self-start p-2"
                                            onClick={toggleShowMore}
                                            variant="interactive"
                                            size="slim"
                                            kind="tertiary"
                                        >
                                            {showMore ? "Show less" : "Show more"}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-6 grid grid-cols-1 gap-10 rounded-2 md:grid-cols-2 lg:grid-cols-3 "> */}
                <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div key={member.name} className={styles.card}>
                            <Image
                                src={member.imageUrl}
                                alt={`${member.name}'s picture`}
                                height={100}
                                width={200}
                                className="object-contain pt-4 "
                            />
                            <div className="flex w-full flex-col gap-2 pl-8 pt-4 ">
                                <Text variant="headingLg" fontWeight="semibold" color="default">
                                    {member.name}
                                </Text>
                                <Text variant="headingMd" fontWeight="regular" color="subdued">
                                    {member.role}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
