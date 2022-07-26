import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import detailAction from "../actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ name, released, id, image }) => {
  const dispatch = useDispatch();

  const detailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(detailAction(id));
  };
  return (
    <GameStyle onClick={detailHandler}>
      <Link to={`/game/${id}`}>
        <div className="name">{name}</div>
        <p>{released}</p>
        <div>
          <img src={image} />
        </div>
      </Link>
    </GameStyle>
  );
};

const GameStyle = styled.div`
  min-height: 30vh;
  font-size: 1.5rem;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  .name,
  p {
    margin-top: 0.8rem;
    text-align: center;
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
