import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers, ascending, decending } from '../redux/user/userSlice'
const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [isSort, setIsSort] = useState(false)

    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])

    const handleSorting = () => {
        isSort ? setIsSort(false) : setIsSort(true)
        if(isSort) {
            dispatch(decending(users))
        } else {
            dispatch(ascending(users))
        }
    }

    const refresh = () => {
        dispatch(getUsers());
    }

    return (
        <>
            <button onClick={() => handleSorting()}>{isSort ? 'Descending' : 'Ascending'}</button>
            <button onClick={() => refresh()}>Refresh</button>
            {!loading ? (
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>Fav</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <p>Loading</p>}
        </>
    )
}

export default Users