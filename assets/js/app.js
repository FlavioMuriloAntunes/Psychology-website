
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quando o elemento entrar na tela, adicionar a classe "surgir-animado"
        entry.target.classList.add('surgir-animado');
        // Para garantir que a animação aconteça apenas uma vez, podemos parar de observar o elemento
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Ativa quando 50% da caixa está visível
  });

  // Observar todos os elementos com a classe .SINTOMAS-box
  const boxes = document.querySelectorAll('.SINTOMAS-box');
  boxes.forEach(box => {
    observer.observe(box);
  });
