
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (!matrix) {
        return [];
    } else {

        const matrixKeys = Object.keys(matrix);
        const matrixValues = Object.values(matrix);

        if (matrixKeys.length === 0) {
            return [];
        } else {

            for (let i = 1; i < matrixKeys.length; i = i + 2) {
                matrixValues[i].reverse();
            }
    
            let result = [].concat(...matrixValues);
            return result;

        }
    }
 
}