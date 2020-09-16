import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/main.module.css';
import { Link } from '@reach/router';

// list all products
const ListAll = (props) => {

    // init api url
    const apiUrl = "//localhost:8000/api/products";

    // set list
    const [listAll, setListAll] = useState({})

    // use hook
    useEffect(() => {

        // get list of all products using api end point
        axios({
            method:'get',
            url:apiUrl 
        //success 
        }).then((res) => {

            // set list
            setListAll(res.data.results);
            
        }).catch((err) => {
            console.log(err)
        })

    },[props]);

    // return
    return(
        <div className={styles.listAllWrapper}>
            <h1 className="text-center mb-3">All Products</h1>
            <ul className="list-group">
                {Object.entries(listAll).map(([key, item]) =>{
                    return( 
                        <li className="list-group-item" key={key}>
                            <Link to={`/${item._id}`}>{item.title}</Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
    
}


// export 
export default ListAll;