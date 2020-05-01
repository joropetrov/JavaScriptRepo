(function ticTacToe() {

        let counter = 0;
        let gameIsOn = true;
        let winText = document.getElementsByTagName('p')[0];

        document.querySelectorAll('td').forEach(cell => cell.addEventListener('click', handleCellClick));

        function handleCellClick(clickedCellEvent) {

                const clickedCell = clickedCellEvent.target;

                const clickedCellIndex = parseInt(
                        clickedCell.getAttribute('id')
                );
                if (gameIsOn) {

                        if (clickedCell.innerHTML !== "") {
                                return;
                        }
                        else if (clickedCell.innerHTML === "" && counter % 2 === 0) {
                                clickedCell.innerHTML = "X";

                                matrixReplacer(winningConditionsX, clickedCellIndex, "X");
                                console.log(winningConditionsX);
                                checkForWin(winningConditionsX, "X", winText)
                        }
                        else if (clickedCell.innerHTML === "" && counter % 2 !== 0) {
                                clickedCell.innerHTML = "O";

                                matrixReplacer(winningConditionsO, clickedCellIndex, "Y");
                                console.log(winningConditionsO);
                                checkForWin(winningConditionsO, "O", winText);
                        }
                        counter++;

                }
        }

        document.querySelector('#resetButton').addEventListener('click', resetGameButton);


        function resetGameButton() {
                counter = 0;
                gameIsOn = true;
                winText.style.display = "none";
                document.querySelectorAll('td')
                        .forEach(cell => cell.innerHTML = "");

                winningConditionsX = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                ];
                winningConditionsO = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                ];

        }

        function matrixReplacer(matrix, cellNum, XorO) {
                for (let i = 0; i < matrix.length; i++) {

                        for (let b = 0; b < matrix.length; b++) {
                                let element = matrix[i][b];
                                if (element == cellNum) {
                                        matrix[i][b] = XorO;
                                }
                        }
                }
        }

        let winningConditionsX = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
        ];

        let winningConditionsO = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
        ];

        function checkForWin(matrix, XorO, winText) {
                for (let i = 0; i < matrix.length; i++) {

                        for (let b = 0; b < matrix.length; b++) {
                                let d = matrix[i][b];
                                let e = matrix[i][b + 1];
                                let f = matrix[i][b + 2];

                                if (d === e && e === f) {
                                        console.log(`Congrationlations, Mr.${XorO}!!! You've WON!`);
                                        gameIsOn = false;

                                        winText.innerHTML = `Congrationlations, Mr.${XorO}!!! You've WON!`;
                                        winText.style.display = "block";
                                }
                                break;
                        }
                }
        }

})();