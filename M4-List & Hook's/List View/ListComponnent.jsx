import './ListComponent.css';

const ListComponnent = () => {
  let arr = [
    "Use Array.map",
    "Not a for loop",
    "Give each item a unique key",
    "Avoid using array index as the key"
  ];

  let listdata = arr.map((i, index) => {
    return <li key={index}>{i}</li>;
  });

  return (
    <div className="list-container">
      <h3>The &quot;React Way&quot; to Render a List</h3>
      <ul>{listdata}</ul>
    </div>
  );
};

export default ListComponnent;
