import React, { Component, Fragment } from "react";
import c1 from "../../asset/image/CourseDetails.jpg";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import "../CourseDetails/CourseDetails.css";
import "../../asset/css/Bootstrap.min.css";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import ReactHtmlParser from "react-html-parser";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const PINK = "rgba(255, 192, 203, 0.6)";
const BLUE = "rgba(0, 0, 255, 0.6)";

function ContextAwareToggle({ children, eventKey, callback }) {
	const { activeEventKey } = useContext(AccordionContext);

	const decoratedOnClick = useAccordionButton(
		eventKey,
		() => callback && callback(eventKey)
	);

	const isCurrentEventKey = activeEventKey === eventKey;

	return (
		<button
			type="button"
			style={{ backgroundColor: "none", border: "none" }}
			onClick={decoratedOnClick}
		>
			{children}
		</button>
	);
}
export class CourseDetails extends Component {
	constructor(props) {
		super();
	}

	render() {
		let courses_category = "";
		let long_title = "";
		let total_duration = "";
		let small_img = "";
		let courses_long_description = "";
		let courses_students_count = "";
		let courses_lectures_count = "";
		// let type='';
		let instructor_id = "";
		let tags = "";
		let price = "";
		let skill = "";
		let video_url = "";
		let Array = this.props.CourseallData;

		courses_category = Array["courses_category"];
		long_title = Array["long_title"];
		total_duration = Array["total_duration"];
		small_img = Array["small_img"];
		courses_long_description = Array["courses_long_description"];
		courses_students_count = Array["courses_students_count"];
		courses_lectures_count = Array["courses_lectures_count"];
		instructor_id = Array["instructor_id"];
		tags = Array["tags"];
		skill = Array["skill"];
		price = Array["price"];
		video_url = Array["video_url"];

		return (
			<Fragment>
				<Container className="mt-5">
					<Row>
						<h1> Couse Details </h1>
						<Col lg={8} md={6} sm={12}>
							{/* <img src={small_img} /> */}

							<Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
								<BigPlayButton position="center" />
							</Player>
							<p className="mt-5"> {ReactHtmlParser(courses_long_description)}</p>
						</Col>

						<Col lg={4} md={6} sm={12}>
							<div className="box_feature">
								<h4 className="g">Course Features</h4>

								<ul>
									<li className="d-flex gap-2 align-items-center">
										<FontAwesomeIcon className="iconBullent" icon={faUser} />{" "}
										<div> Enrolled :</div> {courses_students_count} students
									</li>

									<li>
										<FontAwesomeIcon className="iconBullent" icon={faClock} />{" "}
										<span>Duration :</span> {total_duration} hours
									</li>

									<li>
										<FontAwesomeIcon className="iconBullent" icon={faClipboard} />{" "}
										<span>Lectures :</span> {courses_lectures_count}
									</li>

									<li>
										<FontAwesomeIcon className="iconBullent" icon={faClone} />{" "}
										<span>Categories:</span> {courses_category}
									</li>

									<li>
										<FontAwesomeIcon className="iconBullent" icon={faTags} />{" "}
										<span>Tags:</span> {tags}
									</li>

									<li>
										<FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />{" "}
										<span>Instructor:</span> {instructor_id}
									</li>
								</ul>
								<div className="price-d">
									<h5>
										Price:<span>${price}</span>
									</h5>
									<Button className="b">ENROLL COURSE</Button>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<br></br> <br></br>
				<Container>
					<Row>
						<Col lg={8}>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body>Hello! I am the body</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<Card.Body>Hello! I am another body</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>

                              <Col lg={4}>
                                   <div>
                                        <h4>skill you need </h4>
                                        <p className="m-1">Html</p>
                                        <p className="m-1">Html</p>
                                        <p className="m-1">Html</p>
                                        <p className="m-1">Html</p>
                                   </div>
                                   </Col>
					</Row>
				</Container>
			</Fragment>
		);
	}
}

export default CourseDetails;
