let buttons=document.querySelectorAll('.btn');

 if(localStorage.getItem('products')===null){
 localStorage.setItem('products', JSON.stringify([]))
 }

 for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        let pr_name=e.target.previousElementSibling.previousElementSibling.innerHTML;
        let pr_price=e.target.previousElementSibling.innerHTML;
        let pr_image=e.target.parentElement.previousElementSibling.src;
        let pr_id=e.target.parentElement.parentElement.id;

        let basket= JSON.parse(localStorage.getItem('products'));
        let alert=document.querySelector('.alert')
        let exist_pr=basket.find(item => item.Id===pr_id);
        if(exist_pr===undefined){
            basket.push({
                Id:pr_id,
                Name:pr_name,
                Price: pr_price,
                Image:pr_image,
                Count:1,
                TotalPrice:pr_price
            })
            alert.style.right='50px'
            alert.innerHTML='Product successfully added...'
            setTimeout(() => {
                alert.style.right='-400px'
            }, 3000);
        }
        else{
         exist_pr.Count++;
         alert.style.right='50px'
         alert.style.background='rgb(253, 176, 148)'
         alert.innerHTML='Product already existed...'
         setTimeout(() => {
            alert.style.right='-400px'
         }, 3000);
        }
        
        
        localStorage.setItem('products', JSON.stringify(basket))
        ProductNumber();
    })
 }

 function ProductNumber(){
    let basket=JSON.parse(localStorage.getItem('products'))
    let count=document.querySelector('.count')
    count.innerHTML=basket.length;
 }
 ProductNumber()