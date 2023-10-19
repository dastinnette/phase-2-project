import React, { useState } from "react";
import { useOutletContext,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
        <Form className="input-form" onSubmit={handleSubmit}>
          <h1 className="input-form-header">Submit your discovery to NASA's APOD collection!</h1>
          <Form.Group className="mb-3 description-color">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" name="hdurl" placeholder="Image preview will appear below" value={hdurl} onChange={handleChange}/>
            <img src={hdurl} alt={title} className="img-preview"/>
          </Form.Group>
          <Form.Group className="mb-3 description-color">
            <Form.Label>Snapshot title</Form.Label>
            <Form.Control type="text" name="title" placeholder="e.g. Stunning Galaxies from the Orion Cluster..." value={title} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3 description-color">
            <Form.Label>Explanation</Form.Label>
            <Form.Control as="textarea" rows={3} name="explanation" placeholder="e.g. What is the story behind this photo?" value={explanation} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3 description-color">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" name="date" placeholder="YYYY-MM-DD" value={date} onChange={handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
}

export default NewForm;