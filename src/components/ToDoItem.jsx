import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { EditIconItem } from "./editIcon";
import { Stack } from "@mui/material";

import { DeleteIconItem } from "./deleteIcon";
import { CheckButtonItem } from "./checkIcon";
export const TodoItem = ({ object }) => {
  return (
    <Card
      sx={{ minWidth: 500, margin: 2, background: "#283593", color: "white" }}
      
    >
      <CardContent className="cardItem">
        <Grid container spacing={1}>
          <Grid xs={8}>
            <Stack>
              <Typography
                variant="h6"
                style={{
                  textAlign: "right",
                  textDecoration : object.isFinished ? "line-through" :"none"
                }}
              >
                {object.title}
              </Typography>
              <Typography
                variant="h8"
                style={{
                  textAlign: "right",
                }}
              >
                {object.body}
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-around" className="iconsContainer">
            {/* check icon  */}
            <CheckButtonItem id={object.id} isFinished={object.isFinished} />
            {/* edit Icon  */}
            <EditIconItem id={object.id} title={object.title} body = {object.body} />
            {/* delete Icon */}
            <DeleteIconItem id={object.id} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
