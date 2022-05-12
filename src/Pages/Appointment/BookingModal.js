import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate ,setTreatment}) => {
  const { name, slots,_id } = treatment;
  const handleSubmit=e=>{
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
    
    // to close the modal
    setTreatment(null);
      e.preventDefault();
  }
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
          <form className="grid grid-cols-1 gap-3 justify-items-center mt-5">
            <input
              type="text"
              value={format(selectedDate, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name='name'
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name='number'
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name='email'
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="SUBMIT"
              onClick={handleSubmit}
              className="btn btn-accent w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
