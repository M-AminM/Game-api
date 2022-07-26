import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gameAction";
import Game from "../components/Game";
import styled from "styled-components";
import GameDetails from "../components/GameDetails";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const { upcoming, popular, newGames, search } = useSelector(
    (state) => state.game
  );

  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  return (
    <GameList>
      {pathname && <GameDetails />}
      {search.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <GamesDetail>
            {search.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </GamesDetail>
        </div>
      ) : (
        ""
      )}

      <h2>Upcoming Games</h2>
      <GamesDetail>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesDetail>
      <h2>Popular Games</h2>
      <GamesDetail>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesDetail>
      <h2>New Games</h2>
      <GamesDetail>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesDetail>
    </GameList>
  );
};

const GameList = styled.div`
  padding: 0rem 5rem;
  h2 {
    padding: 2rem 0rem;
    font-size: 3rem;
  }
`;

const GamesDetail = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
