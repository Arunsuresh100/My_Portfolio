let git_svg=document.querySelector('.bi-github');
let whatsapp_svg=document.querySelector('.bi-whatsapp');
git_svg.addEventListener('click',()=>{
    window.open('https://github.com/Arunsuresh100');
});
whatsapp_svg.addEventListener('click',()=>{
    alert('working on it');
});
//
let menu1=document.querySelector('.menu');
let add_item=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>`;
let remove_item=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                  </svg>`;
let flag=0;
let menu_style=document.querySelector('.menu_option_resize');
menu1.addEventListener('click',()=>{
    flag++;
    if(flag%2==0)
    {
        menu_style.style.display='none';
        menu1.innerHTML=remove_item;
    }
    else{
        menu_style.style.display='block';
        menu1.innerHTML=add_item;
    }
});

window.addEventListener('resize',()=>{
    if(window.innerWidth>680)
    {
        menu_style.style.display='none';
        menu1.innerHTML=remove_item;
        flag=0;
    }
})

