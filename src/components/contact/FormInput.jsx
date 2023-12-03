export default function FormInput({ label, type, placeholder, handleChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-slate-500 font-semibold mb-1" htmlFor="name">
        {label}
      </label>
      <input
        className="border px-2 mb-2 py-1 text-slate-500"
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
