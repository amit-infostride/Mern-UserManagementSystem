import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
  const initialState = {
    companyName: "",
    phone: "",
    email: "",
    location: "",
    link: "",
    description: "",
  };
  const [crud, setCrud] = useState(initialState);


  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    async function postCrud() {
      try {
        await post("http://localhost:8080/api/cruds", crud);
        navigate(`/cruds`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postCrud();
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate("/cruds");
  }
  
  return (
    <div className="container" style={{ maxWidth: "400px" , background:"wheat", marginTop:'-40px',padding:"10px",borderRadius:"20px"}}>
      <h1>Create User</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ fontWeight: "bold" }}>Company Name*</label>
          <input
            name="companyName"
            type="text"
            required
            value={crud.companyName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />

        <div className="form-group">
          <label style={{ fontWeight: "bold" }}>Phone*</label>
          <input
            name="phone"
            type="text"
            maxLength={10}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
            value={crud.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <small style={{ fontSize: "10px", fontStyle: "italic", color: "grey" }}>NOTE: Number cannot exceed 10 digits</small>
        <br />
        <div className="form-group">
          <label style={{ fontWeight: "bold" }}>Email*</label>
          <input
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
            required
            value={crud.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <small style={{ fontSize: "10px", fontStyle: "italic", color: "grey" }}>Format: abc@gmail.com</small>
        <br />
        <div className="form-group">
          <label style={{ fontWeight: "bold" }}>Location*</label>
          <input
            name="location"
            type="text"

            value={crud.location}
            onChange={handleChange}
            className="form-control"
          />
        </div><br />


        <div className="form-group">
          <label style={{ fontWeight: "bold" }}>Description*</label>
          <textarea
            name="description"
            row="10"
            required
            value={crud.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <small style={{ fontSize: "10px", fontStyle: "italic", color: "grey" }}>Describe about the website</small><br /><br />

        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CrudAdd;
