import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { Component } from "react";



export default class NewsItem extends Component {

  render() {
    //   const  element  = this.props; this is not valid
      const { element } = this.props;

    return (
      <Card sx={{ maxWidth: 345}} className="my-3">
        <CardHeader
                title={<Typography>
                    {element.title ? element.title.slice(0, 30) : "Top-News-Today"}
                </Typography>}
          subheader={
            element.publishedAt ? element.publishedAt : new Date().getFullYear()
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={
            element.urlToImage
              ? element.urlToImage
              : "https://hs.mediadelivery.fi/img/some/default/a1ff55b239477677d2a74f1518821ca3.jpg"
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {element.content
              ? element.content.slice(0, 150)
              : "click on the Read More button to know more"}
            ...
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="d-flex justify-content-between">
          <a
            href={
              element.url
                ? element.url
                : "https://biztoc.com/x/c72bf0be20d22064"
            }
            target="_blank"
            rel="noreferrer"
            style={{ underline: "none" }}
          >
            <div className="btn btn-primary ">Read More...</div>
          </a>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
