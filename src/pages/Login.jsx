import React from "react";
import "./PagesDesign.css";
import { Button, Container, Form, NavLink } from "react-bootstrap";
function Login() {
	return (
		<div className="center bg">
			<img src="/logo.png" className="my-3" width={"20%"} height={70} />
			<div className="glass">
				<Container className="mt-5 py-3 px-5">
					<p className="text-center">Login</p>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Email" className="radius" />
							<Form.Control
								type="email"
								className="mt-3 radius"
								placeholder="password"
							/>
							<Button className="mt-3 w-100 radius" variant="primary" type="submit">
								Submit
							</Button>{" "}
						</Form.Group>
					</Form>
				</Container>
			</div>
			<p className="d-flex align-items-center">
				dont have an account ?{" "}
				<NavLink exact to="/" className="ylo m-0">
					Sign Up
				</NavLink>
			</p>
			<NavLink exact to="/"  className="ylo m-0">Forgot Password ?</NavLink>
		</div>
	);
}

export default Login;
