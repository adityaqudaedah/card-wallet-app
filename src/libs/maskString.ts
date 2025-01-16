export const maskStringWithSpaces = (input:string) => {
    // Replace all digits except the last four with asterisks
    const masked = input.replace(/\d(?=\d{4})/g, "*");
    
    // Add spaces between every 4 characters
    return masked.replace(/(\*{4}|\d{4})/g, "$1 ").trim();
  }