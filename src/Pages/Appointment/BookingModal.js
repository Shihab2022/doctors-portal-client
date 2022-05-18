import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment;
  const [user] = useAuthState(auth);
  // console.log(user.email, user.name, user.displayName);
  const formateData = format(date, "PP");


  const handleSubmit = (e) => {
    const slot = e.target.slot.value;
    // console.log( slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formateData,
      slot,
      patient: user?.email,
      patientName: user?.displayName,
      phone: e.target.phone.value,
    };
    // to close the modal

    fetch("http://localhost:5000/booking", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if(data.success){
          toast(`Wow  your appointment added successfully on ${formateData} at ${slot}`);
        }
        else{
          toast.error(`Already have an appointment ${formateData} at ${data.booking?.slot}`)
        }
        
      });
    setTreatment(null);
    e.preventDefault();
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl text-primary ">{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 justify-items-center mt-5">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />

            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots.map((slot,index) => (
                <option
                key={index}
                value={slot}
                 >{slot}</option>
              ))}
            </select>

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="SUBMIT"
              // onClick={handleSubmit}
              className="btn btn-accent w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
