module.exports = function main(a) {
    console.log("Debug Info");
    var line1 = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."];
    var line2 = ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"];
    var line3 = ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"];    
    
    var len = a.length;
    var array = new Array(len);
    for (i = 0; i < len; i++) {
        array[i] = a.charAt(i);
    }
    var res1 = "";
    var res2 = "";
    var res3 = "";
    for (i = 0; i < len; i++) {
            res1 += line1[array[i]] + " ";
    }
    for (i = 0; i < len; i++) {
            res2 += line2[array[i]] + " ";
    }
    for (i = 0; i < len; i++) {
            res3 += line3[array[i]] + " ";
    }
    var res = res1.trim() + "\n" + res2.trim()+ "\n" + res3.trim() + "\n";
    console.log(res);
    return res;
};
