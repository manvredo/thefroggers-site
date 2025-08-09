'use client';

// Video Landing Page - Root (/) 
import { Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export default function VideoLanding() {
  const scrollToHome = () => {
    window.location.href = '/home';
  };

  const scrollToMinting = () => {
    window.location.href = '/work'; // Mint page
  };

  const openYouTube = () => {
    window.open('https://youtube.com/watch?v=YOUR_VIDEO_ID', '_blank');
  };

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/"
        title="theFroggers - Enter the Frogger World"
        description="Welcome to theFroggers - Unique NFT Collection. Enter the digital frog universe."
        image={`/api/og/generate?title=${encodeURIComponent("theFroggers NFT")}`}
      />

      {/* Video Landing Page - Fullscreen */}
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      }}>
        
        {/* Video Background - Debug Version */}
        <video
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 1
          }}
          autoPlay
          muted
          loop
          playsInline
          controls
        >
         <source src="/videos/theFroggers_Intro.mp4" type="video/mp4" />
          <p style={{color: 'white'}}>Your browser does not support the video tag.</p>
        </video>

        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2
        }} />

        {/* Content over Video */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '600px'
        }}>
          
          {/* Logo/Title */}
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 900,
            margin: '0 0 2rem 0',
            background: 'linear-gradient(45deg, #00d4ff, #ff00ff, #ffff00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
          }}>
            theFroggers
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
          }}>
            Leap into the craziest pond in Web3
          </p>
          
          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            
            {/* Enter Frogger World Button */}
            <button
              onClick={scrollToHome}
              style={{
                background: 'linear-gradient(45deg, #00d4ff, #ff00ff)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '30px',
                fontSize: '1.2rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                minWidth: '280px'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.6)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(0px)';
                target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
              }}
            >
              🐸 Enter Frogger World
            </button>

            {/* Mint NFT Button */}
            <button
              onClick={scrollToMinting}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '18px 40px',
                borderRadius: '30px',
                fontSize: '1.2rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                minWidth: '280px'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'rgba(255, 255, 255, 0.25)';
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'rgba(255, 255, 255, 0.15)';
                target.style.transform = 'translateY(0px)';
                target.style.boxShadow = 'none';
              }}
            >
              ⚡ Mint Your Frogger
            </button>

            {/* Watch Full Video Button */}
            <button
              onClick={openYouTube}
              style={{
                background: 'transparent',
                color: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '12px 30px',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(5px)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center',
                minWidth: '200px'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = 'white';
                target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = 'rgba(255, 255, 255, 0.8)';
                target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              ▶️ Watch Full Video
            </button>

          </div>
        </div>

        {/* Skip to Main Site Link */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          zIndex: 2
        }}>
          <button
            onClick={scrollToHome}
            style={{
              background: 'transparent',
              color: 'rgba(255, 255, 255, 0.6)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)'
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.color = 'white';
              target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.color = 'rgba(255, 255, 255, 0.6)';
              target.style.background = 'transparent';
            }}
          >
            Skip Intro →
          </button>
        </div>

      </div>
    </>
  );
}

