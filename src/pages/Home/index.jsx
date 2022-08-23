import { useState } from "react"
import { useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import api from "../../services/api"
import { Card, List } from "./style";
import './style.css'

const Home = () => {

    const [ninjas, setNinjas] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName]     = useState("");

    useEffect(() => {
        api.get('/characters', {
            params: {
                
                offset: 0,
                limit: 100,
                name: searchParams.get('name')

            }
        }).then((response) => setNinjas(response.data))

    }, [searchParams]);

    function handleSubmit(event){
        event.preventDefault()
        setSearchParams({ name })
        console.log(name)
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={event => setName(event.target.value)} placeholder="Digite o personagem desejado."/>
            <button type="submit" >Buscar</button>
        </form>
        <List>
             {ninjas.map(ninja => 
             <Card key={ninja.id}>
                <Link to={`/shinobis/${ninja.id}`}>
                <span>{ninja.name}</span>
                <img src={ninja.images[0]} alt="ninjaNaruto" />                
                </Link>
             </Card>)}
        </List>  
        </>
        
    )
}

export default Home