import React from 'react';

const BookingForm = () => {
    return (
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" placeholder="Origin" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" placeholder="Destination" className="input input-bordered" />
                        </div>

                        <div className='flex gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <input type="text" placeholder="From" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">To</span>
                            </label>
                            <input type="text" placeholder="To" className="input input-bordered" />
                        </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Start Booking</button>
                        </div>
                    </div>
                </div>
    );
};

export default BookingForm;