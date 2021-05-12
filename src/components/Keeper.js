import React, {useState} from "react";

export default function Keeper() {
    const [notes, setNotes] = useState([
        {
            title: 'Kael',
            content: 'Invoker'
        },
        {
            title: 'Akasha',
            content: 'Queen of Pain'
        }
    ])
    const [note, setNote] = useState({title: '', content: ''})

    const handleChange = (e) => {
        const {name, value} = e.target
        setNote({
            ...note,
            [name]: value
        })
    }

    const handleClick = () => {
        setNote({
            ...note,
        })
        setNotes([...notes, note])
    }

    const deleteNote = (i) => {
        setNotes(prevNotes => {
            return prevNotes.filter((note, idx) => idx !== i)
        })
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Title" name='title' onChange={handleChange}/>
                <textarea name="content" id="" cols="30" rows="10" placeholder="Take a note" onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
            </div>
            <div>
                {notes.map((note, i) => {
                    return (<Card note={note} key={i} onclick={() => deleteNote(i)}/>)
                })}
            </div>
        </>
    )
}

function Card(props) {
    return (
        <>
            <div>
                <input type="text" placeholder="Title" value={props.note.title} readOnly/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Take a note" value={props.note.content}
                          readOnly/>
            </div>
            <div>
                <button onClick={props.onclick}>Delete</button>
            </div>
        </>
    )
}
