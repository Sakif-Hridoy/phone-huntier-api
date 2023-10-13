const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  const phones = data.data;
  // console.log(data.data)
  displayPhones(phones);
};

// loadPhone();

const displayPhones = (phones) => {
  //Step 1
  const phoneContainer = document.getElementById("phone-container");
  // clear old phone models and display current brands
  phoneContainer.textContent = "";

// logics to show limited numbers items and all items
const showAllContainer = document.getElementById('show-all-container');
if(phones.length>12){
  showAllContainer.classList.remove('hidden')
}
else{
  showAllContainer.classList.add('hidden')

}



  // load limited number of items

  phones = phones.slice(0,12)

  // show all and logics




  // console.log(phones)
  phones.forEach((phone) => {
    // console.log(phone);
    //Step 2
    const phoneCard = document.createElement("div");

    phoneCard.classList = `card-compact p-4 bg-gray-100 shadow-xl`;
    // Step 3
    phoneCard.innerHTML = `
    <figure>
              <img
                src="${phone.image}"
                alt="Phones"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
    `;

    //step 4
    phoneContainer.appendChild(phoneCard);
  });
  // hide toggleSpinner
  toggleLoadingSpinner(false)
};

const handleSearch = () => {
  // console.log('search clicked')
  toggleLoadingSpinner(true)
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText)
  loadPhone(searchText);
};

const handleSearch2 = () => {
  // console.log('search clicked')
  toggleLoadingSpinner(true)
  const searchField = document.getElementById("search-field2");
  const searchText = searchField.value;
  // console.log(searchText)
  loadPhone(searchText);
};


const toggleLoadingSpinner = (isLoading)=>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden');

  }
}
