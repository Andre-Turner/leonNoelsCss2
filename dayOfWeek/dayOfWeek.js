document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if (day === "tuesday" || day === "thursday" ) {
     alert('Class DAY!')
  }else if (day === "saturday" || day === "sunday"){
     alert('Weekend!')
  }else{
     alert('BORRRINGG!')
  }

}
