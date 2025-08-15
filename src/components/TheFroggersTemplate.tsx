import React from 'react';

interface TheFroggersTemplateProps {
  children?: React.ReactNode;
}

const TheFroggersTemplate: React.FC<TheFroggersTemplateProps> = ({ children }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        position: 'absolute',
        width: '1920px',
        height: '1280px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#070F12',
        border: '1px solid #FFFFFF'
      }}
    >
      {/* BG_02 - Hintergrund Container */}
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '1440px',
          height: '1100px',
          left: '240px',
          top: '90px',
          background: '#363636',
          opacity: 0.19,
          border: '2px solid #606060',
          borderRadius: '21px',
          zIndex: 1
        }}
      >
      </div>

      {/* Frogger_speechBubble_01 */}
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '170.41px',
          height: '170.41px',
          left: '270px',
          top: '54px',
          background: 'url(/images/Frogger_Special_Edition_01.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'normal',
          border: '2px solid #A2A2A2',
          borderRadius: '200px 200px 0px 200px',
          zIndex: 10
        }}
      >
      </div>

      {/* Ribbit, Ribbit From Pond to Pixel Hey! */}
      <div
        style={{
          position: 'absolute',
          width: '330.67px',
          height: '23.75px',
          left: '450px',
          top: '160px',
          fontFamily: 'Outfit',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '15px',
          lineHeight: '19px',
          color: '#D80000',
          zIndex: 10
        }}
      >
        Ribbit, Ribbit From Pond to Pixel Hey!
      </div>

      {/* We are 10,000 Froggers. One Blockchain. Endless Hops */}
      <div
        style={{
          position: 'absolute',
          width: '489.33px',
          height: '23.75px',
          left: '450px',
          top: '180px',
          fontFamily: 'Outfit',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '15px',
          lineHeight: '19px',
          color: '#86B700',
          zIndex: 10
        }}
      >
        We are 10,000 Froggers. One Blockchain. Endless Hops
      </div>

      {/* Frogs in the Metaverse — Because Why Not? */}
      <div
        style={{
          position: 'absolute',
          width: '408px',
          height: '47.5px',
          left: '450px',
          top: '200px',
          fontFamily: 'Outfit',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '15px',
          lineHeight: '19px',
          color: '#0054EF',
          zIndex: 10
        }}
      >
        Frogs in the Metaverse — Because Why Not?
      </div>

      {/* youtube-01 */}
      <div
        style={{
          position: 'absolute',
          width: '35.78px',
          height: '35.78px',
          left: '1525px',
          top: '42px',
          background: 'url(/images/youtube-square-red-logo-15975.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
      </div>

      {/* twitter-x-01 */}
      <div
        style={{
          position: 'absolute',
          width: '35.78px',
          height: '35.78px',
          left: '1570px',
          top: '42px',
          background: 'url(/images/twitter-x-logo-blue-square-round-20857.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
      </div>

      {/* instagram-01 */}
      <div
        style={{
          position: 'absolute',
          width: '35.78px',
          height: '35.78px',
          left: '1614px',
          top: '42px',
          background: 'url(/images/instagram-square-logo-15976.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
      </div>

      {/* Logo_Halo_01 */}
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '75px',
          height: '75px',
          left: '1577px',
          top: '120px',
          background: 'url(/images/Logo_Halo_01.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid #767676',
          borderRadius: '90px',
          zIndex: 10
        }}
      >
      </div>

      {/* Hauptinhalt */}
      {children}
    </div>
  );
};

export default TheFroggersTemplate;
