import React from "react";
import { Link } from "react-router-dom";
import { Component, useState } from "react";
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

// <<<<<<< HEAD
// export const Footer = () => {

// 		return (
// 			<div className="App-footer">
// 				<div className="footerInfo-container">
// 					<ul className="footer-inner-container">
// 						<img className="restaurant-logo" src={logo} alt="logo" />
// =======
// >>>>>>> bfc1252a0d5e27e1878bd748780bf70854b067b3


export function Footer({ changeStat }) {
	const [adminstate, setAdminstate] = useState(false);
    let password = '';
	
    function Admin () {
		
		const adminPassword = (event) => {
			password = event.target.value;
		}

		if(adminstate){
			return (
				<div className = 'admin'>
					<div>
						<Link to="/#" className = 'adminclzlink' onClick = {() => setAdminstate(false)}>X</Link>
					</div>
					<div>
						<h3 className = 'textstyle'>Password</h3>
					</div>
					<div>
						<input
						onChange = {adminPassword}
						className = 'admininput'
						placeholder = 'Password'
						type="password"
						/>
					</div>
					<div className = 'logdiv'>
						<Link to="/#" className = 'link' onClick = {() => {
							if(password === '1234'){
								changeStat()
							}
						}}>Login</Link>
					</div>
				</div>
// <<<<<<< HEAD
// 			</div>
// 		);
	
// }
// // export default GoogleApiWrapper({
// // 	apiKey: "AIzaSyAQHn9zoOzPpAL_riGq-wiJgxMWoM__0o8",
// // })(Footer);
// =======
			)
		}
      return '';
	}

	return (
		<div className="App-footer">
			<Admin/>
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
	
					<li>
						<Link onClick = {() => setAdminstate(true)} to="/#" className="footer-container-link">
							<span> Admin </span>
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
// >>>>>>> bfc1252a0d5e27e1878bd748780bf70854b067b3
