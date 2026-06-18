import { Text } from 'opub-ui';

import {
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_CONTACT_SUBTITLE,
} from './consts';

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="4"
        width="16"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 6L10 11L18 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrivacyContact() {
  return (
    <section aria-label="Privacy policy contact">
      <div className="container flex flex-col items-center gap-6 py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <Text variant="heading2xl" fontWeight="bold" color="default" as="h2">
            Contact Us
          </Text>
          <Text
            variant="bodyMd"
            fontWeight="regular"
            className="text-textMedium"
          >
            {PRIVACY_CONTACT_SUBTITLE}
          </Text>
        </div>

        <a
          href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
          className="flex items-center gap-4 rounded-2 bg-baseWhite px-4 py-4 shadow-elementCard transition-colors hover:bg-baseIndigoSolid1"
        >
          <span className="text-textDefault">
            <MailIcon />
          </span>
          <Text variant="bodyLg" fontWeight="semibold" color="default">
            {PRIVACY_CONTACT_EMAIL}
          </Text>
        </a>
      </div>
    </section>
  );
}
