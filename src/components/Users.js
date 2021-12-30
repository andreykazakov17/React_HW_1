import React from "react";

let users = [
        { id: 1, firstName: "John", lastName: "Doe", age: 24, job: "Developer"},
        { id: 2, firstName: "Kate", lastName: "Reton", age: 22, job: "Chef"},
        { id: 3, firstName: "Melissa", lastName: "Lout", age: 41, job: "Developer"},
        { id: 4, firstName: "Ann", lastName: "Willington", age: 23, job: "Driver"},
        { id: 5, firstName: "Michel", lastName: "Plank", age: 55, job: "Developer"},
        { id: 6, firstName: "Bob", lastName: "Palanski", age: 32, job: "Waiter"},
        { id: 7, firstName: "Jack", lastName: "Daniels", age: 23, job: "Developer"},
        { id: 8, firstName: "Poul", lastName: "Torn", age: 65, job: "Cashier"},
];

function User(props) {

    let firstName = props.user.firstName;
    let lastName = props.user.lastName;
    let fullName = `${firstName} ${lastName}`;
    let age = props.user.age;
    let job = props.user.job;

    return (
        <li>
            firstName: {firstName}, 
            lastName: {lastName}, 
            fullName: {fullName}, 
            age: {age + 5}, 
            job: {job}
        </li>
    )
}

export const UserList = () => {

    return(
        <ol>
            {users.map((user) => <User user={user}/>)}
        </ol>
    )
}