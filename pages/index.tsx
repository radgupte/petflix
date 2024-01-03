import { GetServerSidePropsContext } from 'next';
// import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import Navbar from '@/components/navbar';
import Billboard from '@/components/billboard';
import MovieList from '@/components/movieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavourites';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
