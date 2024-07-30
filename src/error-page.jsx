import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
