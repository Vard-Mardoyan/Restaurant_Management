import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import "./Footer.css";
import logo from "../../assets/image/13.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CallIcon from "@material-ui/icons/Call";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import GlobalMap from "../Map";

export class Footer extends Component {
	render() {
		return (
			<div className="App-footer">
				<div className="footerInfo-container">
					<ul className="footer-inner-container">
						<img className="restaurant-logo" src={logo} alt="logo" />

						<li className="location">
							<Link to="/" className="footer-container-link">
								<LocationOnIcon />
								<span> Location </span>
							</Link>

							<p>Via Bernardino Rota 34</p>
							<p> Fontanelle, Cuneo</p>
						</li>
						<li className="hours">
							<Link to="/#" className="footer-container-link">
								<QueryBuilderIcon /> <span>Hours</span>
							</Link>
							<p>Open 8:30 a.m</p>
							<p>Close 1:00 p.m</p>
						</li>
						<li className="contact">
							<Link to="/#" className="footer-container-link">
								<CallIcon />
								<span> Contact</span>
							</Link>

							<p> 800-2345-6799 </p>
						</li>

						<li>
							<Link to="/#" className="footer-container-link">
								<span> Make a Reservation ----- </span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="map-container">
					<GlobalMap />
				</div>
			</div>
		);
	}
}
// export default GoogleApiWrapper({
// 	apiKey: "AIzaSyAQHn9zoOzPpAL_riGq-wiJgxMWoM__0o8",
// })(Footer);
