import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function ImageUpload() {
  const FileUpload = (e) => {
    console.log(e.target.files);
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
