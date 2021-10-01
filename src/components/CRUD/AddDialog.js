import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Add} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function AddDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const labels = props.labels.filter(x => x != 'ID')
    const properties = ['name', 'types', 'model', 'price', 'releaseDate']

    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too short').required('Required'),
        types: Yup.string().required('Required'),
        model: Yup.string().required('Required'),
        price: Yup.string().required('Required'),
        releaseDate: Yup.string().required('Required'),
    });

    const date = new Date()

    const formik = useFormik({
        initialValues: {
            name: '',
            types: '',
            model: '',
            price: 0,
            releaseDate: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        },
        onSubmit: values => {
            props.handleAdd(values)
            handleClose()
        },
        validationSchema: SignupSchema
    });

    return (
        <>
            <Button edge="start" color="primary" aria-label="delete" onClick={handleClickOpen}>
                Add
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={formik.handleSubmit}>

                    <DialogTitle id="form-dialog-title">Add new Product</DialogTitle>
                    <DialogContent>
                        {labels.map((prop, i) => {
                            return (
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label={labels[i]}
                                    type={labels[i] == 'Release Date' ? 'date' : 'text'}
                                    fullWidth
                                    key={i}
                                    name={properties[i]}
                                    onChange={formik.handleChange}
                                    value={formik.values[properties[i]]}
                                    error={formik.touched[properties[i]] && !!formik.errors[properties[i]]}
                                    helperText={formik.touched[properties[i]] && formik.errors[properties[i]]}
                                />
                            )
                        })}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
