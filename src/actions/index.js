import jsonPlaceHolder from '../api/jsonPlaceHolder';
import *  as _ from 'lodash';
export const fetchPosts=()=>{
    
    return async dispatch=>{
        const response= await jsonPlaceHolder.get('/posts');
    
    

   
            dispatch({
                     type : 'FETCHED_POST',
                     payload : response.data
                });
    }
};

export const fetchPostsAndUser=()=>async (dispatch,getState)=>{
    await dispatch(fetchPosts());
    const userIds=_.uniq(_.map(getState().posts,'userId'));
     userIds.forEach(id=>dispatch(fetchUser(id)));
     console.log(userIds);
}

// export const fetchUser=(id)=>

//     dispatch=>{

//         _fetchUser(id,dispatch);
//     }

// const _fetchUser= _.memoize(async (id,dispatch)=>{

    
//         const response=await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({

//         type : 'FETCHED_USER',
//         payload : response.data
//     });
// })
export const fetchUser= (id)=>

   async dispatch=>{
        const response=await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({

        type : 'FETCHED_USER',
        payload : response.data
    });
    }

