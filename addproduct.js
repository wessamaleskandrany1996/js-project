
function add(object) {
    var x=JSON.parse(localStorage.getItem('allProduct'))
    var storedArr=JSON.parse(localStorage.getItem('allProduct'));
    console.log(storedArr);
       storedArr.push(object);
      window.localStorage.setItem("products", JSON.stringify(storedArr));
  console.log(object);

  }
