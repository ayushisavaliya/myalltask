import React from 'react';

function Table(props){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="p-3">id</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Signup Date\</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user=>(
                      <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.fullName}</td>
                      <td>{user.fullMobileNo}</td>
                      <td>{user.email}</td>
                      <td>{user.signupDate}</td>
                  </tr>
                ))}
              
            </tbody>
        </table>


    );
}

export default Table;