import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers,sort } from '../redux/user/userSlice'
const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [isSort, setIsSort] = useState(false)

    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])

    const handleSorting = () => {
        isSort ? setIsSort(false) : setIsSort(true)
    }
    return (
        <>
            <a href='#' onClick={() => handleSorting()}>{isSort ? 'original' : 'a-z'}</a>
            <ul>
                {loading ? <li>Loading...</li> : users.map((user) => <li key={user.id}>{user.id}, {user.name}</li>)}
            </ul>
        </>
    )
}

export default Users