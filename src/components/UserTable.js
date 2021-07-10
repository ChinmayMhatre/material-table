import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor:"#ccc"
  },
});

function UserTable({users,handleDelete,open,handleClose}) {
    const classes = useStyles();
 
    return (
        <div>
           
            <TableContainer component={Paper}>
        <Table className={classes.table} >
            <TableHead>
            <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell align="left"><b>Username</b></TableCell>
                <TableCell align="left"><b>Email</b></TableCell>
                <TableCell align="left"><b>Phone</b></TableCell>
                <TableCell align="left"><b>Website</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user=>{
                    return(
                        <TableRow key={user.name}>
                        <TableCell component="th" scope="row">
                            {user.name}
                        </TableCell>
                        <TableCell align="left">{user.username}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left">{user.phone}</TableCell>
                        <TableCell align="left">{user.website}</TableCell>
                        <TableCell align="left">
                                <Button onClick={()=>handleDelete(user.id)} size="small" variant="contained" color="secondary">
                                    Delete
                                </Button>
                        </TableCell>
                        </TableRow>
                    )
                    
                })}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
        
    )
}

export default UserTable
