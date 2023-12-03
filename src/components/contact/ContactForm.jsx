import FormInput from "./FormInput";
import Button from "../utility/Button";
import { useState } from "react";

export default function ContactForm() {
  const [contact, setContact] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        handleChange={handleChange}
        label="Name"
        type="text"
        placeholder="write your name..."
      />
      <FormInput
        handleChange={handleChange}
        label="Email"
        type="email"
        placeholder="example@email.com"
      />
      <FormInput
        handleChange={handleChange}
        label="Subject"
        type="text"
        placeholder="write subject..."
      />
      <div className="flex flex-col">
        <label className="text-slate-500 font-semibold mb-1" htmlFor="msg">
          Message
        </label>
        <textarea
          className="border resize-none p-2 text-slate-500 h-24"
          name="msg"
          id="msg"
          placeholder="write your message..."
          onChange={handleChange}
        ></textarea>
      </div>
      <Button text="Send" type="submit" />
    </form>
  );
}
