let home=document.querySelector('#home')
let guest = document.querySelector('#guest')
let count = 0
let count2 = 0
function increment1h() { 
    count = count + 1
    home.textContent = count;
}
function increment2h() { 
    count = count + 2
    home.textContent = count;
}
function increment3h() { 
    count = count + 3
    home.textContent = count;
}
function increment1g() { 
    count2 = count2 + 1
    guest.textContent = count2;
}
function increment2g() { 
    count2 = count2 + 2
    guest.textContent = count2;
}
function increment3g() { 
    count2 = count2 + 3
    guest.textContent = count2;
}
