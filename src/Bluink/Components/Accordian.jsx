import "./Accord.css";

import Accordion from "react-bootstrap/Accordion";

function AccordianFaq() {
  return (
    <div className="AccordFaq">
      <h4 className="accordh5">SOMETHING IN YOUR MIND?</h4>
      <h2 className="accordh2">GOT QUESTIONS? WE GOT ANSWERS! </h2>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. What services does Bluink360 Solutions offer?{" "}
          </Accordion.Header>
          <Accordion.Body>
            We provide a range of services including technical training, career
            placement support, and certification courses in various
            technologies. Our programs are designed to upskill individuals for
            careers in IT and tech.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. What courses are available at Bluink360 Solutions?
          </Accordion.Header>
          <Accordion.Body>
            Bluink360 Solutions offers courses in Data Structures and Algorithms
            and SystemDesign. We offer personalized training programs for
            professionals looking to enhance their skills.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Who are the instructors at Bluink360 Solutions?
          </Accordion.Header>
          <Accordion.Body>
            Our instructors are industry experts with extensive experience in
            their respective fields. They combine theoretical knowledge with
            real-world application to ensure students gain practical skills.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. Do I receive a certificate after completing a course?
          </Accordion.Header>
          <Accordion.Body>
            Yes, upon successfully completing the course and passing the
            assessments, you will receive a recognized certification from
            Bluink360 Solutions, which can help in job placements and career
            advancement.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Does Bluink360 Solutions provide placement assistance?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we have a dedicated placement team that helps students prepare
            for interviews and connects them with potential employers. We have
            partnerships with several companies looking to hire trained
            professionals.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. What is the mode of training at Bluink360 Solutions?
          </Accordion.Header>
          <Accordion.Body>
            We offer both online and classroom-based training to suit the needs
            of our students. You can choose the mode of training based on your
            convenience.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. 7. How do I enroll in a course?
          </Accordion.Header>
          <Accordion.Body>
            You can enroll through our website by selecting your desired course
            and completing the registration process. Alternatively, you can
            contact our admissions team for assistance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            8. Are there any prerequisites for enrolling in a course?
          </Accordion.Header>
          <Accordion.Body>
            Some advanced courses may require prior knowledge or experience in
            related fields. The prerequisites are usually listed in the course
            details. However, we also offer beginner-level courses for those
            starting their journey in tech.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            9. Do you offer any scholarships or discounts?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we offer scholarships and discounts based on merit, need, or
            promotional offers. Please check our website or contact our support
            team for the latest updates on available financial aid options.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            10. How long does it take to complete a course?
          </Accordion.Header>
          <Accordion.Body>
            Course durations vary depending on the program. Some are designed to
            be completed in 2-3 months, while others may take 6 months or more,
            especially advanced certifications.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            11. Can I access course materials after the program ends?
          </Accordion.Header>
          <Accordion.Body>
            Yes, students get access to course materials for a certain period
            even after completing the course. Some resources may remain
            available for lifetime access, depending on the program.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            12. What payment methods are accepted?
          </Accordion.Header>
          <Accordion.Body>
            We accept all major credit cards, debit cards, net banking, and
            digital payment platforms. EMI options are also available for
            certain programs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            13. How can I contact Bluink360 Solutions for more information?
          </Accordion.Header>
          <Accordion.Body>
            You can reach us via email, phone, or through the contact form on
            our website. Our support team is available during business hours to
            assist with any queries
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordianFaq;
