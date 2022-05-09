import { Button, Form } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center mb-5">
                  <h1 className="text-uppercase ">Contact Form</h1>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <div className="contact-form">
                  <Form>
                    <div className="row">
                      <Form.Group className="col-lg-6 col-sm-12 mb-3">
                        <Form.Control
                          name="name"
                          type="text"
                          placeholder="Your Name*"
                          required=""
                        />
                      </Form.Group>
                      <Form.Group className="col-lg-6 col-sm-12 mb-3">
                        <Form.Control
                          name="email"
                          type="eamil"
                          placeholder="Your Email Address*"
                          required=""
                        />
                      </Form.Group>
                      <Form.Group className="col-lg-6 col-sm-12 mb-3">
                        <Form.Control
                          name="phone"
                          type="number"
                          placeholder="Phone Number*"
                          required=""
                        />
                      </Form.Group>
                      <Form.Group className="col-lg-6 col-sm-12 mb-3">
                        <select
                          defaultValue="number-guests"
                          name="number-guests"
                          id="number-guests"
                        >
                          <option value="number-guests">
                            Number Of Guests
                          </option>
                          <option name="1" id="1">
                            1
                          </option>
                          <option name="2" id="2">
                            2
                          </option>
                          <option name="3" id="3">
                            3
                          </option>
                        </select>
                      </Form.Group>
                      <Form.Group className="col-lg-12 mb-3">
                        <textarea
                          name="phone"
                          type="text"
                          placeholder="Message"
                          rows="3"
                          required=""
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <input
                          type="checkbox"
                          name="agree-term"
                          label="I agree all statements in Terms of service"
                        />
                        <span className="px-2">
                          I agree all statements in Terms of service
                        </span>
                      </Form.Group>
                      <div className="col-lg-12 d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
