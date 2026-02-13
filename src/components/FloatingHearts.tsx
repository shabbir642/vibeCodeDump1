import React from 'react'

const hearts = [
  { left: '10%', top: '20%', delay: '0s', size: 'w-6 h-6' },
  { left: '80%', top: '30%', delay: '1s', size: 'w-8 h-8' },
  { left: '50%', top: '10%', delay: '2s', size: 'w-5 h-5' },
  { left: '30%', top: '70%', delay: '1.5s', size: 'w-7 h-7' },
  { left: '70%', top: '80%', delay: '2.5s', size: 'w-6 h-6' },
]

export default function FloatingHearts() {
  return (
    <div className='absolute inset-0 pointer-events-none'>
      {hearts.map((heart, idx) => (
        <span
          key={idx}
          className={`absolute ${heart.size} animate-floating-heart`}
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            opacity: 0.18,
          }}>
          <svg
            viewBox='0 0 24 24'
            fill='#FADADD'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </svg>
        </span>
      ))}
    </div>
  )
}
