import { asyncScheduler } from 'rxjs';

// setTimeout(()=>{},100)
const scheduleTimeout = () => console.log('Hello!!!!!');
const scheduleTimeoutParam = (value) => console.log(`Hello mi name is: ${value}`);
asyncScheduler.schedule(scheduleTimeout, 2000);
asyncScheduler.schedule(scheduleTimeoutParam, 3000, 'Gerard');
// setInterval(()=>{},100)

asyncScheduler.schedule<number>(
  function (state) {
    console.log(`value state is: ${state}`);
    this.schedule(state + 1, 1000);
  },
  4000,
  0
);
