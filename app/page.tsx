import Board from '@/components/Board'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <Header />
      {/* Board */}
      <Board />
    </main>
  )
}
