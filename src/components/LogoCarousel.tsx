import React from 'react';
import { motion } from 'framer-motion';
const LogoCarousel = () => {
  // Array of 5 company logos with their styles
  const logoData = [{
    name: 'Digitech',
    fontFamily: 'Inter',
    fontWeight: '600'
  }, {
    name: 'Netdot',
    fontFamily: 'Inter',
    fontWeight: '700'
  }, {
    name: 'Sparkweb',
    fontFamily: 'Inter',
    fontWeight: '800',
    hasIcon: true,
    iconType: 'rectangle'
  }, {
    name: 'Pixelpath',
    fontFamily: 'Inter',
    fontWeight: '600',
    hasIcon: true,
    iconType: 'square'
  }, {
    name: 'CodeLine',
    fontFamily: 'Inter',
    fontWeight: '700'
  }];

  // Triple the array for seamless looping
  const tripleLogos = [...logoData, ...logoData, ...logoData];
  return <div style={{
    backgroundColor: '#000000'
  }} className="w-full overflow-hidden mt-20 py-0">
      <motion.div className="flex" initial={{
      opacity: 0,
      x: '0%'
    }} animate={{
      opacity: 1,
      x: '-50%'
    }} transition={{
      opacity: {
        duration: 0.5,
        delay: 0.5
      },
      x: {
        duration: 15,
        ease: 'linear',
        repeat: Infinity,
        delay: 0.5
      }
    }} style={{
      gap: '20px'
    }}>
        {tripleLogos.map((logo, index) => <div key={index} className="flex-shrink-0" style={{
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingTop: '20px',
        paddingBottom: '20px',
        background: 'linear-gradient(180deg, rgba(2, 7, 26, 0.04) 0%, rgba(2, 7, 26, 0.16) 100%)',
        boxShadow: '0px 4px 8px 1px rgba(244, 244, 254, 0.25) inset',
        borderRadius: '100px',
        outline: '1px rgba(255, 255, 255, 0.20) solid',
        outlineOffset: '-1px',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }}>
            <div style={{
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          display: 'inline-flex'
        }}>
              {logo.hasIcon && <div style={{
            width: logo.iconType === 'rectangle' ? '28.26px' : '17.48px',
            height: logo.iconType === 'rectangle' ? '32px' : '17.48px',
            background: '#9CA3AF'
          }} />}
              <div style={{
            textAlign: 'center',
            color: '#9CA3AF',
            fontSize: '24px',
            fontFamily: logo.fontFamily,
            fontWeight: logo.fontWeight,
            lineHeight: '32px',
            wordWrap: 'break-word'
          }}>
                {logo.name}
              </div>
            </div>
          </div>)}
      </motion.div>
    </div>;
};
export default LogoCarousel;