console.log("Script carregado com sucesso!");

const toggleBtn = document.getElementById("toggleBtn");
const mediaSection = document.getElementById("mediaSection");

let mostrandoVideo = true;

toggleBtn.addEventListener("click", () => {
  if (mostrandoVideo) {
    // Mostra só a imagem
    mediaSection.innerHTML = `
      <img id="imagemCapo" src="Muse Activewear (2).jpeg" alt="Imagem de Capoeira">
    `;
    toggleBtn.textContent = "Mostrar vídeo";
  } else {
    // Mostra o vídeo de novo
    mediaSection.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/hJHPCN-9Owk?autoplay=1"
        title="Vídeo de Capoeira"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
    toggleBtn.textContent = "Mostrar imagem";
  }
  mostrandoVideo = !mostrandoVideo;
});
