export default function CloudElements() {
  return (
    <div className='fixed inset-0 pointer-events-none z-10'>
      {/* Top left cloud */}
      <div className='absolute top-8 left-16 w-32 h-20 opacity-80 animate-float-cloud'>
        <svg viewBox='0 0 128 80' className='w-full h-full'>
          <path
            d='M20 50 C15 35, 35 25, 45 35 C50 25, 70 25, 75 35 C85 20, 105 25, 100 40 C110 45, 105 60, 95 60 L25 60 C15 60, 10 50, 20 50 Z'
            fill='#f7c7a0'
            className='drop-shadow-sm'
          />
        </svg>
      </div>

      {/* Top right cloud */}
      <div className='absolute top-4 right-12 w-48 h-28 opacity-70 animate-drift-cloud'>
        <svg viewBox='0 0 192 112' className='w-full h-full'>
          <path
            d='M30 70 C20 45, 50 35, 65 50 C75 30, 105 30, 115 50 C130 25, 165 30, 160 55 C175 60, 170 85, 155 85 L35 85 C20 85, 15 70, 30 70 Z'
            fill='#f9d5b8'
            className='drop-shadow-sm'
          />
        </svg>
      </div>

      {/* Middle left cloud */}
      <div
        className='absolute top-1/3 left-8 w-24 h-16 opacity-60 animate-float-cloud'
        style={{ animationDelay: '2s' }}>
        <svg viewBox='0 0 96 64' className='w-full h-full'>
          <path
            d='M15 40 C10 28, 25 20, 35 28 C40 20, 55 20, 60 28 C68 18, 80 22, 78 35 C85 38, 82 50, 75 50 L20 50 C12 50, 8 40, 15 40 Z'
            fill='#f4a373'
            className='drop-shadow-sm'
          />
        </svg>
      </div>

      {/* Bottom right small cloud */}
      <div
        className='absolute bottom-1/4 right-20 w-20 h-14 opacity-50 animate-drift-cloud'
        style={{ animationDelay: '4s' }}>
        <svg viewBox='0 0 80 56' className='w-full h-full'>
          <path
            d='M12 35 C8 25, 18 18, 25 25 C28 18, 40 18, 43 25 C48 18, 58 20, 57 30 C62 32, 60 42, 55 42 L15 42 C8 42, 5 35, 12 35 Z'
            fill='#f7c7a0'
            className='drop-shadow-sm'
          />
        </svg>
      </div>

      {/* Sparkle elements */}
      <div
        className='absolute top-20 left-1/4 w-2 h-2 bg-white opacity-80 animate-pulse'
        style={{
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        }}></div>
      <div
        className='absolute top-1/2 right-1/3 w-3 h-3 bg-white opacity-60 animate-pulse'
        style={{
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          animationDelay: '1s',
        }}></div>
      <div
        className='absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white opacity-70 animate-pulse'
        style={{
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          animationDelay: '2.5s',
        }}></div>
      <div
        className='absolute top-3/4 right-1/4 w-2 h-2 bg-white opacity-50 animate-pulse'
        style={{
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          animationDelay: '3s',
        }}></div>
    </div>
  )
}
