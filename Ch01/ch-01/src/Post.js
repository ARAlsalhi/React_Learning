export default function Post({
  postName = "No title",
  postBody = "No content",
}) {
  return (
    <div
      style={{
        padding: "10px",
        border: "5px solid #45e51d",
        margin: "25px",
      }}
    >
      <h1>{postName}</h1>

      <hr></hr>
      <p>{postBody}</p>
    </div>
  );
}
