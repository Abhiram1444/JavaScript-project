function TernaryExample() {

    const age = 20;

    return (
        <div>
            {
                age >= 18
                ? <h2>Eligible to Vote</h2>
                : <h2>Not Eligible</h2>
            }
        </div>
    );
}

export default TernaryExample;