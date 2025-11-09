import os
import requests

API_KEY = os.getenv("LASTFM_API_KEY")
USER_AGENT=os.getenv("LASTFM_User")
BASE_URL = "http://ws.audioscrobbler.com/2.0/"
HEADERS = {
    "User-Agent": USER_AGENT
}
def get_album_info(artist: str, album: str, username: str = None) -> dict:
    params = {
        "method": "album.getInfo",
        "artist": artist,
        "album": album,
        "api_key": API_KEY,
        "format": "json"
    }

    try:
        response = requests.get(BASE_URL, headers=HEADERS, params=params)
        response.raise_for_status()
        return response.json()
    except requests.HTTPError as e:
        print(f"HTTP error: {e} - {response.text}")
        return {}
    except requests.RequestException as e:
        print(f"Request failed: {e}")
        return {}

