// src/utils/generateUserCode.js

const generateUserCode = (username, prefix = "USR") => {
    const userAbbreviation = username
      .toUpperCase()
      .replace(/\s+/g, "")
      .slice(0, 2);
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${prefix}-${userAbbreviation}-${randomString}`;
  };
  
  export default generateUserCode;
  