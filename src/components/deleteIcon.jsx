import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import { useSnackBar } from '../context/snackBar';
import { useTodo } from '../context/to_do_context';
export const DeleteIconItem = ({id})=>{
  const {dispatch} = useTodo() ; 
  const {showAndHideToast} = useSnackBar()
    const [open, setOpen] = useState(false);
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
      color: "red",
      backgroundColor: "white",
      border: "3px solid red ",
     
    }}
    onClick={handleClickOpen}
  >
                    <DeleteIcon fontSize="small" />
         </IconButton>
      <Dialog open={open} onClose={handleClose} style={{direction:"rtl"}}>
        <DialogTitle>حذف المهمة</DialogTitle>
        <DialogContent>
            <h3>
                هل انت متأكد من ازالة المهمة 
            </h3>
          
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>اغلاق</Button>
          <Button onClick={()=>{
            dispatch(
              {
                type:"deleted" , 
                payload:{
                  id:id  
                }
              }
            )
          showAndHideToast() ; 
          handleClose();

          }}
          >تاكيد </Button>

        </DialogActions>
      </Dialog>
    </div>
}