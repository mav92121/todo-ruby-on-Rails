import { useQuery, gql,useMutation} from '@apollo/client';
import { useContext } from 'react';
import { formContext } from '../Context/FormContext';


const ShowTodos = () => {
    const {title,setTitle,content,setContent,update,setUpdate,setId,id}=useContext(formContext);
    const GET_TODOS = gql`
    query todos {
      todos {
        id
        title
        content
    }
}
`;
const DELETE_TODO=gql`
mutation deleteTodo($id:ID!)
{
    deleteTodo(id:$id)
}
`;

const [deleteTodo]=useMutation(DELETE_TODO);


  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return(
    data.todos.map(({id,title,content})=>(
      <div className='border border-black max-w-96 min-w-fit m-3'>
        <p>{id}</p> 
        <hr/>
        <div className='flex justify-between'>
            <p>{title}</p><p><button onClick={()=>{setId(id);  setUpdate(true) ;setTitle(title); setContent(content)}}  className='border border-black w-16 bg-green-100'>update</button></p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <p>{content}</p><p><button onClick={()=>{deleteTodo({variables:{id}})}} className='border border-black w-16 bg-red-100'>delete</button></p>
        </div>
      </div>
    ))
  )
}

export default ShowTodos;
