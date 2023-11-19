import { useRouteError } from "react-router-dom";

function errorPage() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    );
  } else {
    return <p>error.statusText</p>;
  }
}

export default errorPage;
