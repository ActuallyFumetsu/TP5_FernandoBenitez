document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value || "No especificado";
    const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(el => el.value);

    const resultado = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Intereses:</strong> ${intereses.length ? intereses.join(", ") : "Ninguno"}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
});

document.getElementById("resetear").addEventListener("click", function () {
    document.getElementById("formulario").reset();
    document.getElementById("resultado").innerHTML = "";
});
