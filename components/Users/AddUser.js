import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState(''); // başlangıç değeri null
    const [enteredAge, setEnteredAge] = useState(''); // başlangıç değeri null
    const [error, setError] = useState();

    const addUserHandler = (event) => {  // form submit edilince çalışır parametre olarak event i alıyo
        event.preventDefault();  // sayfayı yenilemeyi önleyici
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid values'
            });
            return;
        }
        if (+enteredAge < 1) {  // enteredAge i number a çevirip kontrol et
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age > 0'
            });
            return;
        }
        console.log("Butona basıldı");
        console.log(enteredUsername,enteredAge);

        props.onAddUser(enteredUsername, enteredAge);  // onAddUser propsuna state değerlerini gönder

        setEnteredUsername('');  // state değerlerini sıfırla
        setEnteredAge('');       
    }; 

    const usernameChangeHandler = (event) => {  // username inputuna değer girilince çalıştır
        setEnteredUsername(event.target.value);  // enteredUsername state ini güncelle
    };

    const ageChangeHandler = (event) => {  // age inputuna değer girilince çalıştır
        setEnteredAge(event.target.value);  // enteredAge state ini güncelle
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;