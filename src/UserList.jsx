import axios from "axios"
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';

export default function UserList() {

    const [listOfUser ,setListOfUser ]=useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setListOfUser(res.data)
                
           
            })
            .catch(err=>console.error(err))

    }, [])
    return (
        <div >
            {
                listOfUser.map((el,i) => (<Card key={i} style={{ width: '18rem',marginBottom:"20px"}}>
                    <Card.Body>
                        <Card.Title> user:{el.id } {el.name} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> {el.email} </Card.Subtitle>
                        <Card.Text>
                            company name :
                            {el.company.name}

                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted"> {el.phone} </Card.Subtitle>
                        
                    </Card.Body>
                </Card>))
            }
        </div>

    )
}