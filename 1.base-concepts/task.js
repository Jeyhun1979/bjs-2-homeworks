"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(rootFirst, rootSecond);
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем процентную ставку из диапазона 0-100 в 0-1 и из годовой в месячную
  let monthlyRate = (percent / 100) / 12;
  
  // Считаем тело кредита (сумма кредита минус первоначальный взнос)
  let loanBody = amount - contribution;
  
  // Рассчитываем ежемесячный платеж по формуле
  // Платёж = S * (P + (P / (((1 + P)^n) - 1)))
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  
  // Считаем общую сумму (ежемесячный платеж * количество месяцев)
  let totalAmount = monthlyPayment * countMonths;
  
  // Округляем до двух знаков после запятой
  return Math.round(totalAmount * 100) / 100;
}