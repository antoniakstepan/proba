let  renderEnteirTree =()=>{
  console.log('state change')
}
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
          
          ],
          newPostText:"Well done"
          
      }
    
      
      
  }
  window.state=state;
  export const addPost = ()=>{
    
    
    let newPost={
      id:5,
      message:state.profileData.newPostText,
      likeCount:0
    }

   state.profileData.posts.push(newPost);
   renderEnteirTree();
   
 }
 export const changeNewPostText =(newText)=>{
   state.profileData.newPostText=newText;
   renderEnteirTree(state);
 }
 export const addMessage = (message)=>{
 
   let newMessage ={
     id:3,
     message:message
   }
   state.dialogData.messages.push(newMessage);
   renderEnteirTree();

 }
export const subscribe=(observer)=>{
  renderEnteirTree= observer//Патерн observe Вивичити !!!!
}



  export default state
