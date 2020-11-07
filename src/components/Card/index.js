import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 160,
    margin: 20,
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ReactCard({ item, onClick, cardStyle }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { image_url, name } = item;

  return (
    <Card
      className={classes.root}
      style={cardStyle}
      onClick={() => onClick(item)}
    >
      <CardMedia className={classes.media} image={image_url} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ReactCard;
