import { PerceptronBinary } from "./perceptron_binary";

const perceptron_binary = new PerceptronBinary(2);

const dataset = [
    { inputs: [0, 0], label: 1 },
    { inputs: [0, 1], label: 1 },
    { inputs: [1, 0], label: 1 },
    { inputs: [1, 1], label: -1 },
];

// Training the perceptron
perceptron_binary.trainBatch(dataset, 0.1, 1000);

// Testing the perceptron
for (const data of dataset) {
    const output = perceptron_binary.feedforward(data.inputs);
    console.log(
        `Inputs: ${data.inputs}, Predicted: ${output}, Actual: ${data.label}`
    );
}
