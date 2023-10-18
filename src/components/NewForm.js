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
      <Form className="input-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Snapshot title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Snapshot title" value={title} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="hdurl" placeholder="Image URL" value={hdurl} onChange={handleChange}/>
          <img src={hdurl} className="img-preview"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Explanation</Form.Label>
          <Form.Control as="textarea" rows={3} name="explanation" placeholder="Explanation" value={explanation} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" name="date" placeholder="Date" value={date} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default NewForm;