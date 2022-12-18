let cart_data=JSON.parse(localStorage.getItem("cart_product"));
let container=document.getElementById("cart_item");
let total=0;

let original=document.getElementById("original");
original.innerText=total;
let saving=document.getElementById("saving");
saving.innerText="-"+total*30/100;

let total_price=document.getElementById("pay_price")
total_price.innerText=total*70/100;
localStorage.setItem("total_price",total_price.innerText);

display_cart_data(cart_data)
function display_cart_data(data){
    container.innerHTML=null;
    total=0;
    data.forEach((element,index)=>{
        let count=1;
        let box=document.createElement("div");
        let img_div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);
        img_div.append(img);
        let div_name=document.createElement("div");
        div_name.innerText=element.category;
        let div_shipp=document.createElement("div");
        div_shipp.innerText="Shipping to 996939"
        let div_price=document.createElement("div");
        div_price.innerText=element.price;
        total+=element.price*count;
        let div_inc_dcr=document.createElement("div");
       let count_total=document.createElement("p");
       count_total.innerText="1";
        let increase=document.createElement("span");
        increase.innerText="+"
       
        increase.addEventListener("click",()=>{
          count++;
          count_total.innerText=count;
          total+=element.price;
          original.innerText=total
          saving.innerText="-"+total*30/100;
          total_price.innerText=total*70/100;
          localStorage.setItem("total_price",total_price.innerText);
        })
        let decrease=document.createElement("span");
        decrease.innerText="-"
        decrease.addEventListener("click",()=>{
            if( count_total.innerText>1){
                count--;
                count_total.innerText=count;
                total-=element.price;
                original.innerText=total
                saving.innerText="-"+total*30/100;
                total_price.innerText=total*70/100;
                localStorage.setItem("total_price",total_price.innerText);
            }
        })
        let button=document.createElement("button");
        button.innerText="REMOVE";
        button.addEventListener("click",()=>{
            total-=element.price* count_total.innerText;
            console.log(element.price, count_total.innerText)
            original.innerText=total
                saving.innerText="-"+total*30/100;
                total_price.innerText=total*70/100;
                localStorage.setItem("total_price",total_price.innerText);
            data.splice(index,1);
            localStorage.setItem("cart_product",JSON.stringify(data));
            display_cart_data(data); 
        });
        original.innerText=total
        saving.innerText="-"+total*30/100;
        total_price.innerText=total*70/100;
        
        div_inc_dcr.append(count_total ,increase,decrease,button);
        
        box.append(img_div,div_name,div_shipp,div_inc_dcr,div_price);
        container.append(box);
    });
}
localStorage.setItem("total_price",total_price.innerText);


