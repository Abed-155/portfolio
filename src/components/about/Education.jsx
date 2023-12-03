import Title from "../utility/Title";

const data = [
  {
    id: "123",
    exam: "MBA",
    department: "Accounting",
    year: "2019",
    result: "3.03 out of 4.00",
  },
  {
    id: "124",
    exam: "BBA(pass)",
    department: "Accounting",
    year: "2018",
    result: "3.10 out of 4.00",
  },
  {
    id: "125",
    exam: "HSC",
    department: "Business Studies",
    year: "2015",
    result: "2.92 out of 5.00",
  },
  {
    id: "126",
    exam: "SSC",
    department: "Humanities",
    year: "2013",
    result: "3.63 out of 5.00",
  },
];

export default function Education() {
  return (
    <>
      <Title title="Education" />
      <div>
        <ul className="flex flex-col gap-2 md:grid md:grid-cols-2">
          {data.map((item) => (
            <li key={item.id} className="border p-2 rounded ">
              <p>Name of exam: {item.exam}</p>
              <p>Department: {item.department}</p>
              <p>Year: {item.year}</p>
              <p>Result: {item.result}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
