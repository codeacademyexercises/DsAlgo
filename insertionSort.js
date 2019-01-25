const runner = (X) => {
const Y = [X[0]];
let h=t=0, insertPosition;
for(let i=1;i<X.length;i++){
    Y[i]=-1;
}

X.slice(1,).forEach((x)=>{
    if(t>=h){
        let i=t;
        while(i>=h && Y[i]>x){
            i-=1;
        }
        if(t-i>i+1){
            if(i!=-1){
            Y[X.length-1]=Y[0];
            for(let j=1;j<=i;j++){
                Y[j-1]=Y[j];
            }
            Y[i]=x;
            h=X.length-1;
            }else{
                Y[X.length-1]=x;
                h=X.length-1;
            }
        }else{
            for(let j=t;j>i;j--){
                Y[j+1]=Y[j];
            }
            Y[i+1]=x;
            t+=1;
        }
    }else{
        let i=t;
        while(i>=0 && Y[i]>x){
            i-=1;
        }
        if(i==-1){
            i=h;
            while(i<X.length && Y[i]<x){
                i++;
            }
            if(t+X.length-i>=i-h+1){
                j=h;
                while(j<i){
                    Y[j-1]=Y[j];
                    j++;
                }
                Y[i-1]=x;
                h-=1;
            }else{
                j=t;
                while(j>=0){
                    Y[j+1]=Y[j];
                    j-=1;
                }
                Y[0]=Y[X.length-1];
                j=X.length-1;
                while(j>=i){
                    Y[j-1]=Y[j];
                    j-=1;
                }
                Y[i]=x;
                t+=1;
            }
        }else{
            if(t-i<=X.length-h+i+1){
                j=t;
                while(j>i){
                    Y[j+1]=Y[j];
                    j-=1;
                }
                Y[i+1]=x;
                t+=1;
            }else{
                j=h;
                while(j<X.length){
                    Y[j-1]=Y[j];
                    j+=1;
                }
                Y[X.length-1]=Y[0];
                j=0;
                while(j<i){
                    Y[j]=Y[j+1];
                    j+=1;
                }
                Y[i]=x;
                h-=1;
            }
        }
        
    }
    console.log(Y);
});
return Y;
};

module.exports = runner;