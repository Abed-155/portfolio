import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <div className="h-full">
        <header className="bg-gray-700 md:py-5 py-3">
          <Nav />
        </header>
        <main className="w-11/12 m-auto">{children}</main>
      </div>
    </>
  );
}
