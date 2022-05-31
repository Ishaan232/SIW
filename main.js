function aeoyc(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j9ejo4kq7/model.json',model);
}
function model(){
    x.classify(results);
}
function results(e,r){
    if(e){
        console.log(e);
    }
    else{
        console.log(r);
        red=Math.floor(Math.random()*255)+1;
        blue=Math.floor(Math.random()*255)+1;
        green=Math.floor(Math.random()*255)+1;
        document.getElementById("gittt").innerHTML="I can hear "+r[0].label;
        document.getElementById("gittt").style.color="rgb("+red+","+blue+","+green+")";
        document.getElementById("idk").innerHTML="Accuracy "+Math.floor(r[0].confidence*100)+"%";
        document.getElementById("idk").style.color="rgb("+red+","+blue+","+green+")";
        s1=document.getElementById("alien1");
        s2=document.getElementById("alien2");
        s3=document.getElementById("alien3");
        s4=document.getElementById("alien4");
        if(r[0].label == "Clap"){
s1.src="aliens-01.gif";
s2.src="aliens-02.png";
s3.src="aliens-03.png";
s4.src="aliens-04.png";
        }
       else if(r[0].label == "Smack"){
            s1.src="aliens-01.png";
            s2.src="aliens-02.gif";
            s3.src="aliens-03.png";
            s4.src="aliens-04.png";
                    }
                  else if(r[0].label == "Tap"){
                        s1.src="aliens-01.png";
                        s2.src="aliens-02.png";
                        s3.src="aliens-03.gif";
                        s4.src="aliens-04.png";
                                }
                             else{
                                    s1.src="aliens-01.png";
                                    s2.src="aliens-02.png";
                                    s3.src="aliens-03.png";
                                    s4.src="aliens-04.gif";
                                            }
    }
}