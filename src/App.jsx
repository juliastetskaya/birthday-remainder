import React, { useState } from 'react';
import List from './List';
import data from './data';

const App = () => {
    const [people, setPeople] = useState(data);

    const handleDelete = (id) => setPeople(people.filter(person => person.id !== id));
    const handleClear = () => setPeople([]);

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} handleDelete={handleDelete} />
                <button type="button" onClick={handleClear}>clear all</button>
            </section>
        </main>
    );
};

export default App;
