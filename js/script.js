var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        licuadora.classList.add("active");
        /* console.log("Esta encendido"); */
    } else {
        estadoLicuadora = "apagada"
        licuadora.classList.remove("active");
        /* console.log("Esta apagada") */
    }
}