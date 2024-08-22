import CurrentPath from "#/components/client/current-path-com";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-3xl font-bold text-red-500 xl:text-6xl">
        404 Not Found
      </h2>
      <CurrentPath />
      <p className="py-2 text-gray-600 2xl:w-5/6 text-center">
        Could not find the requested resource. If you think this is a mistake,
        please contact the developer.
      </p>
      <div className="my-6">
        <Link
          href="/"
          className="rounded-lg bg-slate-600 px-4 py-3 text-white transition duration-200 ease-in-out hover:bg-slate-600/20 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
