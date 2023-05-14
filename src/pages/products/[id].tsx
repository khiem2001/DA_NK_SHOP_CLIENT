import React from 'react';

const DetailProduct = () => {
  return (
    <>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>{' '}
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>{' '}
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>{' '}
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
      <div>
        detail Productsssssssssssssssssssssdddddddddddddddddsssddddddddddddddddddddddddddddddddddddddddddddddddds
      </div>
    </>
  );
};

export default DetailProduct;

// import { graphqlClientRequest } from '@/graphql/services/graphql-client';
// import React from 'react';

// const Show = ({ data }) => {
//   return <div></div>;
// };

// export default Show;

// export async function getStaticPaths() {
//     return {
//       paths: [],
//       fallback: true
//     };
//   }

//   export async function getStaticProps({ params }: any) {
//     const queryClient = graphqlClientRequest();
//     let notFound = false;

//     const result: any = await queryClient
//       .request(GetPublicEventDocument, {
//         slug: params?.slug
//       })
//       .catch(error => {
//         console.log('>> Get Event details error: ', error?.message);
//         notFound = true;
//       });

//     return {
//       props: {
//         data: result?.getPublicEvent
//       },
//       revalidate: 10,
//       notFound
//     };
//   }

//   export const getDetailProduct = (id: string) {
//     return 'show/' + id
//   }

// const router = useRouter()

// router.push(getDetailProduct)
