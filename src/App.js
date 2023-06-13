import React, { useState } from 'react';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Convertendo altura para metros
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado < 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <div>
        <label htmlFor="altura">Altura (cm): </label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="peso">Peso (kg): </label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {imc && classificacao && (
        <div>
          <p>Seu IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default App;
