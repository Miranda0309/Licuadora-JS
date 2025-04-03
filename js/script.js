var estadoLicuadora = "apagada";

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        console.log("Esta encendido");
    } else {
        estadoLicuadora = "apagada"
        console.log("Esta apagada")
    }
}