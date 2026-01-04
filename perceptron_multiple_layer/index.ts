import { PerceptronMultipleLayer } from "./perceptron_multiple_layer";

const perceptron_multiple_layer = new PerceptronMultipleLayer({
    inputsSize: 3,
    hiddenLayers: [
        5,
        6,
        7,
    ],
    outputSize: 3,
})

console.log(perceptron_multiple_layer.weights);