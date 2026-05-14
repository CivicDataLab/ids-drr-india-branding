import * as React from "react";

// Minimal stand-ins for the opub-ui components used in source.
// Button → <button>, Text → <span>. Enough for Testing Library queries.

export const Button = ({ children, ...rest }: React.ComponentProps<"button">) =>
    React.createElement("button", { type: "button", ...rest }, children);

export const Text = ({ children, ...rest }: React.ComponentProps<"span">) =>
    React.createElement("span", rest, children);
