export const getErrorMessage = (error: any): string => {
//   if (error.response && error.response.data && error.response.data.message) {
//     return error.response.data.message;
//   } else 
    if (error.message) {
    if(Array.isArray(error.message)) {
      return formatErrorMessage (error.message.join(", "));
    }
    return formatErrorMessage(error.message);
  } else {
    return "An unknown error occurred.";
  }
}

const formatErrorMessage = (message: string): string => {
  // You can add any formatting logic here, for example:
  return message.charAt(0).toUpperCase() + message.slice(1);
}