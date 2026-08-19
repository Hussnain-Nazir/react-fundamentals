function Greeting() {
  const name = 'Sarah';

  // This looks like HTML, but it's actually JSX.
  // You can drop JavaScript values into it using curly braces { }
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This paragraph was written using JSX.</p>
    </div>
  );
}

export default Greeting;