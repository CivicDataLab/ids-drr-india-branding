import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { About } from "../src/components/about";

// vitest.config aliases opub-ui, next/image, next/link, and static
// assets to stub files in this tests/ directory, so importing About
// here works without the peer packages installed.

describe("About", () => {
    it("renders the partner links, supporter buttons, and Read More link", () => {
        render(<About />);

        expect(screen.getByText("CivicDataLab")).toBeInTheDocument();
        expect(screen.getByText("Open Contracting Partnership")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "The Rockefeller Foundation" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Patrick J McGovern Foundation," })).toBeInTheDocument();

        const readMore = screen.getByText("Read More");
        expect(readMore.closest("a")).toHaveAttribute("href", "/about-us");

        const images = screen.getAllByAltText("An image representing global climate action");
        expect(images.length).toBeGreaterThan(0);
    });
});
