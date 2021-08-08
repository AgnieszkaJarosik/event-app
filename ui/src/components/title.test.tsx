import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Title from "./title";

let container: HTMLDivElement | null = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	container && unmountComponentAtNode(container);
	container?.remove();
	container = null;
});

it("renders with or without a children", () => {
	act(() => {
		render(<Title />, container);
	});
	expect(container?.textContent).toBe("");

	act(() => {
		render(<Title>Futurama</Title>, container);
	});
	expect(container?.textContent).toBe("Futurama");
});
