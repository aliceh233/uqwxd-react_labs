const increment = (val) => {
    return {
        type: 'INCREMENT',
        /** val is the value you want to
         increase the counter by everytime
         the button is clicked. **/
        inc: val
    }
}

export default increment;