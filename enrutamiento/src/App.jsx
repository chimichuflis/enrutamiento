import { Outlet, Link } from "react-router-dom";
import { API } from "./Api";
export default function App() {
  console.log(API.getMovies());
  return (
    <>
      <h1>Esto es el root</h1>

      <Link to={"/movies/asdasd"}>Ir a peliculas</Link>
      <Outlet />
    </>
  );
}
