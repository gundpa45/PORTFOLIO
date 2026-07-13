import { NextResponse } from 'next/server';

const apiKey = process.env.LASTFM_API_KEY;
const username = process.env.LASTFM_USERNAME;

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!apiKey || !username) {
      return NextResponse.json({ isPlaying: false, message: 'Last.fm credentials missing' });
    }

    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();

    if (!data.recenttracks || !data.recenttracks.track || data.recenttracks.track.length === 0) {
      return NextResponse.json({ isPlaying: false, message: 'No tracks found' });
    }

    const track = data.recenttracks.track[0];
    
    // Last.fm adds an "@attr" property with "nowplaying": "true" if the song is currently live
    const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
    
    const title = track.name;
    const artist = track.artist['#text'];
    const album = track.album['#text'];
    const songUrl = track.url;
    
    // Get the highest quality image available
    let albumImageUrl = null;
    if (track.image && track.image.length > 0) {
      const imageObj = track.image.find(img => img.size === 'extralarge') || track.image.find(img => img.size === 'large') || track.image[track.image.length - 1];
      albumImageUrl = imageObj['#text'] || null;
      // Last.fm sometimes returns an empty string for missing art
      if (albumImageUrl === "") albumImageUrl = null;
    }

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
      progress_ms: 0,
      duration_ms: 0 // Last.fm doesn't provide precise duration/progress in recenttracks
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: 'Failed to fetch Last.fm data' }, { status: 500 });
  }
}
