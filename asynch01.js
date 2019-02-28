function getJSON(cb) {
    console.log('From GetJSon');;
    console.log(cb);
    // Our JSON object to be passed to the callback
    let fakeJSON = {
      "Jamil": "cool guy"
    };
  
    // Simulating some random amount of time to completion for our asynchronous function
    // Also we add the time to the fakeJSON object so that we can differentiate
    // each invocation
    let time = Math.random();
    fakeJSON.time = time;
  
    setTimeout(() => {
      cb(JSON.stringify(fakeJSON));
    }, time);
  }


  // createLogger returns a function with closure over the results array
// When the returned function has been called five times, we log the result
const createLogger = () => {
    console.log('createLogger');
    let results = [];
  
    return (data) => {
        console.log('logdata ' + results.length);
      results.push(data);
      if (results.length >= 5) {
        console.log('results are', results);
      }
    };
  };
  
  // An example of how we use createLogger
  const logData = createLogger();
  
  //getJSON((data) => { console.log(data); logData (data); });


  getJSON((data) => {
      console.log('getJSON 1');
    logData (data);
    getJSON((data) => {
        console.log('getJSON 2');
      logData (data);
      getJSON((data) => {
        console.log('getJSON 3');
        logData (data);
        getJSON((data) => {
            console.log('getJSON 4');
          logData (data);
          getJSON((data) => {
            console.log('getJSON 5');
            logData (data);
          });
        });
      });
    });
  });