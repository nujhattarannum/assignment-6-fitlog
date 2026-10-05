import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-lg">

        {/* 404 */}
        <p className="text-lime-400 font-black text-7xl sm:text-8xl">
          404
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-black uppercase mt-4">
          Workout Not Found
        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
          Looks like this page doesn&apos;t exist.
          Head back to FitLog and find a workout to get moving.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="
            btn
            mt-7
            bg-[#ccff00]
            hover:bg-[#b8e600]
            border-none
            text-black
            font-extrabold
            uppercase
            text-xs
            tracking-wider
            rounded-xl
            px-6
          "
        >
          Go to workouts
        </Link>

      </div>

    </div>
  );
};

export default NotFound;