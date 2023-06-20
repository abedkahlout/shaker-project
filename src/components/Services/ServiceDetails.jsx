import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button, NavLink } from "react-bootstrap";

import SerImg from "../../asset/image/Services.jpg";

import "../Services/Services.css";
import "../../asset/css/Bootstrap.min.css";
import AppUrl from "../../AppUrl/AppUrl";
import RestApp from "../../AppUrl/RestApp";
import { Link } from "react-router-dom";
import TopNavigation from "../TopNavigtion/TopNavigation";
import TopPage from "../../pages/TopPage";
import Footer from "../Footer/Footer";

class ServiceDetails extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}
	componentDidMount() {
		RestApp.GetRequest(AppUrl.Services).then((result) => {
			this.setState({ data: result });
		});
	}

	render() {
        let services_name = 'abed'
		const List = [services_name ];

		const view = List.map((List) => {
			return (
				<Col lg={12} md={6} sm={12}>
					<Card className="serviceCard border-none">
						{" "}
						<div className="d-flex align-items-center justify-content-between">
							<div className="d-flex avat align-items-center">
								<Card.Img variant="top" className="border-5" src="/1.webp" />
                                <p>shaker shaker</p>
							</div>
							<div>
								<Card.Title className="text-right"> 35$</Card.Title>
								<Card.Title className="serviceName">{List.services_name}</Card.Title>
							</div>
						</div>
						<Card.Img
							variant="top"
							width={300}
							height={250}
							className="serviceimg"
							src="/1.webp"
						/>

                        <h3 className="mt-5">What you get with htis offer</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        </p>
                        <h3 className="mt-5">What you get with htis offer</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quia quisquam consequuntur facere impedit dignissimos corporis nihil sapiente, fugit illum quidem distinctio non asperiores error et a! Nulla, cumque!
                        </p>
                    </Card>
				</Col>
			);
		});
		return (
			<Fragment>
				<TopNavigation />
				<TopPage pagetitle="Medical pro  " />
				<Container>
					<div className="d-flex justify-content-end mt-5">
						<Button className="text-right btn-blue " >
Buy now						</Button>
					</div>

					<h1 className="serviceMainTitle">Medical pro</h1>
					<div className="bottom "></div>

					<Row>{view}</Row>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}

export default ServiceDetails;
