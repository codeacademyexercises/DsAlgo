const runner = (X) => {
    if(X.length<2){
        // console.log(X);
        return X;
    }
    const Y = [X[0]];
    let h=t=0, insertPosition;
    for(let index=1;index<X.length;index++){
        Y[index]=-1;
    }

    X.slice(1,).forEach((element)=>{
        if(t>=h){
            insertPosition=h;
            while(insertPosition<=t && Y[insertPosition]<element){
                insertPosition+=1;
            }
            if(t-insertPosition+1<=insertPosition-h){
                index=t;
                while(index>=insertPosition){
                    Y[index+1]=Y[index];
                    index-=1;
                }
                Y[insertPosition]=element;
                t+=1;
            }else{
                if(insertPosition!=0){
                    Y[X.length-1]=Y[0];
                    index=1;
                    while(index<insertPosition){
                        Y[index-1]=Y[index];
                        index+=1;
                    }
                    Y[insertPosition-1]=element;
                    h=X.length-1;
                }else{
                    Y[X.length-1]=element;
                    h=X.length-1;
                }
            }
        }else{
            insertPosition=h;
            while(insertPosition<X.length && Y[insertPosition]<element){
                insertPosition+=1;
            }
            if(insertPosition!=X.length){
                if(X.length-insertPosition+t+1<=insertPosition-h){
                    index=t;
                    while(index>=0){
                        Y[index+1]=Y[index];
                        index-=1;
                    }
                    Y[0]=Y[X.length-1];
                    index=X.length-2;
                    while(index>=insertPosition){
                        Y[index+1]=Y[index];
                        index-=1;
                    }
                    Y[insertPosition]=element;
                    t+=1;
                }else{
                    index=h;
                    while(index<insertPosition){
                        Y[index-1]=Y[index];
                        index+=1;
                    }
                    Y[insertPosition-1]=element;
                    h-=1;
                }
            }else{
                insertPosition=0;
                while(insertPosition<=t && Y[insertPosition]<element){
                    insertPosition+=1;
                }
                if(t-insertPosition+1<=X.length-h+insertPosition){
                    index=t;
                    while(index>=insertPosition){
                        Y[index+1]=Y[index];
                        index-=1;
                    }
                    Y[insertPosition]=element;
                    t+=1;
                }else{
                        //check for 0
                        index=h;
                        while(index<X.length){
                            Y[index-1]=Y[index];
                            index+=1;
                        }
                        if(insertPosition!=0){
                        Y[X.length-1]=Y[0];
                        index=1;
                        while(index<insertPosition){
                            Y[index-1]=Y[index];
                            index+=1;
                        }
                        Y[insertPosition-1]=element;
                        h-=1;
                        }else{
                            Y[X.length-1]=element;
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

// runner([1]);

module.exports = runner;