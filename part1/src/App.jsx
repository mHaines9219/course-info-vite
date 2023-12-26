const App = () => {
  const Course = () => {
    return <h1>Half Stack application development</h1>;
  };
  const Part1 = () => {
    return (
      <>
        <p>Fundamentals of React</p>
        <p>10</p>
      </>
    );
  };

  const Part2 = () => {
    return (
      <>
        <p>Using props to pass data</p>
        <p>7</p>
      </>
    );
  };

  const Part3 = () => {
    return (
      <>
        <p>State of a component</p>
        <p>13</p>
      </>
    );
  };

  return (
    <div>
      <Course />
      <p>
        <Part1 />
      </p>
      <p>
        <Part2 />
      </p>
      <p>
        <Part3 />
      </p>
      <p></p>
    </div>
  );
};

export default App;
