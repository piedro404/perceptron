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

let response = perceptron_multiple_layer.feedforward([
    1, 0, 1
]);

console.log(response);
