import React from 'react';
import Person from './Person';

const List = ({ people, handleDelete }) => people.map(person => <Person key={person.id} handleDelete={handleDelete} {...person} />);

export default List;
