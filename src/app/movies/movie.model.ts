export interface IMovie {
    belongs_to_collection: object;
    genres: object[];
    id: number;
    imbd_id: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: string[];
    release_date: string;
    status: string;
    title: string;
    vote_average: number;
    vote_count: number;
    videos: object;
}
