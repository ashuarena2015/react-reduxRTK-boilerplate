import React, { useEffect } from 'react';
import { fetchUsers } from '../../redux/reducers/users';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.usersReducer);

    useEffect(() => {
        console.log('useEffect');
        dispatch(fetchUsers());
    }, []);
    return (
        <>
            <p>Users</p>
            <ul>
                {users?.map((user, index) => {
                    return <li key={index}>{user.name}</li>
                })}
            </ul>
        </>
    )
}

export default Users;
