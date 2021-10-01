import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Edit} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

export default function EditDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (row) => {
        props.handleSave(row)
        handleClose()
    }

    const properties = Object.keys(props.value)

    return (
        <>
            <IconButton edge="start" color="primary" aria-label="delete" onClick={handleClickOpen}>
                <Edit fontSize="large"/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit {props.value.name}</DialogTitle>
                <DialogContent>
                    {properties.map((prop,i) => {
                        return (
                            <TextField
                                autoFocus
                                margin="dense"
                                label={props.labels[i]}
                                type="text"
                                fullWidth
                                value={props.value[properties[i]]}
                                key={props.value[properties[i]]}
                            />
                        )
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleSave(props.value)} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
