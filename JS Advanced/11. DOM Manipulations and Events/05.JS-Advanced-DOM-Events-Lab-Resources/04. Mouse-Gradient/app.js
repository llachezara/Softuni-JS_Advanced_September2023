function attachGradientEvents() {


    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        const divX = event.target.clientWidth;
        let pointerX = event.offsetX;

        let percentageFromDivX = Math.floor(100 * (pointerX) / (divX));
        let result = percentageFromDivX+ '%';

        document.getElementById('result').textContent = result;
    }

    function gradientOut() {
        document.getElementById('result').textContent = '';
    }
}
// function attachGradientEvents() {
//     let gradient = document.getElementById('gradient');
//     gradient.addEventListener('mousemove', gradientMove);
//     gradient.addEventListener('mouseout', gradientOut);
//     function gradientMove(event) {
//     const gradientBoxWidth = event.target.clientWidth;
//     const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
//     const percentage = Math.trunc(positionOfTheMouse * 100);
//     document.getElementById("result").textContent = percentage + "%";
//     }
//     function gradientOut() {
//     document.getElementById('result').textContent = "";
//     }
//     };
