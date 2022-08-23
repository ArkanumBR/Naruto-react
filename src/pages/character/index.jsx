import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Container } from "./style";


const Character = () => {

    const [ninja, setNinja] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        api.get(`/characters/${id}`)
        .then((response) => {
            console.log(response);
            setNinja(response.data)
        }
        )       
           
    }, [id]);
    

    return (
        <Container>
        {
            ninja ? 
            <>
                <h1>{id} - {ninja.name}</h1>
                <img src={ninja.images[0]} alt={ninja.name}/>
                {
                    ninja.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                }
            </>
            :
            <div>Loading...</div>
        }
        </Container>
    )
}

export default Character