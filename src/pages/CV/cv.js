import React from 'react'

import cv from './WalterDev.pdf'
import './cv.css'
export default function CV() {
  return (
    <div className="cvContainer">
      <iframe title="cv" src={cv} height="100%" width="100%" allowFullScreen />
    
    </div>
  )
}
