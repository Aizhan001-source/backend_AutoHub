export const formatPrice = (value) => {
    if (!value) return "0 ₸";
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0,
    }).format(value);
  };

  