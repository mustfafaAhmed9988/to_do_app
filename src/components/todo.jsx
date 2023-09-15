import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { TodoItem } from "./ToDoItem";
import { useState ,useEffect ,  useMemo , useReducer } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {  useTodo } from "../context/to_do_context";
export const TodosContainer = () => {
  const {todos , dispatch} = useTodo() ; 
  const [alignment, setAlignment] = React.useState("left");
  const [input, setInput] = useState("");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(
    ()=> {
      dispatch(
       {
        type:"get" ,
       }
      )
    },[]
  )
  const completedTodos = useMemo(
    ()=>{
      return todos.filter(
        (e)=>{
          return e.isFinished ; 
        }
      )
    }, [todos]
  ) ; 
  const unCompletedTodos = useMemo(
    ()=>{
      return todos.filter(
        (e)=>{
          return !e.isFinished ; 
        }
      )
    }, [todos]
  )
 let arrayToBeRendered = todos ; 
 if (alignment === "done"){
  arrayToBeRendered = completedTodos ; 
 }
 if (alignment === "undone"){
  arrayToBeRendered = unCompletedTodos ; 
 }
const displayTodos = arrayToBeRendered.map(
  (e) => <TodoItem key={e.id} object = {e} ></TodoItem>
)

  return (
    <div className="toDoContainer">
      <Card sx={{ minWidth: 600 }} style={
        {
          maxHeight: "80vh" ,
          overflow:"scroll" 
        }
      }>
        <CardContent className="card">
          <Typography variant="h2">مهامي</Typography>
          <Divider
            style={{
              margin: "10px 0px",
            }}
          />
          <ToggleButtonGroup
              value={alignment}
            exclusive
            onChange={handleAlignment}
            style={{
              marginTop: "7px",
              direction: "ltr",
            }}
          >
            <ToggleButton value="done">المنجز</ToggleButton>
            <ToggleButton value="undone">غير المنجز</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
          </ToggleButtonGroup>
          {
         displayTodos
          }
          <Grid container spacing={1} sx={{ margin: 2 }}>
            <Grid xs={8}>
              <TextField
                value={input}
                id="outlined-basic"
                label="اضافة مهمة "
                variant="outlined"
                style={{ width: "100%" }}
                onChange={(e) => setInput(e.target.value)}
              />
            </Grid>
            <Grid xs={4} display="flex" justifyContent="space-around">
              <Button
                variant="contained"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(
                    {
                      type:"added" , 
                      payload:{
                        title :input
                      }
                    }
                  )
                  setInput("");
                }}
                disabled={input.length === 0 }
              >
                اضافة
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
