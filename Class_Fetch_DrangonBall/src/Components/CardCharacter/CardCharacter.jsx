const CardCharacter = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="card-body">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardCharacter;