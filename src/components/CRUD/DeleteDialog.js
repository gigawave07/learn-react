import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Delete} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

export default function EditDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (row) => {
        props.handleDelete(row)
        handleClose()
    }

    return (
        <>
            <IconButton edge="start" color="secondary" aria-label="delete" onClick={handleClickOpen}>
                <Delete fontSize="large"/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Are you sure?</DialogTitle>
                <DialogContent>
                    Please confirm the action to delete {props.value.name}. This can not be reverted.
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="text">
                        Cancel
                    </Button>
                    <Button onClick={() => handleDelete(props.value)} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
