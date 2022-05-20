function processSelectedFiles(fileInput) {
       var files = fileInput.files;
       var d1 = document.getElementById('file__name');
     
       for (var i = 0; i < files.length; i++) {
         var fileOutPut = ("" + files[i].name);
       }
       d1.insertAdjacentHTML('afterbegin', fileOutPut + '</br>');
     }

function showItem(number) {
       const blockToShow = document.getElementById('descr'+[number]);
       const blockToWatch = document.getElementById(number);
       blockToShow.style.opacity = 1;
       blockToShow.style.transition = "opacity 1s";
       const f_fade = (() => { blockToShow.style.opacity = 0; });

       const f_unfade = (() => { blockToShow.style.opacity = 1; });
       blockToWatch.addEventListener("mouseout", f_fade , false);
       blockToWatch.addEventListener("mouseover", f_unfade , false);
}
 
