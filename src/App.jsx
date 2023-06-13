import "./App.css";
import SignUpForm from "../components/signupForm";
import Hotels from "../components/Hotels";

export default function App() {
  return (
    <>
      <div className="App">
        <Hotels />
        <SignUpForm />
      </div>
    </>
  );
}
