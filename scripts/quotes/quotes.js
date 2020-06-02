/*
    This function will convert a single quotes object to an
    HTML representation and return it
*/
const quotesConverter = ( quotesObject) => {

    const quotesHTMLRepresentation = `<section class="quotes">
           ${quotesObject.quotes}
    </section>`

    return quotesHTMLRepresentation

}