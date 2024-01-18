"use client"
import { useState } from "react"

const CreatePerson = () => {
    const [person, setPerson] = useState({firstname: '', lastname: ''})
    const postPerson = async () => {
        try {
            
        } catch (error) {

        }
    }


    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setPerson(prevState => {
            return {
              ...prevState,
              firstname: event.target.value
            };
          });
      }
    
  return (
    <div>
        <form action="postPerson" method="post">
        <input onChange={handleChange} type="text" placeholder="Firstname" name="firstname"/>
        <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default CreatePerson