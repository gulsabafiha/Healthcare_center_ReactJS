import React from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="container-faq">
      <div className="text">
        <h1>
          Frequently Asked <br />
          <span>Questions</span>
        </h1>
        <div className="con-btn">
          <button>View All</button>
        </div>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to make an appointment?</Accordion.Header>
            <Accordion.Body>
              You should make an appointment by calling or by email. Do not try
              to make appointments by text, unless you are simply asking a good
              friend if they would like to have lunch. When making an
              appointment you should give the person your name and the reason
              for wanting an appointment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What will my insurance cover for me?
            </Accordion.Header>
            <Accordion.Body>
              This presentation will help you understand how to get health
              insurance, how to pay for health insurance, and how to actually
              use it. Health insurance can be confusing, but it is also really
              important. We need to be smart shoppers in order to understand
              what it will cost and what will help our families the
              most.Insurance in general is meant to protect you financially if
              something bad happens that is expensive to fix or recover from.
              You might get insurance for your car, life, your apartment, or
              even your phone. When you have insurance, you pay a little bit
              each month. If there is an accident, the insurance company will
              help cover some of the costs for you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Is there a parking place to the clinic?
            </Accordion.Header>
            <Accordion.Body>
              If you're arriving at the Scottsdale or Phoenix campus from one of
              the partner hotels or the Village at Mayo Clinic, a complimentary
              shuttle can drop you off right at the front entrance. But there
              are plenty of parking options if you choose to drive.You'll find
              an underground parking garage for patients and visitors, with
              direct elevator access to the clinic building. In addition, there
              are several surface lots next to the clinic.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How can make a home appointment?
            </Accordion.Header>
            <Accordion.Body>
              One of the mainstays of life is making and keeping appointments.
              Many people consider “an appointment” to mean a doctor’s visit or
              a job interview or other more formal. However, it is important to
              realize that such activities as meeting a friend for lunch or
              dinner, going to a concert with friends, or having work done on
              your flat are all appointments. Setting and handling appointments
              is a must for those learning business English and require some
              basic organizational skills. The ability to set appointments, both
              formal and informal, changing or cancelling appointments, and
              confirming appointments efficiently and clearly will help you
              efficiently manage your time, help you be more productive, and
              help alleviate stress.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
