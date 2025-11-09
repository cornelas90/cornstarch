-- Ideas for future modelling

CREATE TABLE dim_album (
    album_sk SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    release_year DATE NOT NULL,
    discogs_id BIGINT NOT NULL
);

CREATE TABLE dim_artist (
    artist_sk SERIAL PRIMARY KEY,
    artist_name TEXT NOT NULL
);

CREATE TABLE dim_genre (
    genre_sk SERIAL PRIMARY KEY,
    genre TEXT NOT NULL,
    subgenre TEXT NOT NULL,
    description TEXT NULL,
    UNIQUE (genre, subgenre)
);

CREATE TABLE dim_mood (
    mood_sk SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT
);
