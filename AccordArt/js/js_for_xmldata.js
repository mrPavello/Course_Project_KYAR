document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('goods.xml');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const xmlData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

        const digitalPianos = xmlDoc.querySelector('digital_pianos');
        
        const cardProductClasses = ['.card_product_1', '.card_product_2', '.card_product_3', '.card_product_4', 
        '.card_product_5', '.card_product_6', '.card_product_7', '.card_product_8'];

        for (let i = 0; i < cardProductClasses.length; i++) {
            const productFromXML = digitalPianos.querySelector(`product_${i + 1}`);
            const imageAddress = productFromXML.querySelector('image').textContent;
            const priceFromXML = productFromXML.querySelector('price').textContent;
            const statusFromXML = productFromXML.querySelector('status').textContent;
            const nameFromXML = productFromXML.querySelector('name').textContent;

            const cardProduct = document.querySelector(cardProductClasses[i]);
            cardProduct.querySelector('#image_product img').src = imageAddress;
            cardProduct.querySelector('#price').innerHTML = priceFromXML;
            cardProduct.querySelector('#status').innerHTML = statusFromXML;
            cardProduct.querySelector('#name').innerHTML = nameFromXML;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
