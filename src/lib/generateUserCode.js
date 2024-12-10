const generateUserCode = (prefix, userName) => {
    if(!prefix || !userName){
        throw new Error("Both perfix and useName are required to generate a code.")
    }

    const formattedName = userName.trim()
    .toUpperCase()
    .replace(/\s+/g, "");
    const userCode = `${prefix}-${formattedName}`;
    
    return userCode;
}

export default generateUserCode;