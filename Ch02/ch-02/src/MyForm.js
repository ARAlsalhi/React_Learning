import { useState } from "react";

export default function MyForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    Email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: "",
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <lable>Name: </lable>
      <input
        value={formInput.name}
        onChange={(event) => {
          setFormInput({ ...formInput, name: event.target.value });
        }}
      />

      <hr />
      <label>Email: </label>
      <input
        value={formInput.Email}
        onChange={(event) => {
          setFormInput({ ...formInput, Email: event.target.value });
        }}
      />

      <hr />
      <label>Age: </label>
      <input
        value={formInput.age}
        onChange={(event) => {
          setFormInput({ ...formInput, age: event.target.value });
        }}
      />

      <hr />
      <lable>are u student </lable>
      <input
        type="checkbox"
        checked={formInput.isStudent}
        onChange={(event) => {
          setFormInput({ ...formInput, isStudent: event.target.checked });
        }}
      />
      <hr />
      <label>generalInfo: </label>
      <textarea
        value={formInput.generalInfo}
        onChange={(event) => {
          setFormInput({ ...formInput, generalInfo: event.target.value });
        }}
      />

      <hr></hr>

      <select
        vlaue={formInput.country}
        onChange={(event) => {
          setFormInput({ ...formInput, country: event.target.value });
        }}
      >
        <option>KSA</option>
        <option>US</option>
        <option>UK</option>
      </select>

      <hr></hr>
      <div>
        <input
          value="techer"
          type="radio"
          name="state"
          checked={formInput.status === "teacher"}
          onChange={(event) => {
            setFormInput({ ...formInput, status: event.target.value });
          }}
        />
        teacher
        <input
          value="student"
          type="radio"
          name="state"
          checked={formInput.status === "student"}
          onChange={(event) => {
            setFormInput({ ...formInput, status: event.target.value });
          }}
        />
        student
        <input
          value="book"
          type="radio"
          name="state"
          checked={formInput.status === "book"}
          onChange={(event) => {
            setFormInput({ ...formInput, status: event.target.value });
          }}
        />
        book
      </div>
      <hr></hr>
      <button>Sumbit</button>
    </form>
  );
}
