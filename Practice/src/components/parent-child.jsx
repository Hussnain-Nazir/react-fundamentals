// Parent-Child Relationship between Components

// Child Component
function ChildCard({ title }) {
  return <div className="card"><h3>{title}</h3></div>;
}

// Parent Component - it passes data down to the child using props
function ParentPage() {
  return (
    <div>
      <h1>My Dashboard</h1>
      <ChildCard title="Sales" />
      <ChildCard title="Inventory" />
    </div>
  );
}

export default ParentPage;