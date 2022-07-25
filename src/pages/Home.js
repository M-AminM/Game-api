import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gameAction";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, []);

    return(
        <div>
        </div>
    )
}
export default Home;