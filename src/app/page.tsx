import Navbar from '../components/Navbar';
import ChatInterface from '../components/ChatInterface';

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <ChatInterface />
      </main>
    </div>
  );
}