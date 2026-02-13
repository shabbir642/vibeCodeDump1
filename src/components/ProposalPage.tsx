import ProposalCard from './ProposalCard'
import FloatingHearts from './FloatingHearts'

export default function ProposalPage() {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen bg-warm-white overflow-hidden'>
      <FloatingHearts />
      <ProposalCard />
    </div>
  )
}
