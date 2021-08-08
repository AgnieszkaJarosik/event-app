import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchEventList } from "services/fetch";
import { PageWrapper, Button } from "components";
import { Event } from "services/types";
import { formatDate } from "utils/dateUtils";
import { ReactComponent as Spinner } from "assets/spinner.svg";

const EventList: React.FC = () => {
	const [events, setEvents] = useState<Event[]>();
	const [error, setError] = useState<string>();
	const [loading, setLodading] = useState<Boolean>();

	useEffect(() => {
		(async () => {
			try {
				setLodading(true);
				const resp = await fetchEventList();
				setEvents(resp?.data?.events);
				setLodading(false);
				setError(undefined);
			} catch (e) {
				setError(e.message);
				setLodading(false);
			}
		})();
	}, [setError, setEvents, setLodading]);

	return (
		<PageWrapper>
			<div
				className="flex flex-col w-full lg:w-4/6 border-purple-400 rounded relative
				max-w-7xl mx-3 overflow-x-auto"
			>
				<div className="bg-white shadow-xl">
					{loading ? (
						<div className="w-full flex justify-center content-center">
							<Spinner className="animate-spin h-52 w-16" fill="#2563EB" />
						</div>
					) : error ? (
						<div className="w-full flex justify-center items-center h-52 text-red-400 self-end font-medium">
							{error}
						</div>
					) : events?.length === 0 ? (
						<div className="w-full flex justify-center items-center h-52 font-medium">
							No resuluts
						</div>
					) : (
						<>
							<div className="flex bg-purple-400 text-white">
								<div className="cell cell-header w-4/12">First Name</div>
								<div className="cell cell-header w-4/12">Last Name</div>
								<div className="cell cell-header w-4/12">Email</div>
								<div className="cell cell-header w-4/12">Date</div>
							</div>
							{events?.map((event, index) => (
								<div
									className={`flex ${index % 2 !== 0 && "row-odd"}`}
									key={event._id}
								>
									<div className="cell w-4/12 max-w-4xl2">{event.firstName}</div>
									<div className="cell w-4/12 max-w-4xl2">{event.lastName}</div>
									<div className="cell w-4/12  max-w-4xl2">{event.email}</div>
									<div className="cell w-4/12  max-w-4xl2">
										{formatDate(event.eventDate)}
									</div>
								</div>
							))}
						</>
					)}
				</div>
				<span className="mt-4 w-min">
					<Link to="/form">
						<Button>Add New Event</Button>
					</Link>
				</span>
			</div>
		</PageWrapper>
	);
};

export default EventList;
