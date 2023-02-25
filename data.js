const dataGoods = `[
    {
        "src": "./img/good1.svg",
        "alt": "good1",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    },
    {
        "src": "./img/good2.svg",
        "alt": "good2",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    },
    {
        "src": "./img/good3.svg",
        "alt": "good3",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    },
    {
        "src": "./img/good4.svg",
        "alt": "good4",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    },
    {
        "src": "./img/good5.svg",
        "alt": "good5",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    },
    {
        "src": "./img/good6.svg",
        "alt": "good6",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    }
]`

const goods = document.querySelector('.goods');
const elementGood = JSON.parse(dataGoods);

elementGood.forEach(element => {
    const good = document.createElement('div');
    good.classList.add('good');
    goods.appendChild(good);

    const hoverEffectBtn = document.createElement('div');
    hoverEffectBtn.classList.add('hover-effect-btn');
    good.appendChild(hoverEffectBtn);

    const goodImage = document.createElement('img');
    goodImage.src = element.src;
    goodImage.setAttribute('alt', element.alt);
    hoverEffectBtn.appendChild(goodImage);

    const imageFilter = document.createElement('div');
    imageFilter.classList.add('image-filter');
    hoverEffectBtn.appendChild(imageFilter);

    const goodButton = document.createElement('button');
    goodButton.classList.add('good-button');
    hoverEffectBtn.appendChild(goodButton);

    const buttonImage = document.createElement('img');
    buttonImage.src = "./img/good-btn.svg";
    buttonImage.setAttribute('alt', "good-btn");
    goodButton.appendChild(buttonImage);

    const spanButton = document.createElement('span');
    spanButton.classList.add('good-button-text');
    spanButton.textContent = "Add to Cart";
    goodButton.appendChild(spanButton);

    const textGood = document.createElement('div');
    textGood.classList.add('text-good');
    good.appendChild(textGood);

    const goodName = document.createElement('h2');
    goodName.textContent = element.name;
    textGood.appendChild(goodName);

    const goodInfo = document.createElement('p');
    goodInfo.classList.add('description');
    goodInfo.textContent = element.info;
    textGood.appendChild(goodInfo);

    const goodPrice = document.createElement('p');
    goodPrice.classList.add('price');
    goodPrice.textContent = `$${element.price}`;
    textGood.appendChild(goodPrice);
});