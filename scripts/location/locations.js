/*
    This function will convert a single location object to an
    HTML representation and return it
*/
const locationsConverter = (locationsObject) => {

    const locationsHTMLRepresentation = `<section class="locations">
        <div class="">
            <img class="locations__picture" src="${locationsObject.picture}"
                alt="${locationsObject.name} />
        </div>
        <div class="locations__details">
            locations: ${locationsObject.details}
        </div>
    </section>`

    return locationsHTMLRepresentation

}