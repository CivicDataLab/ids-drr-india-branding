import {
    About,
    CollaboratingPartner,
    Introduction,
    PastCollaborators,
    SupportedBy,
    TheTeam,
} from "./components";

export function AboutPage() {
    return (
        <main className=" bg-baseGreenSolid5">
            <About />
            <Introduction />
            <CollaboratingPartner />
            <SupportedBy />
            <TheTeam />
            <PastCollaborators />
        </main>
    );
}
