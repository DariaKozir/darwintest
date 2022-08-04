import {Route, Routes} from "react-router-dom";
import GetAQuote from "../pages/GetAQuote";
import MakeAClaim from "../pages/MakeAClaim";
import FaqS from "../pages/FaqS";
import Contact from "../pages/Contact";
import MyAccount from "../pages/MyAccount";

export const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<GetAQuote/>} />
        <Route path='/make-a-claim' element={<MakeAClaim/>} />
        <Route path='/faqs' element={<FaqS/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/account' element={<MyAccount/>} />
    </Routes>
)