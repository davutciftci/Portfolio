import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  const message = error instanceof Error ? error.message : String(error);

  return (
    <>
    
      <div className="mt-20">Uh Oh, something went wrong! {message}</div>
    </>
  );
}

export default ErrorPage;