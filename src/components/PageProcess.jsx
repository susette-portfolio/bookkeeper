import "../assets/css/process.css";
import ProcessCard from "../sub_components/ProcessCard";

import DownloadingIcon from '@mui/icons-material/Downloading';
import CategoryIcon from '@mui/icons-material/Category';
import QuizIcon from '@mui/icons-material/Quiz';
import DvrIcon from '@mui/icons-material/Dvr';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";


const PageProcess = () => {
  return (
    <div className="page-process">
      <span className="process-page-header primary-font">MY PROCESS FLOW</span>
      <div className="process-list">
        <ProcessCard onCardNumber={<Filter1Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<DownloadingIcon sx={{fontSize:'36px'}} />} onCardDescription={"Download Transactions from agreed upon period."} />
        <ProcessCard onCardNumber={<Filter2Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<CategoryIcon sx={{fontSize:'36px'}} />} onCardDescription={"Categorize Transactions"} />
        <ProcessCard onCardNumber={<Filter3Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<QuizIcon sx={{fontSize:'36px'}} />} onCardDescription={"Uncertain Transactions put under \"Uncategorized\""} />
        <ProcessCard onCardNumber={<Filter4Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<DvrIcon sx={{fontSize:'36px'}} />} onCardDescription={"Make a List of Monthly Bills/Expenses"} />
        <ProcessCard onCardNumber={<Filter5Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<FileCopyIcon sx={{fontSize:'36px'}} />} onCardDescription={"Document all questions & answers in client file"} />     
        <ProcessCard onCardNumber={<Filter6Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<EventNoteIcon sx={{fontSize:'36px'}} />} onCardDescription={"Reconcile every month and complete month end close"} />
        <ProcessCard onCardNumber={<Filter7Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<FilePresentIcon sx={{fontSize:'36px'}} />} onCardDescription={"Generate client reports (like P&L, Balance Sheets, Cash Flow Analysis)"} />
        <ProcessCard onCardNumber={<Filter8Icon sx={{ fontSize: "48px", color: "white" }} />} onCardIcon={<PermContactCalendarIcon sx={{fontSize:'36px'}} />} onCardDescription={"Schedule Client Virtual Meeting"} />
      </div>
    </div>
  );
};

export default PageProcess;
