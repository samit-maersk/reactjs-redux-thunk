import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers, ascending, decending, setAsFav } from '../redux/user/userSlice'
const Users = () => {
    const {users, loading, favUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [isSort, setIsSort] = useState(false)
    const [isFav, setisFav] = useState(false)
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

    const handleFav = (id) => {
        setisFav(!isFav)
        dispatch(setAsFav(id))
    }

    return (
        <>
            <button onClick={() => handleSorting()}>{isSort ? 'Descending' : 'Ascending'}</button>
            <button onClick={() => refresh()}>Refresh</button>
            {loading ? <p>Loading</p> : (
                <>
                    <input type="text"></input>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>Fav</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <input type="checkbox" ></input>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    )
}

export default Users