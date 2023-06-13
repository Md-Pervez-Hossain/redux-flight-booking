import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/lws-logo.svg";
import { bookingInfo } from "../redux/bookingReducer/actions";
import DisplayBookingForm from "./DisplayBookingForm";
const BookingForm = () => {
  const data = useSelector((state) => state.data);
  console.log(data);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const commonForm = e.target;
    const from = commonForm.from.value;
    const to = commonForm.to.value;
    const date = commonForm.date.value;
    const guests = commonForm.guests.value;
    const ticketClass = commonForm.ticketClass.value;
    const booking = {
      from,
      to,
      date,
      guests,
      ticketClass,
    };
    dispatch(bookingInfo(booking));
  };

  return (
    <div>
      <header id="header">
        <div className="container">
          <h2>Logo</h2>
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
      <section>
        <div>
          <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="first-hero lws-inputform"
              >
                <div className="des-from">
                  <p>Destination From</p>
                  <div className="flex flex-row">
                    <img src="./img/icons/Frame.svg" alt="" />
                    <select
                      className="outline-none px-2 py-2 w-full"
                      name="from"
                      id="lws-from"
                      required
                    >
                      <option value="" hidden>
                        Please Select
                      </option>
                      <option>Dhaka</option>
                      <option>Sylhet</option>
                      <option>Saidpur</option>
                      <option>Coxs Bazar</option>
                    </select>
                  </div>
                </div>

                <div className="des-from">
                  <p>Destination To</p>
                  <div className="flex flex-row">
                    <img src="./img/icons/Frame.svg" alt="" />
                    <select
                      className="outline-none px-2 py-2 w-full"
                      name="to"
                      id="lws-to"
                      required
                    >
                      <option value="" hidden>
                        Please Select
                      </option>
                      <option>Dhaka</option>
                      <option>Sylhet</option>
                      <option>Saidpur</option>
                      <option>Coxs Bazar</option>
                    </select>
                  </div>
                </div>

                <div className="des-from">
                  <p>Journey Date</p>
                  <input
                    type="date"
                    className="outline-none px-2 py-2 w-full date"
                    name="date"
                    id="lws-date"
                    required
                  />
                </div>

                <div className="des-from">
                  <p>Guests</p>
                  <div className="flex flex-row">
                    <img src="./img/icons/Vector (1).svg" alt="" />
                    <select
                      className="outline-none px-2 py-2 w-full"
                      name="guests"
                      id="lws-guests"
                      required
                    >
                      <option value="" hidden>
                        Please Select
                      </option>
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                    </select>
                  </div>
                </div>

                <div className="des-from !border-r-0">
                  <p>Class</p>
                  <div className="flex flex-row">
                    <img src="./img/icons/Vector (3).svg" alt="" />
                    <select
                      className="outline-none px-2 py-2 w-full"
                      name="ticketClass"
                      id="lws-ticketClass"
                      required
                    >
                      <option value="" hidden>
                        Please Select
                      </option>
                      <option>Business</option>
                      <option>Economy</option>
                    </select>
                  </div>
                </div>

                <button
                  disabled={data.length >= 3}
                  className="addCity"
                  type="submit"
                  id="lws-addCity"
                >
                  <svg
                    width="15px"
                    height="15px"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span className="text-sm">Book</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        {data?.map((bookingInfo) => (
          <DisplayBookingForm bookingInfo={bookingInfo}></DisplayBookingForm>
        ))}
      </section>
    </div>
  );
};

export default BookingForm;
