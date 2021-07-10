import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function NewModal({open,handleClose,handleOpen,handleSubmit}) {
    const [values, setValues] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    })
    const classes = useStyles();

    const changeHandler = e => {
        setValues( prevValues => {
        return { ...prevValues,[e.target.name]: e.target.value}
        })}
     

  return (
    <div>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="title">Add new users</h2>
            <div id="description">
                <TextField id="outlined-basic" name="name" onChange={changeHandler} value={values.name} label="Name" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" name="username"  onChange={changeHandler} value={values.username} label="Username" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" name="email"  onChange={changeHandler} value={values.email} label="Email" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" name="phone"  onChange={changeHandler} value={values.phone} label="Phone" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" name="website"  onChange={changeHandler} value={values.website} label="Website" variant="outlined" /><br/>
                <br/>
                <Button onClick={()=>handleSubmit(values.name,values.username,values.email,values.phone,values.website)} contained variant="outlined" style={{
                    width:"100%"
                }} >
                  Submit
                </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}