import CustomHook from "./components/CustomHook";
import Form from "./components/Form";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemo1 from "./components/UseMemo1";
import UseMemoObj from "./components/UseMemoObj";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("hook 배워보기");
  return (
    <>
      {/* <UseMemo1 />
      <UseMemoObj />
      <UseCallbackEx1 />
      <UseCallbackEx2 />
      <UseReducer />*/}
      <CustomHook />
      <Form />
    </>
  );
}

export default App;
