'use client'

import React, { useState, useRef, useEffect } from 'react'
import Button from './Button'

const PROPOSAL_TEXT = 'Will you be my Valentine? 💌'
const SUCCESS_TEXT = 'Yaaay 💕 I knew it!'

const ProposalCard: React.FC = () => {
  const [yesScale, setYesScale] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [noBtnPos, setNoBtnPos] = useState({ left: '25%', top: '70%' })
  const [hoverCount, setHoverCount] = useState(0)
  const noBtnRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Move No button to random position on hover/click
  const moveNoButton = () => {
    setHoverCount((prev) => prev + 1)

    // Generate random percentage positions within the card container
    const leftPercent = Math.random() * 60 + 20 // 20% to 80% within card
    const topPercent = Math.random() * 40 + 40 // 40% to 80% within card (below header)

    setNoBtnPos({ left: `${leftPercent}%`, top: `${topPercent}%` })

    // Make YES button grow more gradually for smoother effect
    const scaleIncrement = 0.2 + hoverCount * 0.08 // Smaller, smoother increments
    setYesScale((prev) => Math.min(prev + scaleIncrement, 2.5)) // Reduced max scale
  }

  // Fade out proposal and show success message
  const handleYes = () => {
    setShowSuccess(true)
    setTimeout(() => {
      // Optionally trigger celebration animation here
    }, 800)
  }

  // Reset positions on component mount
  useEffect(() => {
    // Initial positioning is handled by state initialization
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-warm-white to-soft-pink/10'>
      <div
        ref={containerRef}
        className='relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-soft-pink/30 p-8 md:p-12 max-w-4xl w-full min-h-[600px] overflow-hidden'>
        {!showSuccess ? (
          <div className='relative h-full fade-scale'>
            {/* Header Section */}
            <div className='text-center mb-12'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-deep-rose leading-tight'>
                {PROPOSAL_TEXT}
              </h1>
            </div>

            {/* Button Container */}
            <div className='relative flex justify-between items-center gap-8 px-8 py-8'>
              <Button
                variant='primary'
                className='transition-all duration-500 ease-out'
                style={{
                  transform: `scale(${yesScale})`,
                  zIndex: yesScale > 2 ? 10 : 2,
                  transformOrigin: 'center center',
                }}
                onClick={handleYes}>
                Yes 💖
              </Button>

              <Button
                variant='secondary'
                className='transition-all duration-700 ease-out'
                style={{
                  position: hoverCount > 0 ? 'absolute' : 'static',
                  left: hoverCount > 0 ? noBtnPos.left : 'auto',
                  top: hoverCount > 0 ? noBtnPos.top : 'auto',
                  zIndex: 3,
                  transform: hoverCount > 0 ? 'translate(-50%, -50%)' : 'none',
                  transition:
                    hoverCount > 0
                      ? 'left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      : 'all 0.3s ease',
                }}
                ref={noBtnRef}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}>
                No 🙈
              </Button>
            </div>

            {/* Decorative bottom space */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
              <div className='flex space-x-2'>
                <span className='text-2xl opacity-30'>💕</span>
                <span className='text-2xl opacity-50'>💖</span>
                <span className='text-2xl opacity-30'>💕</span>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-full fade-scale'>
            <h2 className='text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-deep-rose'>
              {SUCCESS_TEXT}
            </h2>
            {/* Celebration animation placeholder: FloatingHearts or confetti */}
            <div className='relative w-full h-32 flex items-center justify-center'>
              <div className='text-6xl animate-bounce'>🎉💖🎉</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProposalCard
