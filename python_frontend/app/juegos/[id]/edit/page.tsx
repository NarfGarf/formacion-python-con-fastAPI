import Form from '@/app/ui/update-form';
import { getJuegoFromID } from '@/app/lib/data';
import { Juego } from '@/app/lib/definitions';


export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const id = params.id;
    const juego: Juego = await getJuegoFromID(id);
    return (
        <main>
        <h1 className="text-5xl font-bold text-center text-yellow-600 py-8 mb-6">Actualizar Juego</h1>
        <Form juego={juego} />
        </main>
    );
}
