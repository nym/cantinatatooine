import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import {
  useGetPersonListQuery,
  useGetPlanetListQuery,
  useGetFilmListQuery,
} from "../api/apiSlice";
import Person from "../app/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useDecoratedPerson(uri: string) {
  // Basically return a person that also has some metadata for display purposes
  // from Planets and Films

  // load the list of people, we will select the one we want below
  let {
    data: people,
    error: personError,
    isLoading: isPersonLoading,
  } = useGetPersonListQuery({});
  // load all films because it's a relatively small dataset and will be cached
  const {
    data: films,
    error: filmsError,
    isLoading: isFilmsLoading,
  } = useGetFilmListQuery({});
  // load all planets because it's a relatively small dataset and will be cached
  const {
    data: planets,
    error: planetsError,
    isLoading: isPlanetsLoading,
  } = useGetPlanetListQuery({});

  // ui loading / error states for all three queries
  const isLoading = isPersonLoading || isFilmsLoading || isPlanetsLoading;
  const error = personError || filmsError || planetsError;

  // return values
  let decoratedPerson: Person | null | undefined = null;
  let homeworldName = null;
  let filmList: string[] = [];

  if (!isLoading && !error && uri && people && planets && films) {
    const person: any = people.results.find((p: any) => {
      return p.url === uri;
    });

    decoratedPerson = person;
    if (decoratedPerson) {
      if (planets && planets.results) {
        const homeworld = planets.results.find(
          (p: any) => person && p.url === person.homeworld
        );
        if (homeworld) homeworldName = homeworld.name || "n/a";
      }
      filmList = person.films.map((film: string) => {
        const match: string = films.results.find(
          (f: any) => film === f.url
        ).title;
        return match;
      });
    }
  }

  return {
    data: decoratedPerson,
    error,
    isLoading,
    homeworldName,
    filmList,
  };
}
