import IconButton from "@mui/material/IconButton";
import { useTodo } from "../context/to_do_context";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
export const CheckButtonItem = ({id ,isFinished})=>{
  const {dispatch} = useTodo() ; 
    return <IconButton
    aria-label="delete"
    size="small"
    style={{
      height:"100%" , 
      color: isFinished ? "white" : "#8bc34a",
      backgroundColor: isFinished ? "#8bc34a" : "white",
      border: "3px solid #8bc34a ",
    }}
    onClick={() => {
      dispatch(
        {
          type:"checked" , 
          payload :{
            id 
          }
        }
      )
    }}
    >
    <CheckOutlinedIcon className="iconButton" fontSize="small" />
    </IconButton>
}