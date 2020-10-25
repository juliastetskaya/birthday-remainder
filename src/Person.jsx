import React from 'react';

const Person = ({ name, id, image, age, handleDelete }) => (
    <article className="person">
        <img src={image} alt={name} />
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
        <button
            type="button"
            className="btn-delete"
            onClick={() => handleDelete(id)}
        >delete</button>
    </article>
);

export default Person;
