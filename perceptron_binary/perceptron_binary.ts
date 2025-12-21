export class PerceptronBinary {
    weights: number[] = [];
    bias: number = 0;
    inputsSize: number;

    constructor(inputsSize: number) {
        this.inputsSize = inputsSize;
        this.initializeWeights();
    }

    initializeWeights() {
        this.weights = Array(this.inputsSize)
            .fill(0)
            .map(() => Math.random() * 2 - 1); // Random values between -1 and 1
        this.bias = Math.random() * 2 - 1; // Random bias between -1 and 1
    }

    feedforward(inputs: number[]): number {
        if (inputs.length !== this.inputsSize) {
            throw new Error(
                `Expected ${this.inputsSize} inputs, but got ${inputs.length}`
            );
        }

        let sum = 0;
        for (let i = 0; i < this.inputsSize; i++) {
            sum += this.weights[i]! * inputs[i]!;
        }

        sum += this.bias;
        return this.activate(sum); // Binary activation (identity function)
    }

    activate(output: number): number {
        return output >= 0 ? 1 : -1; // Step function activation
    }

    train(inputs: number[], target: number, learningRate: number = 0.1): void {
        const output = this.feedforward(inputs);
        const error = target - output;

        for (let i = 0; i < this.inputsSize; i++) {
            this.weights[i]! += learningRate * error * inputs[i]!;
        }

        this.bias += learningRate * error;
    }

    trainBatch(
        dataset: { inputs: number[]; label: number }[],
        learningRate: number = 0.1,
        epochs: number = 1
    ): void {
        console.log("Starting batch training...");
        for (let epoch = 0; epoch < epochs; epoch++) {
            console.log(`Epoch ${epoch + 1}/${epochs}`);
            console.log(
                "Weights before epoch:",
                this.weights,
                "Bias before epoch:",
                this.bias
            );
            for (const data of dataset) {
                this.train(data.inputs, data.label, learningRate);
            }
        }
    }
}
