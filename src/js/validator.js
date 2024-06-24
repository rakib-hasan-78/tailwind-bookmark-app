const emailValidator = (mail) => {
    // email regex 
    const emailReg = new RegExp(/^[\w-]+(\.[\w-]+)*@((yahoo|gmail|gsm|hotmail|icloud|outlook)\.com)$/i);
    let errors = [];
    // domain validation
    let validMail = emailReg.test(mail);
    if (!validMail) {
        errors.push(`Only yahoo, gmail, gsm, hotmail, icloud & outlook domains accepted!`)
    }
    // symbol validation
    let atSymbol = mail.indexOf('@');
    if (atSymbol===mail.length-1) {
        errors.push(`(@) At The Rate Symbol Can Not Be THE lAST Index`)
    }
    // dot validation
    let dotSymbol = mail.lastIndexOf(`.`);
    if (dotSymbol===mail.length-1) {
        errors.push(`(.) Dot Symbol Cannot Be The Last Index !`)
    }
    // valid @ symbol position --->
    let validAtSymbol = !(dotSymbol<=atSymbol+2);
    // valid dot symbol position -->
    let dot = !(dotSymbol===mail.length-1);
    let isValid = errors.length === 0 && validAtSymbol && dot;
    return{
        isValid : isValid,
        errors: errors
    }
}

export { emailValidator };