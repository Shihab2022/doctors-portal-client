import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Sherad/Spinner';
import DeletingDoctorModal from './DeletingDoctorModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
   const [deletingDoctor,setDeletingDoctor]=useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h2>Manage doctors : {doctors.length}</h2>
            <div class='overflow-x-auto'>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor,index)=><DoctorsRow
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                         
                            setDeletingDoctor={setDeletingDoctor}
                            ></DoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>

            {
deletingDoctor && <DeletingDoctorModal
refetch={refetch}
deletingDoctor={deletingDoctor}
setDeletingDoctor={setDeletingDoctor}
></DeletingDoctorModal>
            }
        </div>
    );
};

export default ManageDoctors;