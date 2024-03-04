export default function Section({ data }) {
  return (
    <>
      <div>Dummy {data.name} Section for now</div>
      <code>{JSON.stringify(data)}</code>
    </>
  );
}
