import * as React from "react";

// Stand-in for next/link — renders an anchor.
const NextLink = ({ href, children, ...rest }: any) =>
    React.createElement("a", { href: typeof href === "string" ? href : href?.pathname, ...rest }, children);

export default NextLink;
