import {
  About,
  CollaboratingPartner,
  Introduction,
  SupportedBy,
  TheTeam,
} from './components';

export function AboutPage() {
  return (
    <main className=" bg-baseGreenSolid5">
      <About />
      <Introduction />
      <CollaboratingPartner />
      <SupportedBy />
      <TheTeam />
    </main>
  );
}
