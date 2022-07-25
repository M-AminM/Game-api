import styled from "styled-components";

const Game = ({ name, released, id, image }) => {
  return (
    <GameStyle>
      <div className="name">{name}</div>
      <p>{released}</p>
      <div>
        <img src={image} />
      </div>
    </GameStyle>
  );
};

const GameStyle = styled.div`
  min-height: 30vh;
  font-size: 1.5rem;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  .name, p {
    padding: 1rem;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    display: block;
    border-radius: 1rem;
  }
`;

export default Game;
