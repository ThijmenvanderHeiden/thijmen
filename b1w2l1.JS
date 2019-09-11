window.alert("welkom bij de lokale pizzaria wat wilt u?");//zet een window neer van hey welkom bij de pizzaria
var kleinepizza = prompt("hoeveel kleine pizza's neem je 2,-",); //deze en de 2 eronder vragen hoeveel pizzas je wilt met de prijs erbij
var normalepizza = prompt("hoeveel normale pizza's 10,-",);
var grotepizza = prompt("hoeveel grote pizza's neemt u 20,-");
document.write('kleinepizza : ' + kleinepizza);// zet neer 
document.write('<br/>')
document.write('normalepizza : ' + normalepizza);
document.write('<br/>')
document.write('grotepizza : ' + grotepizza);
document.write('<br/>')
document.write("kleine pizza " + kleinepizza * 2 + "$");
document.write('<br/>')
document.write("normale pizza " + normalepizza * 10 + "$");
document.write('<br/>')
document.write("grote pizza " + grotepizza * 20 + "$");
document.write('<br/>')
var totaal = kleinepizza * 2 + normalepizza * 10 + grotepizza * 20;
document.write("totaal " + totaal + "$")