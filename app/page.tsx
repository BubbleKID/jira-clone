import Board from '@/components/Board'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      {/* Board */}
      <Board />
    </main>
  )
}
