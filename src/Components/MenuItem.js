function MenuItem(props) {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <p>{props.price}</p>
      </div>
    </>
  );
}

export default MenuItem;
