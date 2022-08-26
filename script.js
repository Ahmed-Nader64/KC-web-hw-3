
let Watches = [];

function addCard1() {

    let newcard ={
        img:"./firstWatch.png", name:"Damas Sport Watch 1", price:120 
    };
    Watches.push(newcard);
    load()
}

function load() {

    let cart = document.getElementById("cart");
        cart.innerHTML="";
        Watches.forEach(watch => {
        document.getElementById("cart").innerHTML +=`
        <div class="card_cart">
                <img src="${watch.img}" alt="watch1" width="250px">
                <div class="colunm">
                    <h2>${watch.name}</h2>
                    <p>${watch.price} kwd</p>
                    <button onclick="del1()">${"remove"}</button>
                </div>
            </div>
        `
    });  
}
function del1() {

    Watches.pop();
    load();
    
    }
    function addCard2() {

        let newcard ={
            img:"./firstWatch.png", name:"Damas Sport Watch 2", price:143 
        };
        Watches.push(newcard);
        load()
    }
    
    function load() {
    
        let cart = document.getElementById("cart");
            cart.innerHTML="";
            Watches.forEach(watch => {
            document.getElementById("cart").innerHTML +=`
            <div class="card_cart">
                    <img src="${watch.img}" alt="watch1" width="250px">
                    <div class="colunm">
                        <h2>${watch.name}</h2>
                        <p>${watch.price} kwd</p>
                        <button onclick="del2()">${"remove"}</button>
                    </div>
                </div>
            `
        });  
    }
    function del2() {
    
        Watches.pop();
        load();
        
        }
        function addCard3() {

            let newcard ={
                img:"./firstWatch.png", name:"Damas Sport Watch 3", price:161 
            };
            Watches.push(newcard);
            load()
        }
        
        function load() {
        
            let cart = document.getElementById("cart");
                cart.innerHTML="";
                Watches.forEach(watch => {
                document.getElementById("cart").innerHTML +=`
                <div class="card_cart">
                        <img src="${watch.img}" alt="watch1" width="250px">
                        <div class="colunm">
                            <h2>${watch.name}</h2>
                            <p>${watch.price} kwd</p>
                            <button onclick="del3()">${"remove"}</button>
                        </div>
                    </div>
                `
            });  
        }
        function del3() {
        
            Watches.pop();
            load();
            
            }