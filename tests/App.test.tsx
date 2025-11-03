import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
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

describe('App - Logique de calcul', () => {
  it('effectue une addition correctement (5 + 3 = 8)', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const operationSelect = screen.getByLabelText(/opération/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Remplir les champs
    await user.clear(input1)
    await user.type(input1, '5')
    await user.clear(input2)
    await user.type(input2, '3')
    await user.selectOptions(operationSelect, 'addition')

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le résultat
    const result = screen.getByText('8')
    expect(result).toBeInTheDocument()
  })

  it('effectue une soustraction correctement (10 - 4 = 6)', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const operationSelect = screen.getByLabelText(/opération/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Remplir les champs
    await user.clear(input1)
    await user.type(input1, '10')
    await user.clear(input2)
    await user.type(input2, '4')
    await user.selectOptions(operationSelect, 'soustraction')

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le résultat
    const result = screen.getByText('6')
    expect(result).toBeInTheDocument()
  })

  it('effectue une multiplication correctement (7 * 2 = 14)', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const operationSelect = screen.getByLabelText(/opération/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Remplir les champs
    await user.clear(input1)
    await user.type(input1, '7')
    await user.clear(input2)
    await user.type(input2, '2')
    await user.selectOptions(operationSelect, 'multiplication')

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le résultat
    const result = screen.getByText('14')
    expect(result).toBeInTheDocument()
  })

  it('effectue une division correctement (15 / 3 = 5)', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const operationSelect = screen.getByLabelText(/opération/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Remplir les champs
    await user.clear(input1)
    await user.type(input1, '15')
    await user.clear(input2)
    await user.type(input2, '3')
    await user.selectOptions(operationSelect, 'division')

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le résultat
    const result = screen.getByText('5')
    expect(result).toBeInTheDocument()
  })

  it('affiche une erreur lors d\'une division par zéro', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const operationSelect = screen.getByLabelText(/opération/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Remplir les champs
    await user.clear(input1)
    await user.type(input1, '10')
    await user.clear(input2)
    await user.type(input2, '0')
    await user.selectOptions(operationSelect, 'division')

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le message d'erreur
    const errorMessage = screen.getByText(/erreur : division par zéro impossible/i)
    expect(errorMessage).toBeInTheDocument()
  })

  it('affiche une erreur lorsque le premier champ est vide', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Remplir uniquement le second champ
    await user.clear(input1)
    await user.clear(input2)
    await user.type(input2, '5')

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le message d'erreur
    const errorMessage = screen.getByText(/erreur : veuillez entrer les deux nombres/i)
    expect(errorMessage).toBeInTheDocument()
  })

  it('affiche une erreur lorsque le second champ est vide', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Remplir uniquement le premier champ
    await user.clear(input1)
    await user.type(input1, '5')
    await user.clear(input2)

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le message d'erreur
    const errorMessage = screen.getByText(/erreur : veuillez entrer les deux nombres/i)
    expect(errorMessage).toBeInTheDocument()
  })

  it('affiche une erreur lorsque les deux champs sont vides', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Vider les deux champs
    await user.clear(input1)
    await user.clear(input2)

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Vérifier le message d'erreur
    const errorMessage = screen.getByText(/erreur : veuillez entrer les deux nombres/i)
    expect(errorMessage).toBeInTheDocument()
  })

  it('affiche une erreur pour des nombres invalides', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input1 = screen.getByLabelText(/nombre 1/i)
    const input2 = screen.getByLabelText(/nombre 2/i)
    const calculateButton = screen.getByRole('button', { name: /calculer/i })

    // Entrer des valeurs invalides (bien que le type="number" empêche cela dans l'UI)
    // On simule en utilisant des strings qui deviennent NaN
    await user.clear(input1)
    await user.type(input1, 'abc')
    await user.clear(input2)
    await user.type(input2, '5')

    // Cliquer sur calculer
    await user.click(calculateButton)

    // Note: Le type="number" dans l'input HTML empêche l'entrée de lettres
    // mais si des caractères invalides passent, l'erreur devrait s'afficher
    // Dans ce cas, l'input sera vide car le type="number" rejette "abc"
    const errorMessage = screen.getByText(/erreur : veuillez entrer les deux nombres/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
