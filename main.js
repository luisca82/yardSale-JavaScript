const usernav = document.querySelector(".navbar-email");
const usermenu = document.querySelector(".desktop-menu");
const hamMenu = document.querySelector(".ham-menu");
const verticalMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const aside_product_detail = document.querySelector(".product-detail");
const cardConteiner = document.querySelector('.cards-container');

usernav.addEventListener('click',toggleMenu);
hamMenu.addEventListener('click',toggleHamMenu);
shoppingCartIcon.addEventListener('click',toggleProductDetail);

function toggleMenu(){
    const isAside_product_detailClosed = aside_product_detail.classList.contains('inactive');

    if(!isAside_product_detailClosed){
        aside_product_detail.classList.add('inactive');
    }

    usermenu.classList.toggle('inactive');
}

function toggleHamMenu(){
    const isAside_product_detailClosed = aside_product_detail.classList.contains('inactive');

    if(!isAside_product_detailClosed){
        aside_product_detail.classList.add('inactive');
    }
    verticalMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
    const isVerticalMenuClosed = verticalMenu.classList.contains('inactive');
   
    
    //console.log(isAside_product_detailClosed+" "+isVerticalMenuClosed);
    if (!isVerticalMenuClosed) { 
        verticalMenu.classList.add('inactive');
    }else if(!usermenu.classList.contains('inactive')){
        usermenu.classList.add('inactive');
    }

    aside_product_detail.classList.toggle('inactive');

}

const product_catalog=[];

for(let i=0;i<10;i++){
    /* console.log(i);*/
    product_catalog.push(
        {
            name:'Bike',
            price: Math.floor(Math.random() * 1000),
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',


        }
    );
}

function renderProduct(arr){
    for (product of arr){
        /*
            CreateElement(); Crea un elemento html
            variableElemento ClassList.add(); Le agrega una clase a este.
            .append(elemento1,elemento2,...) adjunta los elementos html
        */

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productDetail = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const cardFigure = document.createElement('figure');
        const iconCard = document.createElement('img');
        iconCard.setAttribute('src','./icons/bt_add_to_cart.svg');
        cardFigure.appendChild(iconCard);


        productDetail.append(productPrice,productName,cardFigure);
        productInfo.appendChild(productDetail);
        productCard.append(productImg,productInfo);
        
        cardConteiner.appendChild(productCard);
    }
}

renderProduct(product_catalog);