import { GameField, GameInfo, GameTitle, Header } from "../components";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-30">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle />
        <GameInfo className="mt-4 py-4" />
        <GameField className="mt-6 py-6" />
      </main>
    </div>
  );
}
