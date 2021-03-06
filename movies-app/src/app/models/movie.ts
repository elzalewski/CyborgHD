import {Genre} from "./genre";

/**
 * @file Data model for Movie.
 * @author Eliane Zalewski
 */

export class Movie {
  public adult: boolean;
  public backdrop_path: string;
  public belongs_to_collection: string;
  public budget: number;
  public genre_ids: Array<Genre>;
  public homepage: string;
  public id: number;
  public imdb_id: string;
  public original_language: string;
  public original_title: string;
  public overview: string;
  public popularity: number;
  public poster_path: string;
  public production_companies: Array<any>;
  public production_countries: Array<any>;
  public release_date: string;
  public revenue: number;
  public runtime: number;
  public spoken_languages: Array<any>;
  public status: string;
  public tagline: string;
  public title: string;
  public video: boolean;
  public vote_average: number;
  public vote_count: number;
}
