  const items = [
    {
      userId: 1,
      id: 1,
      title: "i am hungry",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "what to eat",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "i want sushi",
      completed: false,
    },
  ];

export default function Gallery() {
  return (
    <div>
        <h1>Items</h1>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}
