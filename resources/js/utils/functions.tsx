class Functions {
    updateCart = (item: Item, number_: number, action: string)=>{
        console.log("add to cart "+sessionStorage.getItem("cart_et0i12"));

        if(sessionStorage.getItem("cart_et0i12")!=null){
            var items = JSON.parse(sessionStorage.getItem("cart_et0i12")!);
            let itemExist = false;

            for(let y=0; y<items.length; y++){
                console.log("Each item ID is "+items[y][0].ItemId+" compared to "+item.ItemId)
                console.log(items[y]);
                if(items[y][0].ItemId==item.ItemId){
                    console.log("Items match")
                    let itemCount = 0;
                    if(action=="add"){
                        itemCount = Number(items[y][1]) + number_;

                        items.splice(y, 1);
                        items.push([item, itemCount]);
                    } else if (action=="minus"){
                        console.log("Remove from cart")
                        if(number_==0){
                            items.splice(y, 1);
                        } else {
                            itemCount = Number(items[y][1]) - number_;
                            items.splice(y, 1);
                            if(itemCount > 0){
                                items.push([item, itemCount]);
                            }
                        }
                    }

                    sessionStorage.setItem("cart_et0i12", JSON.stringify(items))

                    itemExist = true;
                }
            }

            if(itemExist==false){
                console.log("About to add item");
                console.log("Item ID: "+item+"\nNumber: "+number_);

                items.push([item, number_])

                sessionStorage.setItem("cart_et0i12", JSON.stringify(items))
            }

        } else {
            console.log("Nothing like this session existing")
            sessionStorage.setItem("cart_et0i12", JSON.stringify([[item, number_]]))
        }

        return this.getNumberOfItems();
    }

    getNumberOfItems = ()=>{
        let count = 0;

        if(sessionStorage.getItem("cart_et0i12")!=null){
            var items = JSON.parse(sessionStorage.getItem("cart_et0i12")!);

            for(let y=0; y<items.length; y++){
                count = count + Number(items[y][1])
            }
        } else {
            count = 0; 
        }

        return count
    }
}

export default Functions