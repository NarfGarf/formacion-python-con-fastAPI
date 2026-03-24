import JuegosTable from "./ui/table";
import {CreateJuego} from "./ui/buttons";

export default function Home() {
  return (
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <CreateJuego />
      <h1> Lista de Juegos</h1>
      <div className="w-full mt-6">
        <JuegosTable />
      </div>
      </main>
  );
}
