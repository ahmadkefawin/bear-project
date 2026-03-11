function achoice(){
    document.querySelector("#correctness").innerHTML="incorrect";
    document.querySelector("#a").style.backgroundColor = "red"
}
function bchoice(){
document.querySelector("#correctness").innerHTML="incorrect";
document.querySelector("#b").style.backgroundColor = "red"
}
function cchoice(){
    document.querySelector("#correctness").innerHTML="incorrect";
    document.querySelector("#c").style.backgroundColor = "red"
}
function dchoice(){
    document.querySelector("#correctness").innerHTML="correct";
    document.querySelector("#d").style.backgroundColor = "green"
}
function answered()
{
    let n=document.querySelector("#answer").value;
    n=n.toLowerCase();
    if(n==="arctic"||n==="greenland"||n==="canada"||n==="alaska"||n==="russia"||n==="norway"){
        document.querySelector("#answer").style.backgroundColor = "green"
        document.querySelector("#correctnesses").innerHTML="correct!";
    }
    else
        {
            document.querySelector("#answer").style.backgroundColor = "red"
            document.querySelector("#correctnesses").innerHTML="incorrect";
        }
}
