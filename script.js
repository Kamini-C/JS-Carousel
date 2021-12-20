"use strict";
$(document).ready( () => {
    const slider = $("#image_list"); // fetching my ul list as slider
    // right button click event
    $("#right_button").click( () => {
        // get the value of the left property
        const leftProperty = parseInt(slider.css("left"));
        // move to the next value of the left property
        let newLeftProperty = 0;
        if(leftProperty - 250 > -1500) {
            newLeftProperty = leftProperty - 250;
        }
        //newLeftProperty = (leftProperty-300) > -900 ? leftProperty-300 : leftProperty;
        // change the left property
        slider.animate(
            {left: newLeftProperty},
            1000
        );
    });
    // left button click event
    $("#left_button").click( () => {
        const leftProperty = parseInt(slider.css("left"));
        let newLeftProperty = 0;
        if(leftProperty < 0) {
            newLeftProperty = leftProperty + 250;
        }
        slider.animate(
            {left: newLeftProperty},
            1000
        );
    });
});