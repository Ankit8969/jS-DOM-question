// Selecting the body, because every element should be inside the body
let body = document.body;
let CartList = [];
// creating the navbar

const updateInnerCartText = ()=>{
    cartSpan.innerText = CartList.length;
}

const handleAddToCart = (item)=>{
    CartList.push([...CartList,item]);
    updateInnerCartText();
}

let navTag = document.createElement('nav');
navTag.classList.add('navbar');
    let spanLogo  = document.createElement('span');
    let logoName = document.createTextNode('My Shop');
    spanLogo.appendChild(logoName);

    let Links = document.createElement('div');
    let link1 = document.createElement('a');
        link1.innerHTML = "Products";
        link1.href="abc.com";
    let link2 = document.createElement('a');
    let cartSpan = document.createElement('span');
        cartSpan.classList.add('cartTag')
        link2.innerText = "Cart";
        link2.href = "def.com";
        updateInnerCartText();
    link2.appendChild(cartSpan);
    Links.appendChild(link1);
    Links.appendChild(link2);
    Links.classList.add('links')
navTag.appendChild(spanLogo);
navTag.appendChild(Links);
body.appendChild(navTag);


// now It's time to make the cards for book;
let arrList = [
    {
        id:1,
        heading:"Educart CBSE Class 10 Sample Paper 2022 23 SOCIAL SCIENCE for kids",
        publication: "English, Paperback, Educart",
        rating: 4.3,
        numUser: 714,
        price: 298,
        discount:3,
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/book/k/s/g/-original-imaggyewppgjzhuc.jpeg?q=70"
    },
    {
        id:2,
        heading:"Blossom Jumbo Creative Colouring Book For Kids | 5 to 7",
        publication: "Paperback, Content Team at Target Publications",
        rating: 4.4,
        numUser: 1113,
        price: 180,
        discount:4,
        image: "https://rukminim1.flixcart.com/image/612/612/kyj0vbk0/regionalbooks/w/g/b/-original-imagaqqnfuxhhdcm.jpeg?q=70"
    },
    {
        id:3,
        heading:"World’s Greatest Classics (Box Set of 4 Books)",
        publication: "English, Paperback, Educart",
        rating: 4.3,
        numUser: 714,
        price: 386,
        discount:10,
        image: "https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id:4,
        heading:"Educart CBSE Class 10 Sample Paper 2022 23 SOCIAL SCIENCE for kids",
        publication: "English, Paperback, Educart",
        rating: 4.3,
        numUser: 714,
        price: 298,
        discount:3,
        image: "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id:5,
        heading:"Life's Amazing Secrets: How to Find Balance and Purpose in Your Life",
        publication: "English, Paperback, Educart",
        rating: 4.3,
        numUser: 714,
        price: 298,
        discount:3,
        image: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id:6,
        heading:"Educart CBSE Class 10 Sample Paper 2022 23 SOCIAL SCIENCE for kids",
        publication: "English, Paperback, Educart",
        rating: 4.3,
        numUser: 714,
        price: 298,
        discount:3,
        image: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id:7,
        heading:"Educart CBSE Class 10 Sample Paper 2022 23 SOCIAL SCIENCE for kids",
        publication: "English, Paperback, Educart",
        rating: 4.3,
        numUser: 714,
        price: 298,
        discount:3,
        image: "https://m.media-amazon.com/images/I/310ILDQr5lL._AC_UY360_FMwebp_QL65_.jpg"
    },
    {
        id:8,
        heading:"Educart CBSE Class 10 Sample Paper 2022 23 SOCIAL SCIENCE for kids",
        publication: "English, Paperback, Educart",
        rating: 4.3,
        numUser: 714,
        price: 298,
        discount:3,
        image: "https://m.media-amazon.com/images/I/81StezluKUS._AC_UY436_FMwebp_QL65_.jpg"
    },
]

let section = document.createElement('section');
section.classList.add("main-box");
section.innerHTML = "";
    arrList.forEach((item)=>{
        let cardBody = document.createElement('div');
        cardBody.classList.add('cardBox');
        // image section
        let cardImage = document.createElement('div');
        cardImage.classList.add('image-box')
        let ImageTag = document.createElement('img');
        ImageTag.classList.add('image');
        ImageTag.src = item.image ;
        cardImage.appendChild(ImageTag);
        // details section
        let cardDetails = document.createElement('div');
            let heading = document.createElement('p');
            heading.innerText = item.heading;
            // publication Row
            let publication = document.createElement('div');
                publication.innerText = item.publication;
                publication.classList.add('mute');
                publication.classList.add('publication');
                let ratingRow = document.createElement('div');
                let rating = document.createElement('span');
                    rating.innerText = item.rating;
                    rating.classList.add('tag');
                let numberofRating = document.createElement('span');
                    numberofRating.innerText = `(${item.numUser})`;
                    numberofRating.classList.add('no-of-rating');
                let button = document.createElement('button');
                button.classList.add('buy-button');
                button.addEventListener("click",()=>handleAddToCart(item));
                button.innerText = "Buy";
            ratingRow.appendChild(rating);
            ratingRow.appendChild(numberofRating);
            ratingRow.appendChild(button);
            // Price Row
            let PriceRow = document.createElement('div');
                PriceRow.classList.add('price-row');
                let discount = item.discount;
                let nowPrice = item.price - (item.price*item.discount/100);
                let discountedPrice = document.createElement('span');
                    discountedPrice.innerText = "₹" + nowPrice;
                    discountedPrice.style.fontWeight = "bold";
                let price = document.createElement('span');
                    price.innerText = "₹" + item.price;
                    price.style.textDecoration = "line-through";
                    price.classList.add('mute');
                let discountTag = document.createElement('span');
                    discountTag.innerText = discount + "% off";
                    discountTag.style.color = "green";
            PriceRow.appendChild(discountedPrice);
            PriceRow.appendChild(price);
            PriceRow.appendChild(discountTag);
        cardDetails.appendChild(heading);
        cardDetails.appendChild(publication);
        cardDetails.appendChild(ratingRow);
        cardDetails.appendChild(PriceRow);

        cardBody.appendChild(cardImage);
        cardBody.appendChild(cardDetails);
        section.appendChild(cardBody);
    })
body.appendChild(section);


// Cart Section
