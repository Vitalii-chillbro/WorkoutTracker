export const validateWeights = (weights) => {
  return (
    weights.some((weight) => weight <= 0 || isNaN(weight)) ||
    weights.some((weight) => !weight) ||
    weights.some(
      (weight, i) => !weights[i === 0 ? 1 : 0] || !weights[i === 1 ? 2 : 1]
    )
  );
};
