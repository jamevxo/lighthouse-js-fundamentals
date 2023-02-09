const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let highestIndex = 0;
  let highestMetric = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highestMetric) {
      highestMetric = vegetables[i][metric];
      highestIndex = [i]
    }
  }
  return vegetables[highestIndex].submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)