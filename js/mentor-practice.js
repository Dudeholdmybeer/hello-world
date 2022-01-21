// ! Практика с ментором

// * Подсчет чаевых для ресторана

const checkNumber = prompt('Введите сумму в чеке (грн):');
console.log(checkNumber);

const checkTips = prompt('Введите процент чаевых (%):');
console.log(checkTips);
// Идем от обратного - отмена prompt пользователем
if (checkTips === null || checkNumber === null) {
  alert('Canceled');
} else {
  const parseCheckNumber = Number.parseFloat(checkNumber);
  const parseCheckTips = Number.parseFloat(checkTips);
  // Идем от обратного - сначала прописываем все условия для "Invalid input data"
  if (
    Number.isNaN(parseCheckNumber) ||
    Number.isNaN(parseCheckTips) ||
    parseCheckNumber < 0 ||
    parseCheckTips <= 0 ||
    parseCheckTips > 100
  ) {
    alert('Invalid input data');
  } else {
    const tipsAmount = ((parseCheckNumber * parseCheckTips) / 100).toFixed(2);
    const totalSum = Number(parseCheckNumber) + Number(tipsAmount);
    alert(
      `Сумма в чеке: ${parseCheckNumber} грн,\nПроцент чаевых: ${parseCheckTips} %,\nСумма чаевых: ${tipsAmount} грн,\nОбщая сумма: ${totalSum} грн.`
    );
  }
}
