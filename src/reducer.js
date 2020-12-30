export const initialState={
    basket:[{
        id:128323,
       title:"New Apple iphone 12 Pro (128GB)-Graphite Colour",
       price:119900,
       rating:5,
        image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg"
    },{
        id:128323,
        title:"New Apple iphone 12 Pro (128GB)-Graphite Colour",
        price:119900,
        rating:5,
         image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg"
    }],
    user:null
};

export const reducer =((state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
                break;

        case 'REMOVE_FROM_BASKET':
            let newbasket=[...state.basket];

            const index=state.basket.findIndex(
                (basketitem)=>basketitem.id===action.id
                );
                // console.log(index);
            if(index>=0){
                    newbasket.splice(index, 1);
            }else{
                console.warn('cont remove product')
            }
            return {
                    ...state,
                    basket:newbasket,
            };    
        break;
            default:return state;        
    }
})

export default reducer;