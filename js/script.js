const ques = [
    {
        que: 'Enter an array from user and display all the value',
        loc: '',
        type: 'Array'
    },
    {
        que: 'Enter an array from user and print the array in reverse order',
        loc: '',
        type: 'Array'
    },
    {
        que: 'Enter an array from user and copy the array into second array',
        loc: '',
        type: 'Array'
    },
    {
        que: 'Enter an array from user and copy it into another array in reverse order',
        loc: '',
        type: 'Array'
    },
    {
        que: 'Enter an array from user and print the number which is even',
        loc: '',
        type: 'Array'
    },
    {
        que: 'Enter an array from user and print the number which is positive',
        loc: '',
        type: 'Array'
    }
];

var txtbox = document.getElementById('search-input');
var searchlist = document.getElementById('search-list');
var resultdiv = document.getElementById('search-result')

txtbox.onkeyup = ()=>{
    if(txtbox.value == ""){
        resultdiv.classList.remove("d-block")
        resultdiv.classList.add("d-none")
    }
    else{
        resultdiv.classList.remove("d-none")
        resultdiv.classList.add("d-block")
    }
    searchlist.innerHTML=''
    const newList = ques.filter(q => q.que.toLowerCase().match(txtbox.value.toLowerCase()));
    if(newList.length == 0){
        searchlist.innerHTML += `<p>No Results</p>`;
    }
    newList.forEach(q => {
        searchlist.innerHTML += `<li><a href="">${q.que}</a></li>`;
    });
}