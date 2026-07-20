function EmptyState() {

    const products = [];

    return (

        <div>

            {

                products.length === 0

                ?

                <h2>No Products Found</h2>

                :

                products.map((item,index)=>

                    <p key={index}>{item}</p>

                )

            }

        </div>

    );

}

export default EmptyState;