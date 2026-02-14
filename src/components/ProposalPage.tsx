import ProposalCard from './ProposalCard'
import FloatingHearts from './FloatingHearts'
import CloudElements from './CloudElements'
import TeddyBear from './TeddyBear'

export default function ProposalPage() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-coral-orange via-soft-orange to-coral-orange overflow-hidden'>
      <CloudElements />
      <FloatingHearts />
      <TeddyBear />
      <ProposalCard />
    </div>
  )
}
