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
                    let weights = 0;
                    weights < this.layers[layer - 1];
                    weights++
                ) {
                    this.weights[layer - 1][neuron].push(Math.random() * 2 - 1);
                }

                // Start Biases
                this.biases[layer - 1][neuron] = Math.random() * 2 - 1;
            }
        }
    }
}
