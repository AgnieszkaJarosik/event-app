import React from "react";

const Button: React.FC = ({ children, ...buttonProps }) => {
	return (
		<button
			{...buttonProps}
			className="inline-block bg-yellow-200 text-blue-600
			rounded shadow py-2 px-5 text-sm w-1/4 min-w-min whitespace-nowrap"
		>
			{children}
		</button>
	);
};

export default Button;
