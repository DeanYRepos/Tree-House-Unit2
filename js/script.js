// global variables
const studentLi = document.querySelectorAll('li');
const itemsPerPage = 10;





//hides and shows student list items per page
const showPage = (list, page) => {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;

  for (let i = 0; i < list.length; i++) { 
    if (i >= startIndex && i < endIndex) {

      list[i].style.display = 'block';

    } else {
      list[i].style.display = 'none';

    }


  }


}







const appendPageLinks = (list) => {
  let pages = Math.ceil(list.length / itemsPerPage);
  let div = document.createElement('div');
  div.className = 'pagination';
  let divPage = document.querySelector('.page');
  divPage.appendChild(div);
  let ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 1; i <= pages; i++) { //iterating to add li and a to student list
    let li = document.createElement('li');
    ul.appendChild(li);
    let a = document.createElement('a');
    li.appendChild(a);
    a.innerHTML = i; // adding numbers to li
    a.href = '#';
    let firstA = document.querySelector('a');
    firstA.className = 'active';
    
    for (let j = 0; j < pages; j++) {
      a.addEventListener('click', (e) => { //event listener, listening for clicks to show content of selected pages 
        let allA = document.querySelectorAll('a');
        showPage(list, e.target.textContent);
       
          allA[j].classList.remove('active');
        


        e.target.className = 'active';

      });


    }
  }



}
appendPageLinks(studentLi); // calling append page function 
showPage(studentLi, 1); // displays page

