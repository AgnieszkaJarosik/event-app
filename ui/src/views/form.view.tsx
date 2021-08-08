import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as Spinner } from "assets/spinner.svg";
import { Title, Input, PageWrapper, Button } from "components";
import { addEvent, EventData } from "services/fetch";

const Form: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
		control,
	} = useForm();
	const history = useHistory();

	const onSubmit = async (data: EventData) => {
		try {
			await addEvent(data);
			history.push("/events");
		} catch (e) {
			setError(e.response.data.type, {
				type: "server",
				message: e.response.data.message,
			});
		}
	};

	return (
		<PageWrapper>
			<div className="w-full lg:w-2/4 max-w-3xl .shadow-md bg-white px-8 py-12 mx-3 flex flex-col items-center coustom-rounded">
				<Title variant="large">
					<span className="text-blue-500 font-bold text-3xl">Add new event</span>
				</Title>
				<form onSubmit={handleSubmit(onSubmit)} className="w-full">
					<Input
						register={register}
						name="firstName"
						validationRules={{
							required: "First name is required",
							minLength: { value: 2, message: "First name is too short" },
							maxLength: {
								value: 30,
								message: "First name may only have 30 characters",
							},
						}}
						label="First Name"
						error={errors.firstName}
					/>
					<Input
						register={register}
						name="lastName"
						validationRules={{ required: "Last name is required" }}
						label="Last Name"
						error={errors.lastName}
					/>
					<Input
						register={register}
						name="email"
						validationRules={{
							required: "Email is required",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Entered value does not match email format",
							},
						}}
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
							<div className="flex justify-center">
								{isSubmitting && (
									<Spinner className="animate-spin h-5 w-5 mr-3" fill="#2563EB" />
								)}
								Add
							</div>
						</Button>
						<Link to="/events" className="ml-4">
							<Button>Cancel</Button>
						</Link>
					</div>
				</form>
			</div>
		</PageWrapper>
	);
};

export default Form;
