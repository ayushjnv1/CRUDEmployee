import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { Container } from "reactstrap";
import Imenu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployee from "./components/AddEmployee";
import Home from "./components/Home";
import ViewEmployee from "./components/ViewEmployee";


function App() {
  const btnHandler = () => {
    toast("This is my first message");
  };
  return (
    <div>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Container>
          <div>

            <Imenu />
          </div>
          <div>
            <Routes>

              <Route path="/" element={<Home />} exact />
              <Route path="/add-employee" element={<AddEmployee />} exact />
              <Route path="/view-employee" element={<ViewEmployee />} exact />
            </Routes>
          </div>



        </Container>
      </Router>

    </div >
  );
}

export default App;
