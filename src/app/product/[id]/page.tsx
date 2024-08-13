import { GetServerSideProps  } from 'next';


// export const getTopById: GetServerSideProps  = async ( context ) => {

//     const { id } = context.query;

//     const url = `http:localhost:8000/api/tops/${id}`;

//     const response = await fetch(url);

//     if(!response.ok){
//         return {
//             notFound: true
//         }
//     }

//     const top = await response.json();

//     return {
//         props: {
//             top,
//         }
//     };

//     //Instead of using getStaticProps, you can use getServerSideProps to fetch the data on every request. 
//     //This ensures that the user always gets the latest data.
// };





const ProductPage = () => {


    return (
        <div>
            hi
        </div>
    )
};

export default ProductPage;