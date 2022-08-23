import styled from 'styled-components';

export const List = styled.ul`
 display:flex;
 flex-wrap: wrap;
 gap: 20px;
 list-style: none`

export const Card = styled.li`

a{

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 150px;
    height: 200px;
    background: lightblue;    
    border-radius: 15px;
    text-decoration: none;
    
       img{
           max-width: 150px;
           height: 150px;
           object-fit: cover;
           border-radius: 0px 0px 15px 15px;
       }
       span{
           color: white;
           font-weight: 800;
           padding: 5px;
       }
}
a:hover{
    background: blue;
    
}`