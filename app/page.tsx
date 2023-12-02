import Board from '@/components/Board'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <h1>Trello 2.0 AI Clone</h1>
      
      {/* Board */}
      <Board />
    </main>
  )
}
