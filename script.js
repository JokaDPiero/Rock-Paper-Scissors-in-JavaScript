function rpsgame(choice)
{
    var humanchoice,botchoice;
    humanchoice=choice.id;
    botchoice=botchose(randtonum());
    results=decidewinner(humanchoice,botchoice);
    message=getmessage(results);
    rpsfrontend(humanchoice,botchoice,message);
}
function randtonum()
{
    return Math.floor(Math.random()*3);
}
function botchose(number)
{
    return ['rock','paper','scissor'][number];
}
function decidewinner(yourchoice,compchoice)
{
    var rpsdatabase={
        "rock":{"rock":0.5,"paper":0,"scissor":1},
        "paper":{"rock":1,"paper":0.5,"scissor":0},
        "scissor":{"rock":0,"paper":1,"scissor":0.5},
    };

    var yourscore=rpsdatabase[yourchoice][compchoice];
    var compscore=rpsdatabase[compchoice][yourchoice];
    
    return [yourscore,compscore];
}
function getmessage([yourscore,compscore])
{
    if(yourscore===1){
        return {"message" :"You Won!!!", "color":"green"};
    }
    else if(yourscore==0.5){
        return {"message" :"You Tied!!!", "color":"yellow"};
    }
    else {
        return {"message" :"You Lost!!!", "color":"red"};
    }
}
function rpsfrontend(yourchoice,botchoice,message)
{
    var imgdatabase={
        "rock":document.getElementById('rock').src,
        "paper":document.getElementById('paper').src,
        "scissor":document.getElementById('scissor').src,
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();  

    var humandiv=document.createElement("div");
    var botdiv=document.createElement("div");
    var messagediv=document.createElement("div");

    humandiv.innerHTML="<img src='"+imgdatabase[yourchoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    botdiv.innerHTML="<img src='"+imgdatabase[botchoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
    messagediv.innerHTML="<h1 style='color:"+message['color']+"' align-text: center padding:60px font-size=30px>"+message['message']+"</h1>";

    document.getElementById("flex-box-rps").appendChild(humandiv);
    document.getElementById("flex-box-rps").appendChild(messagediv);
    document.getElementById("flex-box-rps").appendChild(botdiv);
}
