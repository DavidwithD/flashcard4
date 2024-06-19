import { useState } from "react";

export default function TestPage() {
  return (
    <div>
      <ParentElement />
    </div>
  );
}

function ParentElement() {
  const [data, setData] = useState([1, 2, 3]);
  const [show, setShow] = useState(true);
  const [state2, setState2] = useState(1);

  return (
    <div>
      <h4>data</h4>
      {data.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
      <button
        onClick={() => {
          console.log("reset Parent state");
          setData(data.map((d) => d + 1));
        }}
      >
        reset Parent state
      </button>
      <button onClick={() => setState2(state2 + 1)}>increase state2</button>

      <button
        onClick={() => {
          const ret = data.shift();
          console.log("cut element", ret);
          setData([...data]);
        }}
      >
        shift
      </button>
      <button onClick={() => setShow(true)}>show</button>
      <button onClick={() => setShow(false)}>hide</button>

      <h4>children</h4>
      {show &&
        data.map((d, i) => (
          <ChildrenElement key={i} parentState={d} parentState2={state2} />
        ))}
    </div>
  );
}

function ChildrenElement({ parentState, parentState2 }: any) {
  const [childrenState, setChildrenState] = useState(parentState);

  console.log("rerender", parentState);
  return (
    <div>
      <p>argument:{parentState}</p>
      <span>childrenState:{childrenState}</span>
      <button
        onClick={() => {
          setChildrenState(childrenState + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}
