const fs = require('fs');


  const firstName = ['Adam', 'Wiktor', 'Borys', 'Antek']
  const lastName = ['Szpilka', 'Pazura', 'Duda', 'Gorniak']
  const firstNameF = ['Kasia', 'Marta', 'Ola', 'Ania']

 

  let renderName = []
  for(let i = 0; i<20; i++ ){
    let randomName = ''
    let randomLastname = lastName[Math.floor(Math.random()*lastName.length)]
    let age = Math.floor((Math.random()*60) +18)
    let gender = Math.random() < 0.5 ? 'M' : 'F'
    if(gender  == 'M'){
        randomName = firstName[Math.floor(Math.random()*firstName.length)]
    } else {
        randomName = firstNameF[Math.floor(Math.random()*firstNameF.length)]
    }
    renderName.push({name: randomName, lastname: randomLastname, age: age, gender: gender})
  }

  console.log(renderName)

  fs.writeFile('people.json', JSON.stringify(renderName), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  