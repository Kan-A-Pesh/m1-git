import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [operation, setOperation] = useState<string>('addition')
  const [result, setResult] = useState<string>('')

  const handleCalculate = () => {
    // Convertir les strings en nombres
    const number1 = Number(num1)
    const number2 = Number(num2)

    // Vérifier que les deux nombres sont valides
    if (num1.trim() === '' || num2.trim() === '') {
      setResult('Erreur : Veuillez entrer les deux nombres')
      return
    }

    if (Number.isNaN(number1) || Number.isNaN(number2)) {
      setResult('Erreur : Nombres invalides')
      return
    }

    // Effectuer l'opération sélectionnée
    let calculatedResult: number

    switch (operation) {
      case 'addition':
        calculatedResult = number1 + number2
        break
      case 'soustraction':
        calculatedResult = number1 - number2
        break
      case 'multiplication':
        calculatedResult = number1 * number2
        break
      case 'division':
        // Gérer la division par zéro
        if (number2 === 0) {
          setResult('Erreur : Division par zéro impossible')
          return
        }
        calculatedResult = number1 / number2
        break
      default:
        setResult('Erreur : Opération non reconnue')
        return
    }

    // Afficher le résultat
    setResult(calculatedResult.toString())
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
          <p>Résultat:</p>
          <div className="result-display">
            {result || 'Aucun calcul effectué'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
