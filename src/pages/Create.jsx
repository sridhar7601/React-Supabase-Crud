import { useState } from "react";
import supabase from "../config/supabaseclient";

const Create = () => {
  const [title, settitle] = useState("");
  const [method, setmethod] = useState("");
  const [rating, setrating] = useState("");
  const [formerr, setformerr] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!title || !method || !rating) {
      setformerr("please fill form");
      return;
    }
    // console.log(title, method, rating);
    const { data, error } = await supabase.from("notes").insert([{ title, method, rating }]).select();
    if (error) {
      setformerr("please fill form");

    }
    if (data) {
      setformerr(null);
      colsole.log(data,"data")

    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <label htmlFor="method">Method :</label>
        <input
          type="text"
          id="method"
          value={method}
          onChange={(e) => {
            setmethod(e.target.value);
          }}
        />
        <label htmlFor="rating">Rating :</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => {
            setrating(e.target.value);
          }}
        />
        {formerr && <p>Error happened in the form</p>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
