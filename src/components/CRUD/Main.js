import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import AddDialog from "./AddDialog";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(id, name, types, model, price, releaseDate) {
    return {id, name, types, model, price, releaseDate};
}

const labels = ['ID', 'Name', 'Types', 'Model', 'Price', 'Release Date']

export default function Main() {
    const classes = useStyles();

    const [rows, setRows] = useState(() => [
        createData(1, 'McLaren', 'Mercedes', 'A', '300', '2020'),
        createData(2, 'DB10', 'Aston Martin', 'A', '300', '2020'),
        createData(3, 'Benz', 'Mercedes', 'A', '300', '2020'),
        createData(4, 'Gallardo', 'Lamborghini', 'A', '300', '2020'),
    ])

    const handleAdd = (row) => {
        const newRows = [...rows]
        const newRow = Object.assign({}, row)
        newRow.id = newRows.length + 1
        newRows.splice(newRows.length, 0, newRow)
        setRows(newRows)
    }

    const handleSave = (row) => {
        const newRows = [...rows]
        newRows.splice(row.id - 1, 1, row)
        console.log(newRows)
    }

    const handleDelete = (row) => {
        let newRows = [...rows]
        const listId = newRows.map(x => x.id)
        newRows = newRows.filter(x => x.id != row.id)
        setRows(newRows)
    }

    return (
        <div>
            <div style={{'display': 'flex'}}>
                <span>
                    <h1>Products</h1>
                </span>
                <span style={{'margin-left': 'auto'}}>
                    <AddDialog labels={labels} handleAdd={handleAdd} />
                </span>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {labels.map(props => <TableCell key={props}>{props}</TableCell>)}
                                <TableCell>Modify</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.types}</TableCell>
                                    <TableCell>{row.model}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.releaseDate}</TableCell>
                                    <TableCell>
                                        <EditDialog value={row} labels={labels} handleSave={handleSave}/>
                                        <DeleteDialog value={row} labels={labels} handleDelete={handleDelete}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

