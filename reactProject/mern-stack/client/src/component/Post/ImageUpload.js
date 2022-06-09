import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function ImageUpload() {
  const FileUpload = (e) => {
    console.log(e.target.files);
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    // for (const keyValue of formData) console.log(keyValue);
    axios.post("/api/post/image/upload", formData);
  };
  return (
    <div>
      <Form.Control
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={(e) => FileUpload(e)}
      />
    </div>
  );
}

export default ImageUpload;
