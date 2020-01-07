var ArchiveList = [];

ArchiveList.push(
    {
        Title : "JGDS Newsletter #23 - Game Developers Showcase at Kingston Artwalk, The $0 Marketing Game Guide and Genre Viability on Steam!",
        date : "26/12/2019",
        path: "Archive/NewslettersTOPIC.html" // PopulateContent TEmplate and put link here 
    }
    ,
    {
        Title : "TITLE HERE",
        date : "DATE HERE",
        path: "PATH HERE"
    }
    ,
    {
        Title : "TITLE HERE",
        date : "DATE HERE",
        path: "PATH HERE"
    }
    ,
    {
        Title : "TITLE khgjHERE",
        date : "DATE HERE",
        path: "PATH HERE"
    }
    
)

var pageNumber = 1;
var ResultsPerPage = 2;
NavigatePages(0);

function NavigatePages(direction) {
    

    if((pageNumber+direction)<1){
        return;
    }
    if((pageNumber+direction)>(Math.ceil((ArchiveList.length/ResultsPerPage)))){
        return;
    }

    var container = document.getElementById("ArchiveContainer");
    container.innerHTML = "";
    pageNumber+=direction;

    

    var PageNumberText = document.getElementById("PageNumber");

    PageNumberText.innerHTML = pageNumber;

    var start = (pageNumber * ResultsPerPage) - ResultsPerPage;
    var end = pageNumber * ResultsPerPage;

    if(end > ArchiveList.length){
        end = ArchiveList.length
    }

    var c = 0;

    for(c = end+1; c > start-1; c--){

        var div = document.createElement('div');
        div.className = "ArchiveDisplay";
        
        var link = document.createElement('a');
        link.href = ArchiveList[c].path;
        var title = document.createElement('p');
        var date = document.createElement('p');
        title.innerHTML = ArchiveList[c].Title;
        title.className = "ArchiveDisplayTitle";
        
        date.innerHTML = ArchiveList[c].date;

        div.appendChild(link);
        div.appendChild(date);
        link.appendChild(title);
        
        container.appendChild(div);
    }
}