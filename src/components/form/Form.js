import React, { useState } from 'react';
import '../form/Form.css';

function Form({ onFormSubmit, onAdd, onUpdate, onDelete }) {
  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: ""
  });

  const [formErrors, setFormErrors] = useState({
    userIdError: "",
    idError: "",
    titleError: "",
    bodyError: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    validateField(name, value);
  }

  function validateField(fieldName, value) {
    let fieldError = "";
    switch (fieldName) {
      case "userId":
        fieldError = value ? "" : "User ID is required.";
        break;
      case "id":
        fieldError = value ? "" : "Post ID is required.";
        break;
      case "title":
        fieldError = value ? "" : "Title is required.";
        break;
      case "body":
        fieldError = value ? "" : "Body is required.";
        break;
      default:
        break;
    }
    setFormErrors({ ...formErrors, [`${fieldName}Error`]: fieldError });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formIsValid()) {
      onFormSubmit(post); // Pass the form data to the callback function
      clearForm();
    } else {
      console.log("Form has validation errors.");
    }
  }

  function formIsValid() {
    return (
      post.userId !== "" &&
      post.id !== "" &&
      post.title !== "" &&
      post.body !== ""
    );
  }

  function clearForm() {
    setPost({
      userId: "",
      id: "",
      title: "",
      body: ""
    });
    setFormErrors({
      userIdError: "",
      idError: "",
      titleError: "",
      bodyError: ""
    });
  }

  return (
    <div className="center-container">
      <form>
        <div className="form-group">
          <label htmlFor="userid">User ID:</label><br />
          <input
            type="text"
            id="userid"
            name="userId"
            value={post.userId}
            onChange={handleChange}
          />
          {formErrors.userIdError && (
            <div className="error">{formErrors.userIdError}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="id">Post ID:</label><br />
          <input
            type="text"
            id="id"
            name="id"
            value={post.id}
            onChange={handleChange}
          />
          {formErrors.idError && (
            <div className="error">{formErrors.idError}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label><br />
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          {formErrors.titleError && (
            <div className="error">{formErrors.titleError}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="body">Body:</label><br />
          <textarea
            id="body"
            name="body"
            value={post.body}
            onChange={handleChange}
          ></textarea>
          {formErrors.bodyError && (
            <div className="error">{formErrors.bodyError}</div>
          )}
        </div>

        <div className="button-group">
          <button type="button" onClick={() => onAdd(post)}>Add</button>
          <button type="button" onClick={() => onUpdate(post)}>Update</button>
          <button type="button" onClick={() => onDelete(post)}>Delete</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
