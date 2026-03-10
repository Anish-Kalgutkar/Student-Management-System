import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, updateStudent, editStudent }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {

    if (editStudent) {
      setStudent(editStudent);
    }

  }, [editStudent]);

  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!student.name || !student.email || !student.age) {
      alert("All fields are required");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(student.email)) {
      alert("Invalid email format");
      return;
    }

    if (editStudent) {

      updateStudent(student);

    } else {

      addStudent(student);

    }

    setStudent({
      name: "",
      email: "",
      age: ""
    });

  };

  return (

    <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
      />

      <button type="submit">
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>

  );

}

export default StudentForm;