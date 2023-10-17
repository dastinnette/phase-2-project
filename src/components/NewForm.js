import React, { useState } from "react";
import { useOutletContext,useNavigate } from 'react-router-dom';
const initialState = {
    title: "",
    hdurl: "",
    explanation: "",
    date: ""
}

function NewForm() {

  const { onNewSnapshot } = useOutletContext();
  const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState) 
    const { date, explanation, hdurl, title } = formData

    function handleChange(event) {
        const { name, value } = event.target
    
        setFormData((currentStateFormData) => {
          return { 
            ...currentStateFormData,
            [name]: value,
          }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    
        fetch("http://localhost:6001/snapshots", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((resp) => resp.json())
          .then((newSnapshot) => {
            onNewSnapshot(newSnapshot)
            setFormData(initialState)
            navigate("/Gallery")
          })
      }

    return(
        <div>
            <h2>New Snapshot</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Snapshot title" 
                    value={title} onChange={handleChange}
                />
                <input type="text" name="hdurl" placeholder="Image URL" 
                    value={hdurl} onChange={handleChange}
                />
                <input type="text" name="explanation" placeholder="Explanation" 
                    value={explanation} onChange={handleChange}
                />
                <input type="text" name="date" placeholder="Date" 
                    value={date} onChange={handleChange}
                />
                <button type="submit">Add Snapshot</button>
            </form>
        </div>
    )
}

export default NewForm;