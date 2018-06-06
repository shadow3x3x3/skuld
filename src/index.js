var app = new Vue({
  el: '#app',
  data: {
    isActive: false,
    minutes: 00,
    seconds: 10,
  },
  methods: {
    startTimer() {
      this.minutes = 00;
      this.seconds = 10;
      if (!this.isActive) {
        this.isActive = true;
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