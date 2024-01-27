class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency

  // Mean (Average)
  calculateMean() {
    const sum = this.data.reduce((acc, val) => acc + val, 0);
    return sum / this.data.length;
  }

  // Median
  calculateMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  // Mode
  calculateMode() {
    const frequencyMap = {};
    this.data.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let mode;
    let maxFrequency = 0;

    for (const [key, value] of Object.entries(frequencyMap)) {
      if (value > maxFrequency) {
        mode = key;
        maxFrequency = value;
      }
    }

    return mode;
  }

  // Measures of Dispersion

  // Range
  calculateRange() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  // Variance
  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map((value) =>
      Math.pow(value - mean, 2)
    );
    return (
      squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length
    );
  }

  // Standard Deviation
  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  // Quartiles
  calculateQuartiles() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const firstQuartileIndex = Math.floor(sortedData.length / 4);
    const secondQuartileIndex = Math.floor(sortedData.length / 2);
    const thirdQuartileIndex = Math.floor((3 * sortedData.length) / 4);

    return {
      firstQuartile: sortedData[firstQuartileIndex],
      secondQuartile: this.calculateMedian(),
      thirdQuartile: sortedData[thirdQuartileIndex],
    };
  }
}

// Example Usage
const data = [12, 15, 23, 14, 16, 19, 8, 10, 22, 17];
const statsCalculator = new DescriptiveStatistics(data);

console.log("Mean:", statsCalculator.calculateMean());
console.log("Median:", statsCalculator.calculateMedian());
console.log("Mode:", statsCalculator.calculateMode());

console.log("Range:", statsCalculator.calculateRange());
console.log("Variance:", statsCalculator.calculateVariance());
console.log(
  "Standard Deviation:",
  statsCalculator.calculateStandardDeviation()
);

console.log("Quartiles:", statsCalculator.calculateQuartiles());
