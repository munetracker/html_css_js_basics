// https://github.com/munetracker/html_css_js_basics

// logical
    let firstnumber = 1;
    let secondnumber = 10;

    // console.log( firstnumber == secondnumber );
    // console.log( firstnumber === secondnumber );
    // console.log( firstnumber != secondnumber );
    // console.log( firstnumber !== secondnumber );
    // console.log( firstnumber > secondnumber );
    // console.log( firstnumber < secondnumber );
    // console.log( firstnumber >= secondnumber );
    // console.log( firstnumber <= secondnumber );

    // ternary
        // store_variable = condition ? true->assign value : false->assign value;
        // let winner_number = firstnumber > secondnumber ? "firstnumber is winner" : "secondnunber";
        // console.log(winner_number)
        
    // if, else if, else
        if( firstnumber > secondnumber ){
            winner_number = "firstnumber is winner";
        }else{
            winner_number = "secondnunber";
        }

        let age = 40;
        let sex = "male";
        let sunday_class = "";
        let specific_class = "";
        if(age < 12){
            sunday_class = "Primary";
            // boys
                if(sex == "male"){
                    specific_class = "boys";
                }else{
                    specific_class = "girls";
                }
        // 12-17
        }else if (age > 11 && age < 18){
            sunday_class = "Youth";
            specific_class = sex == "male"? "YM": "YW";
        }else{
            // eq rs
            sunday_class = "Adult";
            specific_class = sex == "male"? "EQ": "RS";
        }
        // console.log(sunday_class, specific_class);

    // switch break
        // let age2 = 12;
        // switch (age2) {
        //     case 12:
        //         console.log("you are a young man/woman")            
        //         // break;
        //     case 18:
        //         console.log("you are on debut")            
        //         // break;
        //     case 60:
        //         console.log("you are retired")            
        //         // break;
        //     default:
        //         console.log("age bracket not mention")  
        //         break;
        // }



