import { useSelector } from "react-redux";
import styled from "styled-components";

import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import { useHistory } from "react-router-dom";

const GameDetails = () => {
  const history = useHistory();

  const { game, screen } = useSelector((state) => state.detail);

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} />);
      } else {
        stars.push(<img key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const exitHandler = (e) => {
    const element = e.target;
    if(element.classList.contains("card")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  }

  return (
    <GameDetailsStyle className="card" onClick={exitHandler}>
      <Detail>
        <Info>
          <div className="info">  
            <h1>{game.name}</h1>
            <p>Rating: {game.rating}</p>
            <div className="stars">{getStars()}</div>
          </div>
          <Platform>
            {game.platforms.map((data) => ( 
              <img key={data.platform.id} src={getPlatform(data.platform.name)} />
            ))}
          </Platform>
        </Info>
        <Media>
          <img src={game.background_image} />
        </Media>
        <Decription>{game.description_raw}</Decription>
        <Gallery>
          {screen.results.map((data) => (
            <img src={data.image} />
          ))}
        </Gallery>
      </Detail>
    </GameDetailsStyle>
  );
};

const GameDetailsStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled.div`
  width: 80%;
  position: absolute;
  background: white;
  border-radius: 1rem;
  left: 8%;
  padding: 1rem 2rem;
  img {
    width: 100%;
  }
`;
const Decription = styled.div`
  margin: 2rem 7rem;
  font-size: 1.3rem;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 7rem;
  p {
    font-size: 1.5rem;
  }
  .stars {
    width: 4rem;
    display: flex;
    padding-bottom: 4rem;
  }
`;
const Platform = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    margin-left: 1rem;
    width: 3rem;
  }
`;
const Media = styled.div`
  margin: 2rem 7rem;
`;
const Gallery = styled.div`
  margin: 2rem 7rem;
`;

export default GameDetails;
