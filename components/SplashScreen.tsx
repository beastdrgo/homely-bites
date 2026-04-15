'use client'

import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1400)
    const t2 = setTimeout(() => setVisible(false), 2100)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#140c06',
        transition: 'opacity 0.7s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Spinning gold ring */}
        <div
          style={{
            position: 'absolute',
            width: 96,
            height: 96,
            borderRadius: '50%',
            border: '2px solid rgba(201,168,76,0.15)',
            borderTopColor: '#C9A84C',
            animation: 'splash-spin 1.1s linear infinite',
          }}
        />
        {/* Outer faint ring */}
        <div
          style={{
            position: 'absolute',
            width: 116,
            height: 116,
            borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.08)',
            animation: 'splash-spin 2.2s linear infinite reverse',
          }}
        />
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Homely Bites"
          style={{ width: 64, height: 64, objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
