import * as React from "react";

// Minimal stand-ins for the opub-ui components used in source.
// Button → <button>, Text → <span>. Enough for Testing Library queries.

export const Button = ({ children, ...rest }: any) => React.createElement("button", rest, children);

export const Text = ({ children, ...rest }: any) => React.createElement("span", rest, children);
