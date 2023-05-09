import { useEffect, useState } from 'react'
import { Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';

import '../styles/form.css'

export default function ApplicationForm({ show, setShow }) {

    const [send, setSend] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.overlay')[0].style.opacity = 1
        }, 400)
    }, [])
    useEffect(() => {
        if (send) {
            document.querySelectorAll('input').forEach(input => input.value = null)
            document.querySelector('textarea').value = null
        }
    }, [send])

    return (
        <div
            className="overlay"
            style={show ? { animationName: 'showOverlay' } : { animationName: 'hideOverlay' }}
            onClick={send ? () => { setShow(false); setTimeout(() => setSend(false), 400) } : () => { }}
        >
            <div
                className="container"
                style={show ? { animationName: 'showForm' } : { animationName: 'hideForm' }}
            >
                <div className="form"
                    style={send ? { animationName: 'sendForm' } : {}}>
                    <div className="title" style={send ? { display: 'none' } : {}}>Formularz rekrutacyjny</div>
                    <div className="inputs" style={send ? { display: 'none' } : {}}>
                        <TextField
                            label="Imię i nazwisko"
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                            sx={{ width: 'calc(85% - 10px)' }}
                        />
                        <TextField
                            label="Wiek"
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                            sx={{ width: '15%' }}
                        />
                        <TextField
                            label="Adres e-mail"
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                        />
                        <TextField
                            label="Numer telefonu"
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                            sx={{ width: 'calc(60% - 5px)' }}
                        />
                        <TextField
                            color='success'
                            label='Curriculum Vitae'
                            variant='standard'
                            size='large'
                            fullWidth
                            type='file'
                            sx={{ width: 'calc(40% - 5px)' }}
                        />
                        <TextField
                            label='Subiektywna ocena umiejętności.'
                            color='success'
                            variant='standard'
                            size='large'
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </div>
                    <div className="buttons" style={send ? { display: 'none' } : {}}>
                        <div className="checkboxes">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Wyrażam zgodę na przetwarzanie moich danych osobowych przez GoodieCodes" />
                            </FormGroup>
                        </div>
                        <div className="buttons">
                            <Button
                                variant='text'
                                onClick={() => setShow(false)}
                            >
                                Anuluj
                            </Button>
                            <Button
                                variant='contained'
                                onClick={() => setSend(true)}
                                disableElevation
                            >
                                Wyślij
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="success">
                    <DoneIcon />
                </div>
            </div>
        </div >
    )
}