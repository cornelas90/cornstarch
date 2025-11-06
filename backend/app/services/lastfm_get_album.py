import os
import requests

API_KEY = os.getenv("LASTFM_API_KEY")
USER_AGENT=os.getenv("LASTFM_User")
BASE_URL = "http://ws.audioscrobbler.com/2.0/"
HEADERS = {
    "User-Agent": USER_AGENT
}
def call_lastfm(params: dict):
    params = params.copy()
    params.update({
        "api_key": API_KEY,
        "format": "json"
    })
    resp = requests.get(BASE_URL, headers=HEADERS, params=params)
    resp.raise_for_status()
    return resp.json()

# Example: get album info
data = call_lastfm({
    "method": "album.getInfo",
    "artist": "Radiohead",
    "album": "OK Computer"
})
print(data)
