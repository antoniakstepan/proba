import {renderEnteirTree} from './../render';
  let state ={
      dialogData:{
        dialogs:[
            { id: "1", name: "Stepan" },
            { id: "2", name: "Sofia" },
            { id: "3", name: "Roksolana" },
            { id: "4", name: "Volodia" }
          ],
          messages:[
            { id: "1", message: "Hi" },
            { id: "2", message: "How are you?" }
          ]
      },
      profileData:{
        posts: [
            { id: "1", message: "How are you?", likeCount: "0" },
            { id: "2", message: "Hello world", likeCount: "13" }
          
          ]
      }
    
      
      
  }
  export let addPost = (addMessage)=>{
    
    
    let newPost={
      id:5,
      message:addMessage,
      likeCount:0
    }

   state.profileData.posts.push(newPost);
   renderEnteirTree(state);

 }
 export let addMessage = (message)=>{
 
   let newMessage ={
     id:3,
     message:message
   }
   state.dialogData.messages.push(newMessage);
   renderEnteirTree(state);

 }




  export default state
