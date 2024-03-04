export default function Header({ brand, sections }) {
  return (
    <>
      <header>Hello, from {brand.name}</header>
      <ul>
        {sections.map((section, idx) => (
          <li key={`section_${idx}`}>{section}</li>
        ))}
      </ul>
    </>
  );
}
