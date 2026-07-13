'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify } from 'react-icons/fa';
import styles from './SpotifyWidget.module.scss';

export default function SpotifyWidget() {
  const [track, setTrack] = useState({
    name: 'Loading...',
    artist: 'Spotify',
    album: '',
    artUrl: null,
    isPlaying: false,
    elapsed: '',
    total: '',
  });

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch('/api/spotify');
        const data = await res.json();
        
        if (data.title && !data.title.includes('Not Playing') && !data.message) {
          setTrack({
            name: data.title,
            artist: data.artist,
            album: data.album,
            artUrl: data.albumImageUrl,
            isPlaying: data.isPlaying,
            elapsed: '', // LastFM doesn't provide precise progress
            total: '',
          });
        } else {
           // Fallback to static track if nothing is found yet
           setTrack({
             name: 'Khayal',
             artist: 'Talwiinder',
             album: 'Khayal',
             artUrl: null, 
             isPlaying: false,
             elapsed: '1:45',
             total: '3:12',
           });
        }
      } catch (err) {
        console.error("Error fetching music data", err);
        setTrack({
            name: 'Khayal',
            artist: 'Talwiinder',
            album: 'Khayal',
            artUrl: null, 
            isPlaying: false,
            elapsed: '1:45',
            total: '3:12',
        });
      }
    };

    fetchSpotify();
    
    // Poll every 10 seconds to keep it live
    const interval = setInterval(fetchSpotify, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={styles.widgetWrapper}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 4.9, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.widget}>
        {/* Ambient glow */}
        <div className={styles.glowOrb} />

        {/* Header */}
        <div className={styles.widgetHeader}>
          <div className={styles.headerLeft}>
            <FaSpotify className={styles.spotifyIcon} />
            <span className={styles.headerLabel}>{track.isPlaying ? 'Now playing' : 'Last played'}</span>
          </div>
          {track.isPlaying && (
            <div className={styles.liveIndicator}>
              <span className={styles.liveDot} />
              <span className={styles.liveText}>Live</span>
            </div>
          )}
        </div>

        {/* Track info */}
        <div className={styles.trackInfo}>
          <div className={styles.albumArt}>
            {track.artUrl ? (
              <img
                src={track.artUrl}
                alt={track.album}
                className={styles.albumImage}
              />
            ) : (
              <AlbumPlaceholder />
            )}
          </div>
          <div className={styles.trackDetails}>
            <div className={styles.trackName}>{track.name}</div>
            <div className={styles.trackArtist}>{track.artist}</div>
          </div>
          {/* Equalizer */}
          {track.isPlaying && (
            <div className={styles.equalizer}>
              <span className={styles.eqBar} />
              <span className={styles.eqBar} />
              <span className={styles.eqBar} />
              <span className={styles.eqBar} />
            </div>
          )}
        </div>

        {/* Progress */}
        <div className={styles.progressBar}>
          <div className={styles.progressTrack}>
            <div 
               className={styles.progressFill} 
               style={{ 
                 animation: track.isPlaying ? 'progressSlide 8s linear infinite' : 'none',
                 width: track.isPlaying ? '62%' : '100%' 
               }} 
            />
          </div>
          {(track.elapsed || track.total) && (
             <div className={styles.progressTime}>
               <span className={styles.timeText}>{track.elapsed}</span>
               <span className={styles.timeText}>{track.total}</span>
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* Mini album art placeholder — abstract gradient */
function AlbumPlaceholder() {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="albumGrad" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="50%" stopColor="#16213e" />
          <stop offset="100%" stopColor="#0f3460" />
        </linearGradient>
      </defs>
      <rect width="52" height="52" rx="8" fill="url(#albumGrad)" />
      {/* Vinyl ring detail */}
      <circle cx="26" cy="26" r="14" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none" />
      <circle cx="26" cy="26" r="8" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
      <circle cx="26" cy="26" r="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}
