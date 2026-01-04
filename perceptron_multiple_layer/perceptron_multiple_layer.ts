export class PerceptronMultipleLayer {
    weights: number[][][] = [];
    biases: number[][] = [];
    outputs: number[][] = [];
    layers: number[];

    constructor(topoloy: {
        inputsSize: number;
        hiddenLayers: number[];
        outputSize: number;
    }) {
        this.layers = [
            topoloy.inputsSize,
            ...topoloy.hiddenLayers,
            topoloy.outputSize,
        ];

        this.initializeWeightsAndBiases();
    }

    initializeWeightsAndBiases() {
        for (let layer = 1; layer < this.layers.length; layer++) {
            this.biases.push([])
            this.weights.push([])

            for (let neuron = 0; neuron < this.layers[layer]; neuron++) {
                // Start Weights

                this.weights[layer-1].push([])
                for (
                    let weight = 0;
                    weight < this.layers[layer - 1];
                    weight++
                ) {
                    this.weights[layer - 1][neuron].push(Math.random() * 2 - 1);
                }

                // Start Biases
                this.biases[layer - 1][neuron] = Math.random() * 2 - 1;
            }
        }
    }

    feedforward(inputs: number[]): number[] {
        if (inputs.length !== this.layers[0]) {
            throw new Error(
                `Expected ${this.layers[0]} inputs, but got ${inputs.length}`
            );
        }
        this.outputs[0] = inputs;

        for (let layer = 1; layer < this.layers.length; layer++) {
            this.outputs.push([]);

            for (let neuron = 0; neuron < this.layers[layer]; neuron++) {
                let sum = 0;

                for (
                    let weight = 0;
                    weight < this.layers[layer - 1];
                    weight++
                ) {
                    sum += this.weights[layer-1][neuron][weight] * this.outputs[layer-1][weight]
                }

                this.outputs[layer][neuron] = this.activate_sigmod(sum + this.biases[layer-1][neuron]);
            }
        }

        return this.outputs[this.outputs.length-1];
    }

    activate_sigmod(x: number): number {
        return 1 / (1 + Math.exp(-x));
    }

    
}
