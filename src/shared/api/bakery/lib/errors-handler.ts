enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const handleError = (error:any) => {
  const { status } = error;

  switch (status) {
    case StatusCode.InternalServerError: {
      // Handle InternalServerError
      new Error('------> InternalServerError')
      break;
    }
    case StatusCode.Forbidden: {
      // Handle Forbidden
      new Error('------> Forbidden')
      break;
    }
    case StatusCode.Unauthorized: {
      // Handle Unauthorized
      new Error('------> Unauthorized')
      break;
    }
    case StatusCode.TooManyRequests: {
      // Handle TooManyRequests
      new Error('------> TooManyRequests')
      break;
    }
  }

  return Promise.reject(error);
}

export default handleError
