//this functio takes in the data from index and compares thier instance names for the card creation
const generateCards = (teamData) =>{
  let tempArr = [];

  for(let i = 0;i<teamData.length;i++)
  {
   if(teamData[i].constructor.name === "Manager")
   {
    tempArr.push(`<div class="card">
   <div class="card-header">
     ${teamData[i].getRole()}
   </div>
   <div class="card-body">
     <h5 class="card-title">${teamData[i].getName()}</h5>
     <p class="card-text">${teamData[i].getId()}</p>
     <a href="mailto: ${teamData[i].getEmail()}" class="btn btn-primary">Send Email</a>
   </div>
 </div>.`);
  }
  else if(teamData[i].constructor.name === "Engineer")
  {
    tempArr.push(`<div class="card">
   <div class="card-header">
     ${teamData[i].getRole()}
   </div>
   <div class="card-body">
     <h5 class="card-title">${teamData[i].getName()}</h5>
     <p class="card-text">${teamData[i].getId()}</p>
     <a href="mailto: ${teamData[i].getEmail()}" class="btn btn-primary">Send Email</a>
     <a href="https://github.com/${teamData[i].getGithub()}" target="_blank" class="btn btn-primary">GitHub</a>
   </div>
 </div>.`);
  }
  else if(teamData[i].constructor.name === "Intern")
  {
    tempArr.push(`<div class="card">
   <div class="card-header">
     ${teamData[i].getRole()}
   </div>
   <div class="card-body">
     <h5 class="card-title">${teamData[i].getName()}</h5>
     <p class="card-text">${teamData[i].getId()}</p>
     <p class="card-text">${teamData[i].getSchool()}</p>
     <a href="mailto: ${teamData[i].getEmail()}" class="btn btn-primary">Send Email</a>
   </div>
 </div>.`);
  }
}
  console.log(tempArr);
  return tempArr;

};

//the HTML file template
module.exports = (dataArr)=>
{
  console.log(dataArr);

    return `
    <!DOCTYPE HTML>
    <html lang="en">
    <head>
        <meta charset='UTF-8'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
      <h1>Team Profiles<h2>
    </header>

    <div>${generateCards(dataArr)}<div>
    
    <footer class="container text-center py-3">
      <p>Made by Mohammad Komol Hasan<p>
      <p>GitHub:<a href="https://github.com/MKHLink">MKHLink</a><p>
    </footer>
  </body>
  </html>`;
}