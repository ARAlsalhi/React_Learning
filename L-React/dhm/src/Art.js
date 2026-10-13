export default function Art({
  fname,
  lname,
  age,
  children = "Add content here",
}) {
  return (
    <>
      <div
        style={{
          padding: "15px",
          margin: "15px",
          background: "white",
          color: "black",
          borderRadius: "20px",
          display: "inline",
        }}
      >
        <h1>{fname}</h1>
        <h2>{lname}</h2>
        <h2>{age}</h2>
        <hr></hr>
        <p>{children}</p>
      </div>
    </>
  );
}
