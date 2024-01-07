import React, { useContext, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { formContext } from '../Context/FormContext';

const CREATE_TODO = gql`
  mutation createTodo($title:String! , $content:String!){
    createTodo(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

const UPDATE_TODO=gql`
mutation updateTodo($id:ID!,$title:String!,$content:String!)
{
    updateTodo(id:$id,title: $title, content: $content)
    {
       id
       title
       content
    }
}
`;


const Form = () => {
    const {title,setTitle,content,setContent,update,setUpdate,id}=useContext(formContext)

    const [createTodo] = useMutation(CREATE_TODO);
    const [updateTodo]=useMutation(UPDATE_TODO);
    

    const handleSubmit= async (e)=> // create todo
    {
        e.preventDefault();
        if(update==true)
        {
            //update todo
            await updateTodo({
                variables:{
                    id,
                    title,
                    content,
                }
            })
        }
        else 
        {
            // create todo
            await createTodo({
                variables:{
                    title,
                    content
                }
            })
        }

        setUpdate(false)
        setTitle('');
        setContent('');
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input className='border border-black px-2 mx-3 my-3' onChange={(e)=>setTitle(e.target.value)} value={title} type="text"  placeholder='title'/>
            <br /> 
            <input className='border border-black px-2 mx-3 mb-3' onChange={(e)=>setContent(e.target.value)} value={content} type="text"  placeholder='content'/>
            <br />
            <button className='mb-3 mx-3 bg-slate-300 p-1' type='submit'>{update?"Update":"Submit"}</button>
        </form> 
    </>
  )
}

export default Form