import React, { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import studentsData from "./data";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editStudent, setEditStudent] = useState(null);
  

  useEffect(() => {
    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1000);
  }, []);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now()
    };
    setStudents([...students, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    const updatedList = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );

    setStudents(updatedList);
    setEditStudent(null);
  };

  const deleteStudent = (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      const filtered = students.filter((s) => s.id !== id);
      setStudents(filtered);
    }

  };
  const filteredStudents = students.filter((s) =>
  s.name.toLowerCase().includes(search.toLowerCase()) ||
  s.email.toLowerCase().includes(search.toLowerCase())
);

  return (

    <div style={{padding:"20px"}}>

      <h2 className="title">Students Management Table</h2>
      <input
  className="search"
  type="text"
  placeholder="Search student..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editStudent={editStudent}
      />

      {loading ? (

        <p>Loading Students...</p>

      ) : (

        <StudentTable
          students={filteredStudents}
          deleteStudent={deleteStudent}
          setEditStudent={setEditStudent}
        />

      )}

    </div>

  );

}

export default App;