
document.addEventListener("DOMContentLoaded", () => {
    
    const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

    // dom helpers
    const $ = (selector) => (document.querySelector(selector));
    const $$ = (selector) => (document.querySelectorAll(selector));

    //accessing element

    const dropdowns = $$(".dropdown select");
    const btn = $("form #submit");
    const fromCurr = $(".from select");
    const toCurr = $(".to select");
    const msg = $(".msg span");
    const resetbtn = $("#reset");
    const amount= $(".amount input")
    ///
    const modebtn = $("#toggle-btn");
    const body = document.body;
    
    

    // page load par theme check
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark");
            if (modebtn) {
                modebtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        }

    //screen mode handling
    if (modebtn) {
        modebtn.addEventListener("click", () => {
            body.classList.toggle("dark");
            if (body.classList.contains("dark"))
            {
                modebtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
                localStorage.setItem("theme", "dark");
            } else {
                modebtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
                localStorage.setItem("theme", "light");
            }
    
        })
    }
    
    // setting the dropdown menu
    for (let select of dropdowns) {
        for (let currCode in countryList) {
            
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;


            // set in starting / by default
            if (select.name === "from" && currCode === "USD") {
                newOption.selected = "selected";
            } else if(select.name==="to"  && currCode==="INR"){
                newOption.selected = "selected";
            }

            select.append(newOption);
        }   

        select.addEventListener("change", (evt) => {
            updateFlag(evt.target); // target basically indicate where passing value
        })
    }
    

    //fatching rate value
    const updateExchangeRate = async () => {
        let amValue = amount.value;
        if (amValue === "" || amValue < 1) {
            amValue = 1;
            amount.value = "1";
        }

        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

        try {
            const response = await fetch(URL);

            if (!response.ok) throw new Error("Failed to fetch exchange rate.");

            const data = await response.json();

            const rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

            if (!rate) throw new Error("Currency not supported");

            const finalAmount = (amValue * rate).toFixed(2);
            msg.innerText = `${amValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

        } catch (error) {
            msg.innerText = "Unable to fetch exchange rates at the moment. Please try again shortly.";
            console.error(error);
        }

    }


            // Update country flag
        const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    };
    


        const resetfunction = () => {
            
              amount.value = 1;
              fromCurr.value = "USD";
              toCurr.value = "INR";
            
              updateFlag(fromCurr);
              updateFlag(toCurr);
            
              msg.innerText = msg.innerText ;     // clean UI
              updateExchangeRate();  // fetch fresh rate
        };
        
            if (resetbtn) {
              resetbtn.addEventListener("click", (e) => {
                e.preventDefault();
                 resetfunction();
              });
            }

    

        // Button click handler
    btn.addEventListener("click", (evt) => {
    evt.preventDefault(); //  all automatic work be closed
    updateExchangeRate();
    });
    
    // Auto-update when page loads
        window.addEventListener("load", () => {
        updateExchangeRate();
        });
            
})
/* END */

