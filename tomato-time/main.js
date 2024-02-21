class Timer {
    constructor ( time ) {
        this.time = time;
        this.timerInterval = null;

    }
    tick() { 
        if(this.time > 0){
            this.time -= 1;
        }
    }



    begin() {
        this.tick();
    }

    static displayTime() {
        let h = Math.floor(this.time / 3600);
        let m = Math.floor(this.time / 60);
        let s = this.time % 60
        document.getElementById('timer').innerHTML = h + ":" + m + ":" + s
    }

    printTime() {
        let hours, minutes, seconds;
        let s = this.time

        if (s >= 3600) {
            const hours = Math.floor(s / 3600);
            s = s - hours * 3600;
        }
        minutes = Math.floor(s / 60);
        seconds = s - minutes * 60;
        document.getElementById('timer').innerHTML = `${hours ? hours + ":" : ""}${minutes}:${seconds}`;
        return `${hours ? hours + ":" : ""}${minutes}:${seconds}`;

    }

}