export const initialState={
    Resturant:[],
    Category:[],
    MainData:[]

}
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        
        case 'FETCH_REST':{
        
            return {
              ...state,
                Resturant:[...action.item]
            }
        }
        case 'FETCH_CATE':{
            
            return {
              ...state,
                Category:[...action.item]
            }
        }
        case 'MAIN_DATA':{
     
            return {
              ...state,
                MainData:[...action.item]
            }
        }
         case 'CLEAR':{
     
            return {
              ...state,
                MainData:[]
            }
        }
        default:
            return {...state}

    }
}
export default Reducer;