import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const CategoriesDetails = () => {

    const [carddetails, setcarddetails] = useState();

    const detailsCard = useLoaderData();
  
    const { id } = useParams();

    useEffect(() => {
        const details = detailsCard?.find((carddetails) => carddetails.id == id);
    
        // console.log(details);
        setcarddetails(details);
      }, [id, detailsCard]);
    
      console.log(detailsCard);



    return (
        <div>
            <DetailsCard show={carddetails}></DetailsCard>
            
        </div>
    );
};

export default CategoriesDetails;