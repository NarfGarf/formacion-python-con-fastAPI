import JuegosTable from "./ui/table";
import {CreateJuego} from "./ui/buttons";

export default function Home() {
  return (
      <main>
      
      <h1 className="text-5xl font-bold text-center text-blue-600 py-8 mb-6">Lista de Juegos</h1>
      <div className="w-full mt-6">
        <JuegosTable />
      </div>
      <CreateJuego />
      </main>
  );
}
