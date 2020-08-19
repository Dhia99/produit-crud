import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from './data';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SaveIcon from '@material-ui/icons/Save';
import { DeleteSweep } from "@material-ui/icons";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function Produit (props) {
  const classes = useStyles();
  console.log(props.match.params.id);
  const produit = data.produits.find(x => x._id === props.match.params.id) ;
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    Nom: '',
    Prix: '',
    Qtt: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        {produit.nom} 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Prix:<b>$ {produit.prix}</b>
        </Typography>
        <Typography variant="body2" component="p">
         Qtt:<b>{produit.Qtt}</b>
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained"  size="small" color="primary"  variant="contained"
        startIcon={<DeleteIcon />}>
          Supprimer
        </Button>
        <Button  variant="contained" size="small" color="primary" onClick={handleOpen}>
          Modifier
        </Button>
      </CardActions>
      <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description" 
    >
   <div style={modalStyle} className={classes.paper}>
   <h2 id="simple-modal-title">Modifier {produit.nom}</h2>
   <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
   <Input
    id="standard-adornment-Nom"
    value={values.weight}
    onChange={handleChange('Nom')}
    endAdornment={<InputAdornment position="end"></InputAdornment>}
    aria-describedby="standard-weight-helper-text"
    inputProps={{
      'aria-label': 'Nom',
    }}
    placeholder={produit.nom}
   />
   <FormHelperText id="standard-weight-helper-text">Nom Produit</FormHelperText>
   </FormControl>
   <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
   <Input
    id="standard-adornment-Prix"
    value={values.weight}
    onChange={handleChange('Prix')}
    endAdornment={<InputAdornment position="begin">$</InputAdornment>}
    aria-describedby="standard-weight-helper-text"
    inputProps={{
      'aria-label': 'Prix',
    }}
    placeholder={produit.prix}
   />
   <FormHelperText id="standard-weight-helper-text">Prix</FormHelperText>
   </FormControl>
   <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
   <Input
    id="standard-adornment-Qtt"
    onChange={handleChange('Qtt')}
    endAdornment={<InputAdornment position="end"></InputAdornment>}
    aria-describedby="standard-weight-helper-text"
    inputProps={{
      'aria-label': 'Qtt',
    }}
    placeholder={produit.Qtt}
   />
   <FormHelperText id="standard-weight-helper-text">Qtt</FormHelperText>
   <br/>
   <Button variant="contained" size="small"  color="primary" startIcon={<SaveIcon />}>
    Enregistrer
   </Button>
   </FormControl>
   </div> 
   </Modal>

    </Card>
    
  );
}

