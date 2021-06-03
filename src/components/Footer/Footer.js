import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Footer.css";
import logo from "./restaurant-logo.jpg";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
// const mapStyles = {
// 	width: "100%",
// 	height: "100%",
// };
export class Footer extends Component {
	render() {
		return (
			<div className="App-footer">
				{/* <div className="first-footer-container"> */}
				{/* <img src={logo} alt="logo" /> */}
				{/* <FaFacebook />
				<FaInstagram />
				<FaTwitter />
				<FaYoutube />
				<FaGooglePlusG /> */}
				{/* </div> */}
				<div className="footerInfo-container">
					<ul className="footer-inner-container">
						<img className="restaurant-logo" src={logo} alt="logo" />

						<li className="location">
							<Link to="/" className="footer-container-link">
								Location
							</Link>

							<p>123 Willow Street</p>
							<p>Austin, TX 78702</p>
						</li>
						<li className="hours">
							<Link to="/#" className="footer-container-link">
								Hours
							</Link>
							<p>123 Willow Street</p>
							<p>Austin, TX 78702</p>
						</li>
						<li className="contact">
							<Link to="/#" className="footer-container-link">
								Contact
							</Link>
							<p> 800-2345-6799 </p>
						</li>

						<li>
							<Link to="/#" className="footer-container-link">
								Make a Reservation -----
							</Link>
						</li>
					</ul>
				</div>
				<div className="map-container">
				Map
				</div>
				
				{/* return (
				<Map
					google={this.props.google}
					zoom={8}
					style={mapStyles}
					initialCenter={{ lat: 47.444, lng: -122.176 }}
				/>
				); */}
				{/* <Marker onClick={this.onMarkerClick} name={"Current location"} />
				<InfoWindow onClose={this.onInfoWindowClose}></InfoWindow> */}
				{/* </Map> */}
				{/* <FaMapMarkerAlt /> The Company Name Inc. 9870 St */}
				{/* <FaPhoneAlt /> */}
				{/* <FaPrint /> */}
				{/* <FaEnvelope /> */}
			</div>
		);
	}
}
// export default GoogleApiWrapper({
// 	apiKey: "AIzaSyAQHn9zoOzPpAL_riGq-wiJgxMWoM__0o8",
// })(Footer);