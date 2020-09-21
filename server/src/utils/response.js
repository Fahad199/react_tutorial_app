const Success = (data, message) => {
   let ResponseFormat = {
      status : 1,
      message : message,
      response : data
   }
   return ResponseFormat;
}

const Failure = (message) => {
   let ResponseFormat = {
      status : 0,
      message : message,
      response : ""
   }
   return ResponseFormat;
}


module.exports = { Success, Failure }
