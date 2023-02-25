import axios from "axios";
import { toast } from "react-toastify";

export async function handleDelete(deleteLoad, setdeleteLoad) {
    if (deleteLoad) return toast.promise("wait for completion of previous request");
    setdeleteLoad(true);
    try {
        let { data } = await axios.delete("/deleteusers")
        toast.success(data);
        setdeleteLoad(false)
    } catch (e) {
        setdeleteLoad(false)
        toast.error(e.message);
    }
    finally {
        setdeleteLoad(false);
    }
}

export async function handleFetch(fetchLoad, setFetchLoad) {
    if (fetchLoad) return toast.promise("wait for completion of previous request");
    setFetchLoad(true);
    try {
        let { data } = await axios.get("/setusers")
        toast.success(data);
        setFetchLoad(false)
    } catch (e) {
        setFetchLoad(false)
        toast.error(e.message);
    }
    finally {
        setFetchLoad(false);
    }
}

export async function handleGetUsers(fetchLoad, setFetchLoad, setUsers, gender = "", page = 1) {
    if (fetchLoad) return toast.promise("wait for completion of previous request");
    setFetchLoad(true);
    try {
        let { data } = await axios.get(`/getusers?page=${page}&gender=${gender}&limit=10`);
        setFetchLoad(false)
        console.log(data)
        if (data.length == 0)
            toast("Please Go Back and Fetch users to see users");
        setUsers(data);
    } catch (e) {
        setFetchLoad(false)
        toast.error(e.message);
    }
    finally {
        setFetchLoad(false);
    }
}