import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BorderAllSharp, BorderOuterRounded, BorderStyleOutlined } from "@mui/icons-material";
// import { makeStyles } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     "&:hover": {
//       border: "5px solid #fff",
//     },
//   },
// }));

export default function BCards(props) {
  // const classes = useStyles();
  return (
    <div class="BCard">
      <Card
        sx={{
          maxWidth: 800,
          backgroundColor: "rgb(148, 207, 250, 0.4)",
          color: "white",
          display:"flex",
          borderRadius:7
        }}
      >
        <CardMedia component="img" height="150" 
        sx={{width:151,display:"flex",padding:3}} image={props.img} alt="media" />
        <CardContent sx={{display:"flex" }}>
          <Typography gutterBottom variant="h5" align="center" component="div">
            {props.heading}
          </Typography>
          <Button
            size="small" 
            sx={{color: "#40F4FF" ,
                 marginLeft:"400px",
                 }}>
            <i class="fas fa-2x fa-close"></i>
          </Button>
          <Button
            size="small"
            sx={{color: "#40F4FF" }}>         
            <i class="fa fa-2x fa-ellipsis-v" ></i>
          </Button>

        </CardContent>
      </Card>
    
    </div>
  );
}
