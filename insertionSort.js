const runner = (X) => {
const Y = [X[0]];
let h=t=0, insertPosition;
for(let i=1;i<X.length;i++){
    Y[i]=-1;
}

X.slice(1,).forEach((x)=>{
    if(t>=h){
        insertPosition=h;
        while(insertPosition<=t && Y[insertPosition]<x){
            insertPosition+=1;
        }
        if(t-insertPosition+1<=insertPosition-h){
            j=t;
            while(j>=insertPosition){
                Y[j+1]=Y[j];
                j-=1;
            }
            Y[insertPosition]=x;
            t+=1;
        }else{
            if(insertPosition!=0){
                Y[X.length-1]=Y[0];
                j=1;
                while(j<insertPosition){
                    Y[j-1]=Y[j];
                    j+=1;
                }
                Y[insertPosition-1]=x;
                h=X.length-1;
            }else{
                Y[X.length-1]=x;
                h=X.length-1;
            }
        }
    }else{
        insertPosition=h;
        while(insertPosition<X.length && Y[insertPosition]<x){
            insertPosition+=1;
        }
        if(insertPosition!=X.length){
            if(X.length-insertPosition+t+1<=insertPosition-h){
                j=t;
                while(j>=0){
                    Y[j+1]=Y[j];
                    j-=1;
                }
                Y[0]=Y[X.length-1];
                j=X.length-2;
                while(j>=insertPosition){
                    Y[j+1]=Y[j];
                    j-=1;
                }
                Y[insertPosition]=x;
                t+=1;
            }else{
                j=h;
                while(j<insertPosition){
                    Y[j-1]=Y[j];
                    j+=1;
                }
                Y[insertPosition-1]=x;
                h-=1;
            }
        }else{
            insertPosition=0;
            while(insertPosition<=t && Y[insertPosition]<x){
                insertPosition+=1;
            }
            if(t-insertPosition+1<=X.length-h+insertPosition){
                j=t;
                while(j>=insertPosition){
                    Y[j+1]=Y[j];
                    j-=1;
                }
                Y[insertPosition]=x;
                t+=1;
            }else{
                    //check for 0
                    j=h;
                    while(j<X.length){
                        Y[j-1]=Y[j];
                        j+=1;
                    }
                    if(insertPosition!=0){
                    Y[X.length-1]=Y[0];
                    j=1;
                    while(j<insertPosition){
                        Y[j-1]=Y[j];
                        j+=1;
                    }
                    Y[insertPosition-1]=x;
                    h-=1;
                    }else{
                        Y[X.length-1]=x;
                        h-=1;
                    }
            }
        }
    }
    // console.log(Y);
    // console.log(h);
    // console.log(t);
});
return Y;
}

// runner([25, 57, 37, 48, 12, 92, 86, 33]);

module.exports = runner;