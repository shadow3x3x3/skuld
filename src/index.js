const GREEN_COLOR = 'rgb(149, 206, 126)';
const RED_COLOR = 'rgb(235, 119, 119)';

var app = new Vue({
  el: '#app',
  data: {
    isActive: false,
    minutes: 25,
    seconds: 00,
    backgroundColor: {
      'background-color': RED_COLOR
    }
  },
  methods: {
    startTimer() {
      this.minutes = 25;
      this.seconds = 00;
      if (!this.isActive) {
        this.isActive = true;
        this.backgroundColor['background-color'] = GREEN_COLOR;
        this.decreaseTime();
      }
    },
    stopTimer() {
      this.isActive = false;
    },
    decreaseTime() {
      if (!this.isActive) {
        return;
      }
      if (this.seconds !== 0) {
        this.seconds --;
      } else {
        if (this.minutes !== 0) {
          this.minutes --;
          this.seconds = 59;
        } else {
          // Both of second and minute are zero, done.
          this.isActive = false;
          return;
        }
      }
      setTimeout(this.decreaseTime, 1000);
    },
    getNumText(num) {
      return String(num).length !== 1 ? `${num}` : `0${num}`;
    }
  },
  computed: {
    minText() {
      return this.getNumText(this.minutes);
    },
    secText() {
      return this.getNumText(this.seconds);
    }
  }
})