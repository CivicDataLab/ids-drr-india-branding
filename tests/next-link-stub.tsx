import * as React from "react";

// Stand-in for next/link — renders an anchor.
type Props = Omit<React.ComponentProps<"a">, "href"> & {
    href: string | { pathname: string };
};

const NextLink = ({ href, children, ...rest }: Props) =>
    React.createElement("a", { href: typeof href === "string" ? href : href.pathname, ...rest }, children);

export default NextLink;
