import styled from 'styled-components';
const CardDivCSS=styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    >img{
        height: 200px;
        object-fit: cover;
    }
`;
const StarCard = ({star}) => {
    console.log('star: ', star);
    return ( 
        <CardDivCSS>
            <h1>{star.name}</h1>
            <img src={star.photo.src} alt={star.photo.alt} />
        </CardDivCSS>
     );
}
 
export default StarCard;