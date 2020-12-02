const functions = {
    //Translate 0-100 value to [-180,180]
    handleSlide:(x) => {

        if(x<0 || x>100 || Number.isInteger(x) === false){
            return null;
        }
    
        if(x>=50){
            x = x-50;
            x = x*3.6;
        }else if(x<50){
            x = 50-x;
            x = x*3.6;
            x = x-(x*2);
        }
        return x;
    },
    //Translate 0-100 value to [-30,30]
    handleSlideY:(y) => {

        if(y<0 || y>100 || Number.isInteger(y) === false){
            return null;
        }

        if(y>=50){
            y = y-50;
            y = y*0.6;
        }else if(y<50){
            y = 50-y;
            y = y*0.6;
            y = y-(y*2);
        }
        return y;
    },
    //Truncate input string to match a classification name in classification.js
    //Input strings are taken from recclass in returned json object from API
    //Truncated strings should match to a definition and are cut based on charachters from breakchars array
    //Input strings containing Iron are an exception, this function has been modified from original to include exception preparation
    //All posible cases have not been covered in this function E.g. CBa (should return CB) is expected to fail.
    checkBreaks:(s)=>{

        if(typeof s !== "string"){
            return false;
        }


        var chars = [];
        var clsi2 = "";
        var clso = "";
        var clst = "";
        const breakchars = ['0','1','2','3','4','5','6','7','8','9','-','~',' ','/','.',',','?'];

        if(s.indexOf('Iron')>-1){
            if(s.indexOf("?")>-1 || s.indexOf("ungrouped")>-1 || s.length===4){
                clso = "Iron";
                return clso;
            }else if(s.charAt("4")===","){
                for(var i=6;i<s.length;i++){
                    clst += s.charAt(i);
                }
                s = clst;
            }
        }

        for(var i=0;i<breakchars.length;i++){
            if(s.indexOf(breakchars[i])>-1){
                chars += breakchars[i];
            }
        }

        if(chars.length>0){

        for(var i=0;i<chars.length;i++){
            for(var j=0;j<s.length;j++){
                if(s.charAt(j) !== chars[i]){
                    clsi2 += s.charAt(j);
                }else{
                    j += 10;
                    s = clsi2;
                    clsi2 = "";
                }
                
            }
        }
    }
        clso = s;
        return clso;
}
};

export default functions;

    
