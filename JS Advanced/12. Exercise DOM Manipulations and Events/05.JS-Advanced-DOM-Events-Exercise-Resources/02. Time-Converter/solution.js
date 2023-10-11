function attachEventsListeners() {

    let allButtons = document.querySelectorAll('main input[type=button]');
    let daysInputEl = document.getElementById('days');
    let hoursInputEl = document.getElementById('hours');
    let minutesInputEl = document.getElementById('minutes');
    let secondsInputEl = document.getElementById('seconds');


    for (const buttonEl of allButtons) {

        buttonEl.addEventListener('click', convert)

        function convert(event) {

            let timeValue = event.currentTarget.parentElement.querySelector('input[type=text]').value;
            let days = 0;
            let hours = 0;
            let minutes = 0;
            let seconds = 0;

            if (event.currentTarget.id == 'daysBtn') {
                days = timeValue;
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;

            } else if (event.currentTarget.id == 'hoursBtn') {
                hours = timeValue;
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;

            } else if (event.currentTarget.id =='minutesBtn') {
                minutes = timeValue; 
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;

            } else if (event.currentTarget.id == 'secondsBtn') {
                seconds = timeValue;
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
            }


            daysInputEl.value = days;
            hoursInputEl.value = hours;
            minutesInputEl.value = minutes;
            secondsInputEl.value = seconds;

        }
    }
}