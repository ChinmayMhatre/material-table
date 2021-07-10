import React,{useEffect} from 'react';
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



export default function EditModal({open,handleClose,currentUser,users,editModalOpen}) {
  const classes = useStyles();
  useEffect(() => {
    console.log(currentUser)
  }, [editModalOpen])
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
            <h2 id="transition-modal-title">Add new users</h2>
            <div id="transition-modal-description">
                <TextField id="outlined-basic" label="Name" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" label="Username" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" label="Phone" variant="outlined" /><br/>
                <br/>
                <TextField id="outlined-basic" label="Website" variant="outlined" /><br/>
                <br/>
                <Button contained variant="outlined" style={{
                  
                    width:"100%"
                }}  >Submit</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}