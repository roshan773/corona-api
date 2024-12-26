// function fetchData() {
//     fetch("https://api.rootnet.in/covid19-in/stats/regional")
//         .then((res) => res.json())
//         .then((data) => {
//             // Process the first dataset (regional data)
//             let regionalCards = data.data.regional.map(region => `
//                 <div class="col-12 col-sm-6 col-md-4 mb-4">
//                     <div class="card h-100">
//                         <div class="card-body">
//                             <h3 class="card-title">Location: ${region.loc}</h3>
//                             <p><strong>Total Cases</strong>: ${region.totalConfirmed}</p>
//                             <p><strong>Confirmed Cases (Indian)</strong>: ${region.confirmedCasesIndian}</p>
//                             <p><strong>Confirmed Cases (Foreign)</strong>: ${region.confirmedCasesForeign}</p>
//                             <p><strong>Discharged</strong>: ${region.discharged}</p>
//                             <p><strong>Deaths</strong>: ${region.deaths}</p>
//                         </div>
//                     </div>
//                 </div>
//             `);

//             // Combine and render the cards
//             document.getElementById("container").innerHTML = `
//                 <div class="row">
//                     ${regionalCards.join("")}
//                 </div>
//             `;
//         })
//         .catch((err) => console.log(err));
// }

// fetchData();

function fetchData(){
    fetch("https://api.rootnet.in/covid19-in/stats/regional")
    .then((res) => res.json())
    .then((data) => {
        let regionalCards = data.data.regional.map(region => `
                 <div class="col-12 col-sm-6 col-md-4 mb-4">
                     <div class="card h-100">
                         <div class="card-body">
                             <h3 class="card-title">Location: ${region.loc}</h3>
                             <p><strong>Total Cases</strong>: ${region.totalConfirmed}</p>
                             <p><strong>Confirmed Cases (Indian)</strong>: ${region.confirmedCasesIndian}</p>
                             <p><strong>Confirmed Cases (Foreign)</strong>: ${region.confirmedCasesForeign}</p>
                             <p><strong>Discharged</strong>: ${region.discharged}</p>
                             <p><strong>Deaths</strong>: ${region.deaths}</p>
                         </div>
                     </div>
                 </div>
             `);
            
                        // Combine and render the cards
                        document.getElementById("container").innerHTML = `
                            <div class="row">
                                ${regionalCards.join("")}
                            </div>
                        `;
                        })
    .catch((err) => console.log(err))
}
fetchData();