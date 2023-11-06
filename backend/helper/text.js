module.exports = {
    capitalize(string) {

        return string ? string[0].toUpperCase() + string.substring(1) : string;
    }
}