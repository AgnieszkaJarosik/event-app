import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import Button from "components/button";

describe("button component", () => {
	test("renders propely", () => {
		const { getByText } = render(<Button>Test</Button>);
		expect(getByText("Test")).toBeInTheDocument();
	});
});
