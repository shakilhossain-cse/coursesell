import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="w-100 py-4 flex-shrink-0 bg-primary">
      <Container className="py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">FB.</h5>
            <p className="small text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className="small text-white mb-0">
              © Copyrights. All rights reserved.{" "}
              <a className="text-primary" href="#">
                Bootstrapious.com
              </a>
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">About</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Get started</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">FAQ</a>
              </li>
            </ul>
          </div>
      
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="small text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <form action="#">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  id="button-addon2"
                  type="button"
                >
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
