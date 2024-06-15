import Item from "./Item";

export default async function Items({ data }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map((item) => (
        <Item data={item} />
      ))}
    </ul>
  );
}
