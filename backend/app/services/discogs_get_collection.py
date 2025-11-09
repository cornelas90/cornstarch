import discogs_client
import requests
import os
from lastfm_get_album import get_album_info
DISCOGS_CLIENTNAME= os.getenv("DISCOGS_CLIENTNAME")
DISCOGS_TOKEN=os.getenv("DISCOGS_TOKEN")

d = discogs_client.Client(user_agent=DISCOGS_CLIENTNAME
                          ,user_token=DISCOGS_TOKEN)

me=d.identity()
print(me)

for item in me.collection_folders[0].releases:
    release = item.release 
    raw = release.data
    print("Title:", release.title)
    print("ID:", release.id)
    print("Discogs Link:", f"https://www.discogs.com/release/{release.id}")
    print("Year:", release.year)
    print("Artists:", [artist.name for artist in release.artists])
    print("Labels:", [label.name for label in release.labels])
    print("Genres:", release.genres)
    print("Styles:", release.styles)

    for track in release.tracklist:
        print(f"{track.position} - {track.title} ({track.duration})")
    
    print("Country:", release.country)
    print("------")
    #get_album_info()
# Discogs link example: 'https://www.discogs.com/release/1234567'
#collection = d.