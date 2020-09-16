import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/main.module.css';

// show component
const Show = (props) => {

    // init api url
    const apiUrl = "//localhost:8000/api/products/" + props.id;

    // set productInfo
    const [productInfo, setProductInfo] = useState({});

    // use hook
    useEffect(() => {

        // get list of all products using api end point
        axios({
            method:'get',
            url:apiUrl 
        //success 
        }).then((res) => {
            
            // check for errors
            if(res.data.errors){
                
                // set
                setProductInfo({errors:res.data.errors})
            
            // set product to state
            }else{
                
                // set
                setProductInfo(res.data.results)
            
            }

        }).catch((err) => {
            console.log(err)
        })

    },[apiUrl])

    // return
    return(
        <div className={styles.showWrapper}>
            {(productInfo && productInfo.title) ? 
                <div><h1 className={styles.infoHeader}>{productInfo.title}</h1>
                <p><span className={styles.showSpan}>Price:</span> {productInfo.price}</p>
                <p className={styles.showDescription}>{productInfo.description}</p></div> : ""}
            {(productInfo.errors) ? <p className="text-danger mb-0">{productInfo.errors}</p> : ""}
        </div>
    )

}

// export
export default Show;