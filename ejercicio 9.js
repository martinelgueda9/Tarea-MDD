async function obtenerMensaje() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return "Mensaje después de 2 segundos";
}
async function mostrarResultado() {
  const mensaje = await obtenerMensaje();
  console.log(mensaje);
}
mostrarResultado();
