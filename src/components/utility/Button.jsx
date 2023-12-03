export default function Button({ text, type }) {
  return (
    <button
      className="px-4 py-1 mt-4 w-full cursor-pointer bg-blue-600 text-white rounded text-lg"
      type={type}
    >
      {text}
    </button>
  );
}
