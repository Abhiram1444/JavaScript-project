function SwitchExample() {

    const grade = "A";

    switch (grade) {

        case "A":
            return <h2>Excellent</h2>;

        case "B":
            return <h2>Very Good</h2>;

        case "C":
            return <h2>Good</h2>;

        default:
            return <h2>Needs Improvement</h2>;
    }

}

export default SwitchExample;