
class CountdownTimer {

    constructor({selector, targetDate}){
        this.targetDate = targetDate;
        this.selector = selector;
        this.intervalId = null;
        this.timerContainerRef = document.querySelector(`${this.selector}`);
        
        this.timerCountStart();
    }

    timerCountStart() {

        const targetTime = this.targetDate.getTime();
    
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            const time = this.getTimeComponents(deltaTime);

            this.updateTimerData(time);
        }, 1000);
    }

    updateTimerData({ days, hours, mins, secs }) {
    this.timerContainerRef.textContent = `${days}:${hours}:${mins}:${secs}`;
    }

    timerCountFinish() {

        if (deltaTime = 0) {
             
            clearInterval(this.intervalId);
            
            return    
        }
    }
    
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }
    
   pad(value) {
    return String(value).padStart(2, '0');
  }
}


const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 03, 2020'),
});


