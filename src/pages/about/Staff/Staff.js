import React, { useState, useEffect } from "react";
// import data from "./components/services/config.js";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import "./Staff.css";
const data = [
	{
		id: 1,
		image:
			"https://hoteljobsasia.com/wp-content/uploads/2013/08/ChineseManager2X.jpg",
		name: "Mark Murphy",
		title: "Office Manager",
		quote:
			"To stand apart from the competition, you must first stand together as a team.",
	},
	{
		id: 2,
		image:
			"https://cdn.charlieintel.com/wp-content/uploads/2021/04/29131955/Johanna-Faries-Call-of-Duty-General-Manager.jpg",
		name: "Julia Bell",
		title: "General Manager",
		quote:
			"Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishment toward organizational objectives. It is the fuel that allows common people to attain uncommon results.",
	},
	{
		id: 3,
		image:
			"https://elfaeed.com/wp-content/uploads/2017/09/malerestaurantmanagersta_356169.jpg",
		name: "Aaron Flores",
		title: "Executive Chef",
		quote: "Great things are done by a series of small things brought together",
	},
	{
		id: 4,
		image:
			"https://www.krusecontrolinc.com/wp-content/uploads/2021/02/Depositphotos_209974604_s-2019.jpg",
		name: "Gabriella Ward",
		title: "HR",
		quote:
			"To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.",
	},

	{
		id: 5,
		image:
			"https://i.pinimg.com/originals/12/da/18/12da1856c7fca342089e929a6bf898fa.jpg",
		name: "Luna Simmons",
		title: "designer",
		quote:
			"The strength of the team is in each individual member... the strength of each member is in the team.",
	},
	{
		id: 6,
		image:
			"https://www.thecareercollege.com.au/wp-content/uploads/2020/11/leaders-managers.jpg",
		name: "Matthews Hughes",
		title: "Server",
		quote:
			"We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.",
	},
];
export default function StaffData() {
	const [people, setPeople] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = () => {
		setActiveIndex((prevIndex) => {
			let activeIndex = prevIndex + 1;
			if (activeIndex > people.length - 1) {
				activeIndex = 0;
			}
			return activeIndex;
		});
	};
	const prevSlide = () => {
		setActiveIndex((prevIndex) => {
			let activeIndex = prevIndex - 1;
			if (activeIndex < 0) {
				activeIndex = people.length - 1;
			}
			return activeIndex;
		});
	};

	useEffect(() => {
		let slider = setInterval(() => {
			setActiveIndex((prevIndex) => {
				let activeIndex = prevIndex + 1;
				if (activeIndex > people.length - 1) {
					activeIndex = 0;
				}
				return activeIndex;
			});
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [activeIndex]);

	return (
		<div className="staffDataContainer">
			<section className="section">
				<div className="title">
					<h2>Staff Info</h2>
				</div>
				<div className="section-center">
					{people.map((person, personIndex) => {
						const { id, image, name, title, quote } = person;

						let position = "nextSlide";
						if (personIndex === activeIndex) {
							position = "activeSlide";
						}
						if (
							personIndex === activeIndex - 1 ||
							(activeIndex === 0 && personIndex === people.length - 1)
						) {
							position = "lastSlide";
						}

						return (
							<article className={position} key={id}>
								<img src={image} alt={name} className="person-img" />
								<h4>{name}</h4>
								<p className="title">{title}</p>
								<p className="text">{quote}</p>
							</article>
						);
					})}
					<button className="prev" onClick={prevSlide}>
					<ArrowLeftIcon />

					</button>
					<button className="next" onClick={nextSlide}>
					<ArrowRightIcon />
					</button>
				</div>
			</section>
		</div>
	);
}
