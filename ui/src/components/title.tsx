import React from "react";

type Props = {
	variant?: "large" | "standard" | "dense";
};

const marginClass = {
	large: "mb-6",
	standard: "mb-4",
	dense: "mb-1",
};

const Title: React.FC<Props> = ({ variant = "standard", children }) => {
	return <div className={marginClass[variant]}>{children}</div>;
};

export default Title;
