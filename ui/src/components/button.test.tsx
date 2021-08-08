import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, fireEvent } from "@testing-library/react";
import Button from "components/button";

describe("button component", () => {
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
			render(<Button />, container);
		});
		expect(container?.textContent).toBe("");

		act(() => {
			render(<Button>Futurama</Button>, container);
		});
		expect(container?.textContent).toBe("Futurama");
	});
});
