const form = document.querySelector("#searchForm");
const res = document.querySelector("#rrr");

console.log("ASDD");
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const ctype = form.elements.coinType.value;
    
    fetchPrice(ctype);
});

const fetchPrice= async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    
    console.log(r)
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base  = r.data.coin.name;
    const target = 'USD';

    rrr.innerHTML = `${price}`;

}

