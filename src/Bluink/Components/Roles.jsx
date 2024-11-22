import "./Roles.css";

function Roles() {
  return (
    <>
      <div className="roles">
        <section className="Roles-roles">
          <h2 className="rolesh2">
            What roles can a candidate apply for After Completing this Program
          </h2>
          <ul className="rolesul">
            <li className="rolesli">
              <strong>Data Engineer:</strong> Works on designing data pipelines,
              managing databases, and optimizing queries.
            </li>
            <li className="rolesli">
              <strong>System Architect:</strong> Designs overall system
              architecture, ensuring scalability and reliability.
            </li>
            <li className="rolesli">
              <strong>Technical Lead:</strong> Oversees technical projects,
              guides development teams, and ensures that best practices in
              coding and system design are followed.
            </li>
            <li className="rolesli">
              <strong>Software Engineer / Developer:</strong> Involves
              designing, coding, testing, and maintaining software applications.
            </li>
            <li className="rolesli">
              <strong>Software Development Engineer in Test (SDET):</strong>{" "}
              Specializes in designing and implementing tests for software
              applications.
            </li>
            <li className="rolesli">
              <strong>Technical Product Manager:</strong> Works on defining
              product features, managing the development lifecycle, and ensuring
              technical aspects of the product align with business goals.
            </li>
            <li className="rolesli">
              <strong>DevOps Engineer:</strong> Focuses on automating and
              improving the software development lifecycle.
            </li>
            <li className="rolesli">
              <strong>Backend Engineer:</strong> Focuses on server-side logic,
              database management, and API development.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
export default Roles;
