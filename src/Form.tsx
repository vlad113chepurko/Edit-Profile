import React from 'react';
import { useState } from 'react';

const Form: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [about, setAbout] = useState('');
    const [counter, setCounter] = useState(0);
    const [status, setStatus] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        if (firstName === '' || lastName === '' || age === '' || about === '') {
            e.preventDefault();
            alert('Please fill all the fields');
            return;
        } else {
            e.preventDefault();
            setFirstName(firstName);
            setLastName(lastName);
            setAge(age);
            setAbout(about);
            setStatus(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        if (id === 'firstName') {
            setFirstName(value);
        } else if (id === 'lastName') {
            setLastName(value);
        } else if (id === 'age') {
            setAge(value);
        } else if (id === 'about') {
            if (value.length > 500) return;
            setAbout(value);
            setCounter(value.length);
        }
    };

    return (
        status ? (
            <main className='profile-container'>
                <header>
                    <h1>Edit Profile</h1>
                </header>
                <form onSubmit={handleSubmit} action="" >
                    <label htmlFor="firstName">Enter your first name</label>
                    <input
                        maxLength={20}
                        minLength={2}
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={handleChange} />

                    <label htmlFor="lastName">Enter your last name</label>
                    <input
                        maxLength={20}
                        minLength={2}
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleChange} />

                    <label htmlFor="age">Enter you age</label>
                    <input
                        max={100}
                        type="number"
                        id="age"
                        value={age}
                        onChange={handleChange} />

                    <label htmlFor="about">Enter about your self: {counter}/500</label>
                    <textarea
                        maxLength={500}
                        minLength={10}
                        id="about"
                        value={about}
                        onChange={handleChange}>
                    </textarea>

                    <button type="submit">Submit</button>
                </form>
            </main>
        ) : (
            <main className='profile-container-edit'>
                <header>
                    <h1>Profile</h1>
                </header>
                <h3>Your first name: {firstName}</h3>
                <span></span>

                <h3>Your last name: {lastName}</h3>
                <span></span>

                <h3>Your age: {age}</h3>
                <span></span>

                <h3>About You</h3>
                <article>
                    <p>{about}</p>
                </article>
                <button onClick={() => setStatus(true)}>Edit</button>
            </main>
        )
    );
}

export default Form;