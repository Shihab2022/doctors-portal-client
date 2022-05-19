import React from "react";

const DoctorsRow = ({ doctor, refetch, index }) => {
  const { name, image, specialty } = doctor;
  return (

    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label for="delete-confirm-modal" class="btn btn-xs btn-error">
          Delete
        </label>
      </td>
    </tr>
    // onClick={() => setDeletingDoctor(doctor)}
  );
};

export default DoctorsRow;
