from fastapi import FastAPI
from routers import juegos

app = FastAPI()

# con esto agregamos los juegos al main (se puede ir a /juegos/ desde acá)
app.include_router(juegos.juegoRouter)

@app.get("/")
async def root():
    return {"message": "Hello World"}

# dentro de juegos está el crud a la base de datos
# ejecutar uvicorn main:app para abrir el servidor
# asegurarse de tener el servidor mySQL prendido y en el puerto por defecto
# como no hay frontend, recomiendo usar thunder client o algun equivalente para enviar los requests HTTP
