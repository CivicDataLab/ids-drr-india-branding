import { Text } from "opub-ui";

import { PRIVACY_INTRO, PRIVACY_SECTIONS } from "./consts";

export function PrivacyContent() {
    return (
        <section aria-label="Privacy policy content">
            <div className="container flex flex-col gap-9 py-14">
                <Text variant="bodyLg" fontWeight="regular" color="default">
                    {PRIVACY_INTRO}
                </Text>

                {PRIVACY_SECTIONS.map((section) => (
                    <div key={section.title} className="flex flex-col gap-5">
                        <Text variant="headingXl" fontWeight="bold" color="default" as="h2">
                            {section.title}
                        </Text>
                        <Text variant="bodyLg" fontWeight="regular" color="default">
                            {section.body}
                        </Text>
                    </div>
                ))}
            </div>
        </section>
    );
}
