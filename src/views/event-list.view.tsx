import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchEventList } from "services/fetch";
import { PageWrapper, Button } from "components";
import { Event } from "services/types";

const EventList: React.FC = () => {
	const [events, setEvents] = useState<Event[]>();

	useEffect(() => {
		(async () => {
			try {
				const resp = await fetchEventList();
				setEvents(resp?.events);
				console.log("here", resp);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return (
		<PageWrapper>
			<div className="flex flex-col w-4/6 bg-white shadow-xl border-purple-400 rounded p-12 relative">
				<span className="absolute -top-10 -right-20">
					<Link to="/form">
						<Button>Add New Event</Button>
					</Link>
				</span>
				<div className="flex bg-purple-400 text-white">
					<div className="cell cell-header w-1/12">Nr</div>
					<div className="cell cell-header w-4/12">First Name</div>
					<div className="cell cell-header w-4/12">Last Name</div>
					<div className="cell cell-header w-4/12">Email</div>
					<div className="cell cell-header w-3/12">Date</div>
				</div>
				{events?.map((event, index) => (
					<div className={`flex ${index % 2 !== 0 && "row-odd"}`}>
						<div className="cell w-1/12">{index + 1}</div>
						<div className="cell w-4/12">{event.firstName}</div>
						<div className="cell w-4/12">{event.lastName}</div>
						<div className="cell w-4/12">{event.email}</div>
						<div className="cell w-3/12">{event.eventDate}</div>
					</div>
				))}
			</div>
		</PageWrapper>
	);
};

export default EventList;
