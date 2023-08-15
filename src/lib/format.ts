const formatter = new Intl.NumberFormat('MY', {
  style: 'currency',
  currency: 'MYR',
  minimumFractionDigits: 2
});

export function formatCurrency(value: number): string {
  return formatter.format(value);
}
