export default function TeddyBear() {
  return (
    <div className='fixed bottom-8 left-8 w-32 h-32 z-20 animate-bounce-gentle'>
      <svg viewBox='0 0 200 200' className='w-full h-full drop-shadow-lg'>
        {/* Bear body */}
        <ellipse cx='100' cy='140' rx='45' ry='35' fill='#8B4513' />
        <ellipse cx='100' cy='135' rx='35' ry='28' fill='#DEB887' />

        {/* Bear head */}
        <circle cx='100' cy='80' r='40' fill='#8B4513' />
        <circle cx='100' cy='80' r='32' fill='#DEB887' />

        {/* Ears */}
        <circle cx='75' cy='55' r='18' fill='#8B4513' />
        <circle cx='125' cy='55' r='18' fill='#8B4513' />
        <circle cx='75' cy='55' r='12' fill='#CD853F' />
        <circle cx='125' cy='55' r='12' fill='#CD853F' />

        {/* Arms */}
        <ellipse cx='65' cy='120' rx='15' ry='25' fill='#8B4513' />
        <ellipse cx='135' cy='120' rx='15' ry='25' fill='#8B4513' />
        <ellipse cx='65' cy='120' rx='10' ry='18' fill='#DEB887' />
        <ellipse cx='135' cy='120' rx='10' ry='18' fill='#DEB887' />

        {/* Paws */}
        <circle cx='65' cy='140' r='8' fill='#654321' />
        <circle cx='135' cy='140' r='8' fill='#654321' />

        {/* Eyes */}
        <circle cx='90' cy='75' r='6' fill='#000' />
        <circle cx='110' cy='75' r='6' fill='#000' />
        <circle cx='92' cy='73' r='2' fill='#FFF' />
        <circle cx='112' cy='73' r='2' fill='#FFF' />

        {/* Nose */}
        <ellipse cx='100' cy='85' rx='3' ry='2' fill='#000' />

        {/* Mouth */}
        <path
          d='M 95 90 Q 100 95 105 90'
          stroke='#000'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
        />

        {/* Belly button */}
        <circle cx='100' cy='130' r='2' fill='#CD853F' />

        {/* Bow tie */}
        <path
          d='M 85 100 L 100 105 L 115 100 L 110 110 L 100 108 L 90 110 Z'
          fill='#DC143C'
        />
        <rect x='98' y='103' width='4' height='8' fill='#8B0000' />
      </svg>
    </div>
  )
}
