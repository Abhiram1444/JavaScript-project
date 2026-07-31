function Authentication() {

    const isLoggedIn = false;

    return (

        <div>

            {
                isLoggedIn

                ?

                <button>Logout</button>

                :

                <button>Login</button>

            }

        </div>

    );

}

export default Authentication;