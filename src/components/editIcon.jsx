import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useTodo } from "../context/to_do_context";
export const EditIconItem = ({id , title, body })=>{
    const [open, setOpen] = useState(false);
    const {dispatch} = useTodo() ; 

    const [inputObject , setInputObject ]= useState({title:title , body:body})

const handleClickOpen = () => { 
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

    return    <div>
    <IconButton
    className="iconButton"
    aria-label="delete"
    size="small"
    style={{
      color: "#1769aa",
      backgroundColor: "white",
      border: "3px solid #1769aa ",
     
    }}
    onClick={handleClickOpen}
  >
                  <EditIcon fontSize="small" />
         </IconButton>
      <Dialog open={open} onClose={handleClose} style={{direction:"rtl"}}>
        <DialogTitle>تعديل مهمة</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="عنوان المهمة "
            type="text"
            fullWidth
            variant="standard" 
            value ={inputObject.title}
            onChange={
                (e)=>setInputObject({...inputObject , title:e.target.value})
            }
          />
               <TextField
            autoFocus
            margin="dense"
            id="name"
            label="التفاصيل"
            type="text"
            fullWidth
            variant="standard"
            value ={inputObject.body}
            onChange={
                (e)=>setInputObject({...inputObject , body:e.target.value})
            }
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>اغلاق</Button>
          <Button onClick={()=>{
            dispatch(
              {
                type:"update" , 
                payload: {
                  id :id , 
                  title:inputObject.title , 
                  body:inputObject.body
                }
              }
            )

          handleClose()
          }}
          >تاكيد </Button>

        </DialogActions>
      </Dialog>
    </div>
}