import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function StudentTable({ students, deleteStudent, setEditStudent }) {

  const downloadExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(data, "students.xlsx");

  };

  return (

    <div>

      <button onClick={downloadExcel}>
        Download Excel
      </button>

      <table style={{
  borderCollapse:"collapse",
  width:"60%",
  marginTop:"10px"
}}>
        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {students.map((s) => (

            <tr key={s.id}>

              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>

              <td>

                <button
                  onClick={() => setEditStudent(s)}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteStudent(s.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default StudentTable;