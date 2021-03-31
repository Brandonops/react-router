import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, useParams } from 'react-router';
import blogService from '../util/BlogService';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  palette: {
      media: {
          main: purple
      }
  }

});

export default function BlogPost() {
  const classes = useStyles();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const history = useHistory();

  useEffect(() => {
    blogService.getPostByID(+id).then(data => {
        if (!data) {
            history.push("/");
        } else {
            setBlog(data);
        }
    })
  }, [id, history]);

  if (blog === null) {
      return "Loading..."
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {blog.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to="/blog">
            <Button size="small" color="primary">
                Go Back
            </Button>
            
            </Link>
      </CardActions>
    </Card>
  );
}