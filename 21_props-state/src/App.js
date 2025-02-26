import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import Counter from "./components/Counter";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import SyntheticEvent from "./components/SyntheticEvent";
import PororoObj from "./components/practice/PororoObj";
import {
  HandlerEx,
  ChangeColor,
  Disappear,
  ChangeEmoji,
} from "./components/practice/EventPractice";
import { ClassPrac, FunctionPrac } from "./components/practice/Practice";
import EntirePractice from "./components/practice/EntirePractice";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/Alphabet";
import MapPractice2 from "./components/practice/MapPractice2";

function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 5000, number: 3 },
    { name: "apple", krPrice: 20000, number: 15 },
  ];
  return (
    <div>
      {/* <h2>Props 사용</h2> */}
      {/* <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        //fontColor="white"
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다.</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다.</span>
      </FunctionProps4> */}
      {/* <h2>State</h2>
      <h3>class형 state</h3>
      <ClassState />
      <h3>함수형 state</h3>
      <FunctionState />
      <br />
      <h2>Practice</h2>
      <ClassPrac />
      <FunctionPrac />

      <h2>event</h2>
      <SyntheticEvent />
      <Counter /> */}

      {/* <h2>Event Practice</h2>
      <HandlerEx />
      <ChangeColor />
      <Disappear />
      <ChangeEmoji />
      <PororoObj /> */}

      <EntirePractice />
      <h2>실습문제!!</h2>
      <PropsMap arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 />
      <Alphabet />
      <MapPractice2 />
    </div>
  );
}

export default App;
