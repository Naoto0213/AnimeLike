import { BrowserRouter } from "react-router-dom";
import Router from "./containers/Router";
import Header from "./components/common/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}
