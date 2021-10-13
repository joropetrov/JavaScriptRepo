function solve() {
   let tableRow = document.querySelectorAll('tbody tr');
   let searchText = document.getElementById('searchField');
   let button = document.getElementById('searchBtn');
 
   button.addEventListener('click', searcFunc);

   function searcFunc(){
      let searchStr = searchText.value;
      tableRow.forEach(element => {
         element.classList.remove('select');
      });

      for (let index = 0; index < tableRow.length; index++) {
         let tableData = tableRow[index].childNodes;

         console.log(tableData)
         for (let j = 0; j < tableData.length; j++) {

            let currentTD = tableData[j].innerText;

            if (currentTD !== undefined) {

               if (currentTD.toLowerCase().includes(searchStr.toLowerCase())) {
                  if (searchStr == '') {
                     break;
                  }
                  tableRow[index].classList.add('select');
                  break;
               }
            }
         }
      }
   }
}