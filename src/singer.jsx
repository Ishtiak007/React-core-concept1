// const { name, id, nationality, Industry } = { details };
export default function Singer({ details }) {
  return (
    <div className="student">
      <h2>Name: {details.name}</h2>
      <h2>Id: {details.id}</h2>
      <h2>Nationality: {details.nationality}</h2>
      <h2>Industry: {details.Industry}</h2>
    </div>
  );
}
