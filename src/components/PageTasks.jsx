import "../assets/css/tasks.css";
import ExampleSetup from "../assets/img/examplel-setup.svg";
import TaskItem from "../sub_components/TaskItem";

const PageTasks = () =>{
    return(
        <div className="page-tasks">
            <span className="page-header primary-font">QUICKBOOKS & XERO BOOKKEEPING SERVICES & FINANCIAL REPORTING?</span>
            <div className="page-content">
                <img src={ExampleSetup} className="content-img" alt="Example-setup" />
                <div className="content-description">
                    <TaskItem itemDescription="Daily, weekly, and monthly recording of transactions." />
                    <TaskItem itemDescription="Bank reconciliation for credit card, loan, investment, and merchant accounts." />
                    <TaskItem itemDescription="Accounts Receivable & Payable - coding, posting of cash receipts & sales, invoicing, and maintenance of customer/vendors master files. " />
                    <TaskItem itemDescription="Preparation and processing of payroll" />
                    <TaskItem itemDescription="Preparation and presentation of Financial Statements" />
                    <TaskItem itemDescription="QuickBooks/Xero Set-up - New business accounts" />
                    <TaskItem itemDescription="Clean up/Catch Up work - If your books are behind and require back months of bookkeeping." />
                    <TaskItem itemDescription="Monthly/quarterly calls" />
                    <TaskItem itemDescription="Quickbooks, Xero and Appfolio user" />
                </div>
            </div>
        </div>
    )
}

export default PageTasks;