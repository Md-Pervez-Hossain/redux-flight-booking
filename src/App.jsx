import BookingForm from "./Components/BookingForm/BookingForm";
import { Provider } from "react-redux";
import { store } from "./Components/redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        {" "}
        <BookingForm></BookingForm>
      </Provider>
    </div>
  );
}

export default App;
