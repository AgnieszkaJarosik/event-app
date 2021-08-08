import React from "react";

const PageWrapper: React.FC = ({ children }) => {
	return (
		<div
			className="flex justify-center items-center bg-gradient-to-r 
			from-green-200 to-blue-400 min-h-screen py-10"
		>
			{children}
		</div>
	);
};

export default PageWrapper;
