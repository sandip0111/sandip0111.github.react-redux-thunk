export default (state=[],action)=>{

    switch(action.type){

        case 'FETCHED_POST':
            return action.payload;
        default :
        
        return state;
    }
}

