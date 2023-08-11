import AccomplishedIllustration from "../assets/img/completedTasks.svg";
import "../assets/css/accomplished.css";

const PageAccomplished = () => {
  return (
    <div className="page-accomplished">
      <div className="image-title-medium">
        <span className="accomplished-title-medium primary-font">
          PROJECTS DID FOR MY CLIENTS' BOOKS
        </span>
        <img
          src={AccomplishedIllustration}
          className="page-illustration-medium"
        />
      </div>
      <img
          src={AccomplishedIllustration}
          className="page-illustration"
        />
      <div className="page-description">
        <span className="accomplished-title primary-font">
          PROJECTS DID FOR MY CLIENTS' BOOKS
        </span>
        <span className="accomplished-subtitle secondary-font">
          Aside from performing the above-listed services, I have also:
        </span>
        <ul className="accomplished-item secondary-font">
          <li>
            Assisted clients in monitoring and categorizing various sources of
            revenue.
          </li>
          <li>
            Implemented the use of Class and Tag features to facilitate easier
            reporting.
          </li>
          <li>
            Created an Excel spreadsheet to segregate the income and expenses of
            different properties, making it convenient for clients to view them
            on a monthly basis.
          </li>
          <li>Performed End-to-End Bookkeeping.</li>
          <li>
            Conducted monthly calls to address concerns, discuss potential
            growth opportunities, and resolve any issues.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageAccomplished;
