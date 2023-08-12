import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Drivers() {
    let [drivers, setDrivers] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/drivers')
            .then(res => {
                console.log(res.data)
                setDrivers(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    // let getDrivers = async () => {
    //     let strDrivers = await axios.get("http://127.0.0.1:5000/drivers");
    //     console.log(strDrivers.data);
    //     setDrivers(strDrivers.data);
    // }

    let displayDrivers = () => {
        // alert();
        let arrDrivers = []
        for (const iterator of drivers) {
            arrDrivers.push(iterator.firstName, iterator.lastName, iterator.email, iterator.phone)
        }
        return (<>
            <div className='row'>
                <div className='col col -2'>

                </div>

            </div>
        </>)
    }
    if (drivers) {
        return (<><div>{
            displayDrivers()
        }</div></>)
    }
}

export default Drivers;