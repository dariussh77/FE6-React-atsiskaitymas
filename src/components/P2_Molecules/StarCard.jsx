import styled from 'styled-components';
const CardDivCSS=styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 500px;
    box-shadow: 10px 10px 10px grey;
    border: 1px solid grey;
    padding: 5px;
    border-radius: 5px;
    >img{
        height: 200px;
        object-fit: cover;
    }
    >p{
        overflow: hidden;
        overflow: ellipsis;
    }
`;
const StarCard = ({star}) => {
    //console.log('star: ', star);
    return ( 
        <CardDivCSS>
            <h3>{star.name}</h3>
            <img src={star.photo.src} alt={star.photo.alt} />
            <p>{star.shortDesc}</p>
        </CardDivCSS>
     );
}
 
export default StarCard;