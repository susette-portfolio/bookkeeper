import "../assets/css/task_item.css";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const TaskItem = (props) =>{
    return(
        <div className="task-item">
            <LabelImportantIcon />
            <span className="item-description secondary-font">{props.itemDescription}</span>
        </div>
    )
}

export default TaskItem;