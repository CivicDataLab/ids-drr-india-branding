import type { MouseEvent } from "react";

export function handleRedirect(event: MouseEvent, link: string) {
    event.preventDefault();
    const confirmation = window.confirm(`You are being redirected to "${link}". `);
    if (confirmation) {
        window.open(link, "_blank");
    }
}
