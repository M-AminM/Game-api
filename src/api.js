const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
console.log(lastYear);
console.log(currentDate);
const popular_games = `games?key=228d121a4b5e44feafeab22654f58fc8&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=228d121a4b5e44feafeab22654f58fc8&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=228d121a4b5e44feafeab22654f58fc8&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=228d121a4b5e44feafeab22654f58fc8`;
export const screenShotsURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=228d121a4b5e44feafeab22654f58fc8`;
export const searchGameURL = (game_name) => `${base_url}games?key=228d121a4b5e44feafeab22654f58fc8&search=${game_name}&page_size=9`;