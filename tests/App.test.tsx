import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App'

describe('App - Structure UI de la calculatrice', () => {
  it('affiche les deux champs de saisie pour les nombres', () => {
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)

    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
  })

  it('affiche le menu déroulant pour sélectionner l\'opération', () => {
    render(<App />)

    const operationSelect = screen.getByLabelText(/opération/i)

    expect(operationSelect).toBeInTheDocument()
    expect(operationSelect.tagName).toBe('SELECT')
  })

  it('affiche le bouton "Calculer"', () => {
    render(<App />)

    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    expect(calculateButton).toBeInTheDocument()
  })

  it('affiche la zone de résultat', () => {
    render(<App />)

    const resultLabel = screen.getByText(/résultat/i)
    const resultDisplay = screen.getByText(/aucun calcul effectué/i)

    expect(resultLabel).toBeInTheDocument()
    expect(resultDisplay).toBeInTheDocument()
  })
})
