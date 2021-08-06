import React from "react";

type Props = {
	name: string;
	label: string;
	error?: { type: string; message: string };
};

const Input: React.FC<Props> = ({ name, label, error, ...rest }) => {
	return (
		<div className="mb-8 w-full flex justify-center">
			<div className="w-3/4 flex flex-col">
				<label
					className={`block font-medium text-sm mb-2 self-start ${
						error ? "text-red-400" : "text-gray-500"
					}`}
				>
					{label}
				</label>
				{error && <span className="text-red-400 self-end">{error.message}</span>}
				<input
					name={name}
					{...rest}
					className={`w-full block bg-transparent outline-none border-b-2 py-2 px-4 border-gray-400 placeholder-purple-500 ${"text-gray-600 "}`}
				/>
			</div>
		</div>
	);
};

export default Input;
