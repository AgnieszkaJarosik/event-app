import React from "react";

type Props = {};

const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
	return (
		<button
			{...buttonProps}
			className="inline-block bg-yellow-300 text-yellow-800 
			rounded shadow py-2 px-5 text-sm w-1/4 min-w-min whitespace-nowrap"
		>
			{children}
		</button>
	);
};

export default Button;
