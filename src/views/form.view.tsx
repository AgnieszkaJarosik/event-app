import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { Link, useHistory } from "react-router-dom";

import { Title, Input, PageWrapper, Button } from "components";
import { addEvent } from "services/fetch";

const Form: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();
	const history = useHistory();
	const [isSubmittin, setSubmitting] = useState(false);

	const onSubmit = async (data: any) => {
		try {
			setSubmitting(true);
			const resp = await addEvent(data);
			console.log("here, resp");

			history.push("/events");
			setSubmitting(false);
		} catch (e) {
			console.log(e);
			setSubmitting(false);
		}
	};

	return (
		<PageWrapper>
			<div className="w-2/4 max-w-3xl .shadow-md bg-white px-8 py-12 flex flex-col items-center coustom-rounded">
				<Title variant="large">
					<span className="text-blue-500 font-bold text-3xl">Add new event</span>
				</Title>
				<form onSubmit={handleSubmit(onSubmit)} className="w-full">
					<Input
						{...register("firstName", { required: "First name is required" })}
						label="First Name"
						error={errors.firstName}
					/>
					<Input
						{...register("lastName", { required: "Last name is required" })}
						label="Last Name"
						error={errors.lastName}
					/>
					<Input
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Entered value does not match email format",
							},
						})}
						label="Email"
						error={errors.email}
					/>
					<Controller
						control={control}
						name="eventDate"
						rules={{ required: "Event date is required" }}
						render={({ field }) => (
							<div className="mb-8 w-full flex justify-center">
								<div className="w-3/4 flex flex-col">
									<label
										className={`block font-medium text-sm mb-2 self-start ${
											errors.eventDate ? "text-red-400" : "text-gray-500"
										}`}
									>
										Event Date
									</label>
									{errors.eventDate && (
										<span className="text-red-400 self-end">
											{errors.eventDate?.message}
										</span>
									)}
									<DatePicker
										onChange={(date: Date | null) => field.onChange(date)}
										selected={field.value}
										showTimeInput={true}
										className="w-full block bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 text-gray-600 border-gray-400"
									/>
								</div>
							</div>
						)}
					/>
					<div className="w-full flex justify-center">
						<Button {...{ type: "submit" }}>
							{/* <div className="flex"> */}
							{/* <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" /> */}
							Add
							{/* </div> */}
						</Button>
						<Link to="/events" className="ml-4 bg-yellow-200">
							<Button>Cancel</Button>
						</Link>
					</div>
				</form>
			</div>
		</PageWrapper>
	);
};

export default Form;
