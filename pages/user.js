import React, {useEffect} from 'react';
import axios from "axios";

const User = () => {

    useEffect(async () => {
        await axios.get('/api/user').then(r => {
            console.log(r.data);
        })
    }, []);

    return (
        <div>

        </div>
    );
};

export default User;
