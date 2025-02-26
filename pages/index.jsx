import { GameTitle } from "../components/GameTitle";
import { GameInfo } from "../components/GameInfo";
import { Header } from "../components/Header";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-full max-w-[616px]">
        <GameTitle />
        <GameInfo mt="mt-4" />
      </main>
    </div>
  );
}
