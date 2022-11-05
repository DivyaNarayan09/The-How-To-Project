import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { makeStyles } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     "&:hover": {
//       border: "5px solid #fff",
//     },
//   },
// }));

export default function BlogCard(props) {
  // const classes = useStyles();
  return (
    <div class="BlogCard">
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "rgb(70, 43, 136, 0.4)",
          color: "white",
        }}
      >
        <CardMedia component="img" height="140" image={props.img} alt="media" />
        <CardContent>
          <Link
            to="/BlogPost"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.heading}
            </Typography>
          </Link>
          <Typography variant="body2" color="white">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
          >
            <i class="fas fa-2x fa-heart"></i>
          </Button>
          <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
          >
            <i class="fas fa-2x fa-comments"></i>
          </Button>
          <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
          >
            <i class="fas fa-2x fa-bookmark"></i>
          </Button>
          <Button
            size="small"
            sx={{ backgroundColor: "none", color: "#c69af6" }}
          >
            <i class="fas fa-2x fa-share"></i>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
