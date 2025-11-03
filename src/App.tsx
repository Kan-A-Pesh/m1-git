import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [operation, setOperation] = useState<string>('addition')
  const [result, setResult] = useState<string>('')

  const handleCalculate = () => {
    // La logique de calcul sera ajoutée dans l'étape suivante
    setResult('Calcul à implémenter')
  }

  return (
    <div className="calculator-container">
      <h1>Calculatrice</h1>

      <div className="calculator">
        <div className="input-group">
          <label htmlFor="num1">Nombre 1:</label>
          <input
            id="num1"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Entrez le premier nombre"
          />
        </div>

        <div className="input-group">
          <label htmlFor="operation">Opération:</label>
          <select
            id="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="addition">Addition (+)</option>
            <option value="soustraction">Soustraction (-)</option>
            <option value="multiplication">Multiplication (×)</option>
            <option value="division">Division (÷)</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="num2">Nombre 2:</label>
          <input
            id="num2"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Entrez le deuxième nombre"
          />
        </div>

        <button
          type="button"
          className="calculate-btn"
          onClick={handleCalculate}
        >
          Calculer
        </button>

        <div className="result-group">
          <label>Résultat:</label>
          <div className="result-display">
            {result || 'Aucun calcul effectué'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
