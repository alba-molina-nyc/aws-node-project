'use strict';
/* a function that takes in an event object as parameter and returns a body */
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    /* stringy method from json */
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};


