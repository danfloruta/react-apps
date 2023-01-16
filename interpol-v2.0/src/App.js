import "./App.css";
import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CheckTool from "./pages/CheckTool";
import MyReports from "./pages/MyReports";
import Details from "./pages/Details";
import Modal from "./components/Modal";
import ModalUpdate from "./components/ModalUpdate";
import ModalForNav from "./components/ModalForNav";

function App() {
  const modal = useSelector((state) => state.reports.reportsModalIsOpen);
  const navModal = useSelector((state) => state.check.openNavModal);
  // console.log(navModal);

  const updateModal = useSelector(
    (state) => state.reports.reportsUpdateModalOpen
  );
  return (
    <div className="App">
      <BrowserRouter>
        {modal && <Modal />}
        {updateModal && <ModalUpdate />}
        <NavBar />
        {navModal && <ModalForNav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/check" element={<CheckTool />} />
          <Route path="/myreports" element={<MyReports />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
