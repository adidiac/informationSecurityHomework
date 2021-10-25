function send(event)
{
    event.preventDefault();
    let message=document.getElementById("inputul").value;
    let box=document.getElementById("box");
    let element=document.createElement("h5");
    element.style.color="black"
    element.style.backgroundColor="grey"
    document.getElementById("inputul").value='';
    element.innerHTML=message;
    box.appendChild(element);
    box.appendChild("br")
   
}