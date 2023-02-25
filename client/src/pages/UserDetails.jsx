import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleGetUsers } from '../apiCalls';
import "../styles/users.css";

export default function UserDetails() {

    const [load, setLoad] = useState(false);
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('')
    const [page, setPage] = useState(1);

    useEffect(() => {
        handleGetUsers(load, setLoad, setUsers, gender, page);
    }, [gender, page])

    useEffect(() => { !users.length && handleGetUsers(load, setLoad, setUsers) }, [])


    return (
        <div className='users'>
            <ToastContainer></ToastContainer>
            <Link to="/"><button className='btn btn-11'>Go Back</button></Link>
            {
                load && <h2>Loading ....</h2>
            }
            {
                !load && (<div className="userDetails">
                    <div className="opt">
                        <select className='btn btn-14' onChange={(e) => setGender(e.target.value)}>
                            <option value="">Gender</option>
                            <option className='btn' style={{ color: "black" }} value="male">Male</option>
                            <option className='btn' style={{ color: "black" }} value="female">Female</option>
                        </select>
                        <button className='btn btn-14' style={{ display: page == 1 ? "none" : "" }} disabled={page == 1} onClick={() => setPage(page - 1)}>{"<<"} prev</button>
                        <span style={{ fontSize: "30px" }}>{page}</span>
                        <button className='btn btn-14' onClick={() => setPage(page + 1)}>next {">>"}</button>
                    </div>
                    <div className='grid'>
                        {users.map((e, i) => (<div key={i} className='card'>
                            <img src={e?.picture?.large} alt="" />
                            <div >
                                <h4>{e?.name?.title + " " + e?.name?.first + " " + e?.name.last}</h4>
                                <h4>age: {e?.dob?.age}</h4>
                                <h4>{e?.email}</h4>
                                <h4>location {e?.location?.city}</h4>
                            </div>
                        </div>))}
                    </div>
                </div>)
            }
        </div>
    )
}
