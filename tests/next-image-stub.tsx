import * as React from "react";

// Stand-in for next/image — keeps src/alt, drops Next-specific props.
type Props = Omit<React.ComponentProps<"img">, "src"> & {
    src: string | { src: string };
    objectFit?: string;
};

const NextImage = ({ src, alt, objectFit: _o, ...rest }: Props) => {
    const resolved = typeof src === "string" ? src : src.src;
    return React.createElement("img", {
        // Omit `src` entirely when the stub asset resolves to an empty
        // string — React warns on src="" but not on a missing attribute.
        ...(resolved ? { src: resolved } : {}),
        alt,
        ...rest,
    });
};

export default NextImage;
