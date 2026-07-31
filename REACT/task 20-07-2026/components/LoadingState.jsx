function LoadingState() {

    const loading = true;

    return (

        <div>

            {
                loading

                ?

                <h2>Loading...</h2>

                :

                <h2>Data Loaded Successfully</h2>

            }

        </div>

    );

}

export default LoadingState;