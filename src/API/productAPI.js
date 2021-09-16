import {useState, useEffect} from 'react'

const api = '/api/ticket'

export function ProductAPI() {

    const [product, setProduct] = useState([])
    useEffect(() =>{
        const getProduct = async () => {
            const url = `https://face.ox-sys.com/variations?size=10&page=1`;
            const token = localStorage.getItem("token");
            const response = await fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + token,
              },
            });
            
            const data = await response.json();
          };
          getProduct();
    }, [])

    return {
        product: [product, setProduct]
    }
}

