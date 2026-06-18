import { Text } from 'opub-ui';

export function PrivacyHero() {
  return (
    <section
      className="flex h-[273px] w-full items-center justify-center bg-backgroundSolidDark py-[100px] lg:h-[320px]"
      aria-label="Privacy policy section heading"
    >
      <div className="container flex flex-col gap-3">
        <Text
          className="text-baseAmberSolid7"
          variant="heading4xl"
          fontWeight="bold"
          as="h1"
        >
          PRIVACY POLICY
        </Text>
      </div>
    </section>
  );
}
