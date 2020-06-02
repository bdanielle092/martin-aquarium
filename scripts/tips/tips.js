/*
    This function will convert a single tips object to an
    HTML representation and return it
*/
const tipsConverter = ( tipsObject) => {

    const tipsHTMLRepresentation = `<section class="tips">
        ${tipsObject.tips}
    </section>`

    return tipsHTMLRepresentation

}