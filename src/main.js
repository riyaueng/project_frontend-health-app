function caloriesCalculator(e) {
  e.preventDefault()

  // --- Formular Input ---
  const inputSize = parseFloat(document.querySelector("#size").value)
  const inputAge = parseFloat(document.querySelector("#age").value)
  const inputWeight = parseFloat(document.querySelector("#weight").value)
  const inputActivity = parseFloat(document.querySelector("#activity").value)
  const inputGenderFemale = document.querySelector("#female").checked
  const inputGenderMale = document.querySelector("#male").checked

  // --- Formular Output ---
  const outputBasalKcal = document.querySelector(".output_basal_kcal")
  const outputBasalKj = document.querySelector(".output_basal_kj")
  const outputDailyKcal = document.querySelector(".output_daily_kcal")
  const outputDailyKj = document.querySelector(".output_daily_kj")

  // --- Grundumsatz und Gesamtumsatz Berechnung ---
  let basalMetabolicRate = 0

  if (inputGenderFemale) {
    basalMetabolicRate = 655.1 + 9.6 * inputWeight + 1.8 * inputSize - 4.7 * inputAge
  } else if (inputGenderMale) {
    basalMetabolicRate = 66.47 + 13.7 * inputWeight + 5 * inputSize - 6.8 * inputAge
  }
  const totalDailyEnergy = basalMetabolicRate * inputActivity

  // --- Umrechnung in kJ (1 kcal = 4.184 kJ) ---
  const basalKjValue = basalMetabolicRate * 4.184
  const dailyKjValue = totalDailyEnergy * 4.184

  // --- Ergebnis Ausgabe ---
  outputBasalKcal.textContent = basalMetabolicRate.toFixed(2)
  outputBasalKj.textContent = basalKjValue.toFixed(2)
  outputDailyKcal.textContent = totalDailyEnergy.toFixed(2)
  outputDailyKj.textContent = dailyKjValue.toFixed(2)

  document.querySelector(".div_calculator_result").style.display = "block"
}

document.querySelector(".calculator").addEventListener("submit", caloriesCalculator)
