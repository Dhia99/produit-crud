import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import data from './data';
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import {connect} from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

  export default function (props) {
  
    const classes = useStyles();
    
  return (
    <div className={classes.root} >
     {data.produits.map(produit =>  
    <Card key={produit._id} >
      <CardActionArea>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
          <Link to={"/produit/" + produit._id}>{produit.nom}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           ${produit.prix}
           <br />
           Qtt :{produit.Qtt}
          </Typography>
        </CardContent>
      </CardActionArea>
     </Card>
      )}
     </div>
  );
}

