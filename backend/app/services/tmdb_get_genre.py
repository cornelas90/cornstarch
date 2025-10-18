import os
import requests
#from app.db.session import SessionLocal
#from app.db.models import DimGenre

TMDB_BEARER_TOKEN = os.getenv("TMDB_BEARER_TOKEN")
url = "https://api.themoviedb.org/3/genre/movie/list?language=en"
headers = {"Authorization": f"Bearer {TMDB_BEARER_TOKEN}"}

response = requests.get(url, headers=headers)
genres = response.json()["genres"]

#session = SessionLocal()
#for g in genres:
#    session.add(DimGenre(genre_id=g["id"], name=g["name"]))
#session.commit()
#session.close()