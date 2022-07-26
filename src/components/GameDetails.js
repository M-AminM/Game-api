import { useSelector } from "react-redux";
import styled from "styled-components";

const GameDetails = () => {
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <GameDetailsStyle>
      <div className="info">
        <h1>{game.name}</h1>
        <p>{game.rating}</p>
      </div>
      <div className="platforms">
        {game.platforms.map((data) => (
          <div>{data.platform.name}</div>
        ))}
      </div>
      <div className="media">
        <img src={game.background_image}/>
      </div>
      <div className="description">
        {game.description_raw}
      </div>
      <div className="gallery">
        {
            screen.results.map(data => (
                <img src={data.image}/>
            ))
        }
      </div>
    </GameDetailsStyle>
  );
};

const GameDetailsStyle = styled.div`
    img {
        width: 100%;
    }
`;

export default GameDetails;
