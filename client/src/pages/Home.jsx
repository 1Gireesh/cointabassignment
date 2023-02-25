import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { handleDelete, handleFetch } from '../apiCalls';

export default function Home() {

    const [deleteLoad, setdeleteLoad] = useState(false);
    const [fetchLoad, setFetchLoad] = useState(false);






    return (
        <div className='home'>
            <ToastContainer position="top-right"
                closeOnClick
                rtl={false}
                className="error"
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"></ToastContainer>
            <div>
                <h2>Click on Fetch Users to fetch 50 data</h2>
                <button className="btn btn-14" onClick={() => handleFetch(fetchLoad, setFetchLoad)}>{fetchLoad ? "loading ..." : "Fetch"}</button>
            </div>

            <div>
                <h2>Click on Delete Users to delete entire data</h2>
                <Popup className='Modal' trigger={<button className="btn btn-5"> {deleteLoad ? "deleteLoading ..." : "delete"} </button>} modal>
                    {close => (
                        <div className="modal">
                            <h2 style={{ color: "black" }} className="header"> Clicking on Delete will erase all the data. Are you sure ?</h2>
                            <div className="flex">
                                <button className="close" onClick={close}>&times;</button>
                                <button className="btn btn-5" onClick={() => { handleDelete(deleteLoad, setdeleteLoad); close(); }}>delete</button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>

            <div>
                <h2>Click on User Details to check details</h2>
                <Link to="/users"><button className='btn btn-11'>Users</button></Link>
            </div>


        </div>
    );
}
