import { PrivacyContact } from "./contact";
import { PrivacyContent } from "./content";
import { PrivacyHero } from "./hero";

export function PrivacyPolicy() {
    return (
        <main className="bg-baseGreenSolid5">
            <PrivacyHero />
            <PrivacyContent />
            <PrivacyContact />
        </main>
    );
}
