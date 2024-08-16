import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin";

export const backend_url = 'http://localhost:9000';
export const currency = 'Rs.';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <Admin />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
