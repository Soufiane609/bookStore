let  book_id;
let book_title;
let author;
let price;
let quantity;
let bookstore=[];
let i=0;




function add(book_id,book_title,author,price,quantity){

    
    bookstore[i]=[book_id,book_title,author,price,quantity];
    i++;
    
}
function About(book_id,book_title,author){
    for(i=0;i<bookstore.length;i++){
        if(bookstore[i][0]==book_id || bookstore[i][1]==book_title ||bookstore[i][2]==author ){
            console.log("les informations sur le livre que vous chercher : ")
            
            console.log('l\'id est       : '+bookstore[i][0]);
            console.log('le titre est   : '+bookstore[i][1]);
            console.log('l\'auteur est   : '+bookstore[i][2]);
            console.log('le prix est    : '+bookstore[i][3]);
            console.log('la quantité est: '+bookstore[i][4]);
        
        }
    }


}

function sale(book_title,quantityofBook,balance){
    


    for(i=0;i<bookstore.length;i++){
        if(bookstore[i][1]==book_title || bookstore[i][4]>=quantityofBook ||bookstore[i][3]*quantityofBook <=balance ){
            bookstore[i][4]-=quantityofBook; 
            console.log("la facture :");
            console.log("le titre    : "+book_title);   
            console.log("la quantite : "+quantityofBook);
            console.log("le prix     : "+bookstore[i][3]*quantityofBook); 
            break;
        }
        

    }
}
function Deletee(book_title){
    for(i=0;i<bookstore.length;i++){
        if(bookstore[i][1]==book_title){
            bookstore.splice(i,1);
        }

    }

}


add(1,"les miserables","victor hugo",350,20);
add(2,"hamid",'sss',700,2);

console.log(bookstore);

About(1,"les miserables","victor hugo");

sale("les miserables",5,10000);

console.log(bookstore);

Deletee("hamid");

console.log(bookstore);

