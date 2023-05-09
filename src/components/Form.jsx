import { useEffect, useState } from 'react'
import { Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';

import '../styles/form.css'

export default function ApplicationForm({ show, setShow }) {

    const [send, setSend] = useState(false)
    const [error, setError] = useState([])

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

    const handleSend = () => {
        const fullname = document.getElementById('fullname').value
        const age = document.getElementById('age').value
        const email = document.getElementById('email').value
        const number = document.getElementById('number').value
        const cv = document.getElementById('cv')
        const opinion = document.getElementById('opinion').value
        const agree = document.getElementById('agree').checked

        const array = []

        if (fullname == '' || fullname.length > 50)
            array.push(1)
        if (age == '' || isNaN(age) || parseInt(age) > 100 || parseInt(age) < 1)
            array.push(2)
        if (email == '' || !email.includes('@') || !email.includes('.') || email.length > 100)
            array.push(3)
        if (number == '' || number.length < 7 || number.length > 20)
            array.push(4)
        if (cv.files.length == 0)
            array.push(5)
        if (opinion == '' || opinion.length < 10)
            array.push(6)
        if (!agree)
            array.push(7)

        if (array.length == 0)
            setSend(true)
        else
            setError(array)


    }

    return (
        <div
            className="overlay print"
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
                            id='fullname'
                            label="Imię i nazwisko"
                            error={error.includes(1) ? true : false}
                            helperText={error.includes(1) ? 'Wpisz poprawne imię i nazwisko.' : ' '}
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                            sx={{ width: 'calc(85% - 10px)' }}
                        />
                        <TextField
                            id='age'
                            label="Wiek"
                            error={error.includes(2) ? true : false}
                            helperText={error.includes(2) ? 'Niepoprawny' : ' '}
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                            sx={{ width: '15%' }}
                        />
                        <TextField
                            id='email'
                            label="Adres e-mail"
                            error={error.includes(3) ? true : false}
                            helperText={error.includes(3) ? 'Wpisz swój poprawny adres email, w razie pytań będziemy na niego pisać.' : ' '}
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                        />
                        <TextField
                            id='number'
                            label="Numer telefonu"
                            error={error.includes(4) ? true : false}
                            helperText={error.includes(4) ? 'Wpisz swój poprawny numer telefonu.' : ' '}
                            color='success'
                            variant='standard'
                            size='large'
                            fullWidth
                            sx={{ width: 'calc(60% - 5px)' }}
                        />
                        <TextField
                            id='cv'
                            color='success'
                            error={error.includes(5) ? true : false}
                            helperText={error.includes(5) ? 'CV jest wymagane.' : ' '}
                            label='Curriculum Vitae'
                            variant='standard'
                            size='large'
                            fullWidth
                            type='file'
                            sx={{ width: 'calc(40% - 5px)' }}
                        />
                        <TextField
                            id='opinion'
                            label='Subiektywna ocena umiejętności.'
                            error={error.includes(6) ? true : false}
                            helperText={error.includes(6) ? 'Bez tego, twoje podanie odrzucimy automatycznie.' : ' '}
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
                                <FormControlLabel
                                    control={<Checkbox id='agree' />}
                                    label="Wyrażam zgodę na przetwarzanie moich danych osobowych"
                                />
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
                                onClick={() => handleSend()}
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